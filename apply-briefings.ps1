# apply-briefings.ps1
# Uso: .\apply-briefings.ps1 "C:\caminho\para\Calendario Cross Site 2026 - Standalone.html"
# Se nao passar argumento, busca automaticamente na pasta Downloads

param(
    [string]$HtmlPath = ""
)

if (-not $HtmlPath) {
    $HtmlPath = "$env:USERPROFILE\Downloads\Calendario Cross Site 2026 - Standalone.html"
}

if (-not (Test-Path $HtmlPath)) {
    Write-Host "ERRO: Arquivo nao encontrado: $HtmlPath" -ForegroundColor Red
    exit 1
}

$content = [System.IO.File]::ReadAllText($HtmlPath, [System.Text.Encoding]::UTF8)

# Verificar se briefings ja estao injetados
if ($content.IndexOf("BRIEFINGS_URL") -gt 0) {
    Write-Host "Briefings ja estao injetados neste arquivo." -ForegroundColor Yellow

    $resp = Read-Host "Deseja reinjetar mesmo assim? (s/N)"
    if ($resp -notmatch '^[sS]$') {
        Write-Host "Nenhuma alteracao feita." -ForegroundColor Cyan
        exit 0
    }

    # Remover injecao anterior: tudo entre <script>(function(){ e o ponto de injecao
    $searchStr2 = '<script type=\"text/babel\" src=\"1b535fba'
    $startMarker = '<script>(function(){'
    $startIdx = $content.IndexOf($startMarker)
    $searchIdx = $content.IndexOf($searchStr2)
    if ($startIdx -gt 0 -and $searchIdx -gt $startIdx) {
        $content = $content.Remove($startIdx, $searchIdx - $startIdx)
        Write-Host "Injecao anterior removida." -ForegroundColor Gray
    }
}

# Verificar ponto de injecao
$searchStr = '<script type=\"text/babel\" src=\"1b535fba'
if ($content.IndexOf($searchStr) -lt 0) {
    Write-Host "ERRO: Ponto de injecao nao encontrado. O arquivo pode ser de uma versao diferente." -ForegroundColor Red
    exit 1
}

# Ler BRIEFINGS_URL atual se existir (para preservar ao reinjetar)
$currentUrl = ""
$urlMatch = [regex]::Match($content, 'var BRIEFINGS_URL\s*=\s*"([^"]*)"')
if ($urlMatch.Success -and $urlMatch.Groups[1].Value) {
    $currentUrl = $urlMatch.Groups[1].Value
    Write-Host "URL de briefings atual detectada: $currentUrl" -ForegroundColor Cyan
}

# Pedir nova URL (ou manter a atual)
if ($currentUrl) {
    $newUrl = Read-Host "BRIEFINGS_URL atual: $currentUrl`nNova URL (Enter para manter)"
    if (-not $newUrl) { $newUrl = $currentUrl }
} else {
    $newUrl = Read-Host "Cole a URL do Google Apps Script Web App (ou Enter para deixar em branco)"
}

# Montar codigo JS
# Usa Object.defineProperty para aguardar ReactDOM ser carregado pelo bundler
$jsCode = @"
(function(){
  var BRIEFINGS_URL = "$newUrl";
  if (!BRIEFINGS_URL) return;
  var _orig=null,_p=null,_d=false,_t=null;
  function _r(){clearTimeout(_t);if(!_p||!_orig)return;var q=_p;_p=null;_orig(q.c).render(q.e);}
  function _patch(){
    _orig=ReactDOM.createRoot.bind(ReactDOM);
    ReactDOM.createRoot=function(c){return{render:function(e){if(_d){_orig(c).render(e);}else{_p={c:c,e:e};_t=setTimeout(_r,3000);}}};};
  }
  window.onBriefings=function(data){
    _d=true;
    if(data&&!data._error&&window.DATA&&window.DATA.bySite){
      var m={};
      for(var k in data){if(k.charAt(0)==='_')continue;if(data[k]&&data[k].briefingUrl)m[k.toLowerCase().trim()]=data[k].briefingUrl;}
      var S=window.DATA.bySite;
      for(var s in S)for(var mo in S[s]){var wks=(S[s][mo]||{}).weeks||[];for(var w=0;w<wks.length;w++){var its=(wks[w]||{}).items||[];for(var i=0;i<its.length;i++){var it=its[i];if(!it.name||it.briefingUrl)continue;var u=m[(it.name||'').toLowerCase().trim()];if(u)it.briefingUrl=u;}}}
    }
    _r();
  };
  var sc=document.createElement('script');
  sc.src=BRIEFINGS_URL+(BRIEFINGS_URL.indexOf('?')>=0?'&':'?')+'callback=onBriefings&_t='+Date.now();
  sc.onerror=function(){_d=true;_r();};
  document.head.appendChild(sc);
  if(typeof ReactDOM!=='undefined'){
    _patch();
  } else {
    Object.defineProperty(window,'ReactDOM',{configurable:true,set:function(val){
      Object.defineProperty(window,'ReactDOM',{configurable:true,writable:true,value:val});
      _patch();
    }});
  }
})()
"@

# JSON-encode: escape backslashes e aspas duplas, converter newlines em \n literal
$jsonJs = $jsCode -replace '\\', '\\\\' -replace '"', '\"' -replace "`r`n", '\n' -replace "`n", '\n' -replace "`r", '\n'

# Tag de fechamento segura: </script> com backslash literal (nao fecha o <script type="__bundler/template"> externo)
$bs = [char]0x5C
$safeClose = '<' + $bs + 'u002Fscript>'
$inject = '<script>' + $jsonJs + $safeClose + '\n'

# Injetar antes do ponto de injecao
$insertAt = $content.IndexOf($searchStr)
$newContent = $content.Substring(0, $insertAt) + $inject + $content.Substring($insertAt)

if ($newContent.Length -eq $content.Length) {
    Write-Host "ERRO: Injecao falhou (conteudo nao mudou)." -ForegroundColor Red
    exit 1
}

[System.IO.File]::WriteAllText($HtmlPath, $newContent, [System.Text.Encoding]::UTF8)

Write-Host ""
Write-Host "Pronto!" -ForegroundColor Green
Write-Host "Arquivo atualizado: $HtmlPath" -ForegroundColor Green
if ($newUrl) {
    Write-Host "BRIEFINGS_URL configurada." -ForegroundColor Green
} else {
    Write-Host "BRIEFINGS_URL em branco — sincronizacao desativada ate configurar." -ForegroundColor Yellow
}
