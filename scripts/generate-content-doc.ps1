Set-Location "D:\Mouni\technumen"
$ErrorActionPreference = "Stop"

function Get-CleanTextFromHtml([string]$html) {
    if ([string]::IsNullOrWhiteSpace($html)) { return @() }

    $content = [regex]::Replace($html, "(?is)<script[^>]*>.*?</script>", " ")
    $content = [regex]::Replace($content, "(?is)<style[^>]*>.*?</style>", " ")
    $content = [regex]::Replace($content, "(?is)<!--.*?-->", " ")

    $bodyMatch = [regex]::Match($content, "(?is)<body[^>]*>(.*?)</body>")
    if ($bodyMatch.Success) {
        $content = $bodyMatch.Groups[1].Value
    }

    $content = [regex]::Replace($content, "(?i)</(p|h1|h2|h3|h4|h5|h6|li|div|section|article|br|tr|td|th|ul|ol|header|footer|main|nav|table)>", "`n")
    $content = [regex]::Replace($content, "(?is)<[^>]+>", " ")
    $content = [System.Net.WebUtility]::HtmlDecode($content)

    $lines = $content -split "`r?`n" |
        ForEach-Object { ($_ -replace "\s+", " ").Trim() } |
        Where-Object { $_ -and $_.Length -gt 0 }

    return $lines
}

function Escape-Xml([string]$text) {
    if ($null -eq $text) { return "" }

    return $text.Replace("&", "&amp;").Replace("<", "&lt;").Replace(">", "&gt;").Replace('"', "&quot;").Replace("'", "&apos;")
}

$sections = New-Object System.Collections.Generic.List[string]
$sections.Add("Website Content Review")
$sections.Add("Generated on: $(Get-Date -Format "yyyy-MM-dd HH:mm:ss")")
$sections.Add("")

$htmlFiles = Get-ChildItem -File -Filter *.html | Sort-Object Name
foreach ($file in $htmlFiles) {
    $sections.Add("=== $($file.Name) ===")

    $html = Get-Content -Raw -Path $file.FullName
    $lines = Get-CleanTextFromHtml $html

    if ($lines.Count -eq 0) {
        $sections.Add("[No extractable text found]")
    }
    else {
        foreach ($line in $lines) {
            $sections.Add($line)
        }
    }

    $sections.Add("")
}

$dynamicFile = Join-Path (Get-Location) "content-pages.js"
if (Test-Path $dynamicFile) {
    $sections.Add("=== content-pages.js (dynamic page content) ===")

    $js = Get-Content -Raw -Path $dynamicFile
    $templateMatches = [regex]::Matches($js, '(?s)`(.*?)`')

    if ($templateMatches.Count -gt 0) {
        foreach ($m in $templateMatches) {
            $templateText = $m.Groups[1].Value
            $lines = Get-CleanTextFromHtml $templateText
            foreach ($line in $lines) {
                $sections.Add($line)
            }
        }
    }
    else {
        $sections.Add("[No template literal content found]")
    }

    $sections.Add("")
}

$paragraphXml = New-Object System.Text.StringBuilder
foreach ($line in $sections) {
    $safe = Escape-Xml $line
    [void]$paragraphXml.Append(([string]::Format('<w:p><w:r><w:t xml:space="preserve">{0}</w:t></w:r></w:p>', $safe)))
}

$docXml = @"
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:wpc="http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:wp14="http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing" xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing" xmlns:w10="urn:schemas-microsoft-com:office:word" xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:w14="http://schemas.microsoft.com/office/word/2010/wordml" xmlns:wpg="http://schemas.microsoft.com/office/word/2010/wordprocessingGroup" xmlns:wpi="http://schemas.microsoft.com/office/word/2010/wordprocessingInk" xmlns:wne="http://schemas.microsoft.com/office/word/2006/wordml" xmlns:wps="http://schemas.microsoft.com/office/word/2010/wordprocessingShape" mc:Ignorable="w14 wp14">
  <w:body>
    $($paragraphXml.ToString())
    <w:sectPr>
      <w:pgSz w:w="12240" w:h="15840"/>
      <w:pgMar w:top="1440" w:right="1440" w:bottom="1440" w:left="1440" w:header="708" w:footer="708" w:gutter="0"/>
      <w:cols w:space="708"/>
      <w:docGrid w:linePitch="360"/>
    </w:sectPr>
  </w:body>
</w:document>
"@

$contentTypesXml = @"
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
  <Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/>
  <Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml"/>
</Types>
"@

$relsXml = @"
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/>
</Relationships>
"@

$wordRelsXml = @"
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"/>
"@

$coreXml = @"
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:dcmitype="http://purl.org/dc/dcmitype/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <dc:title>Website Content Review</dc:title>
  <dc:creator>GitHub Copilot</dc:creator>
  <cp:lastModifiedBy>GitHub Copilot</cp:lastModifiedBy>
  <dcterms:created xsi:type="dcterms:W3CDTF">$(Get-Date -Format s)Z</dcterms:created>
  <dcterms:modified xsi:type="dcterms:W3CDTF">$(Get-Date -Format s)Z</dcterms:modified>
</cp:coreProperties>
"@

$appXml = @"
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties" xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes">
  <Application>Microsoft Office Word</Application>
</Properties>
"@

$tempDir = Join-Path $env:TEMP ("docx_" + [guid]::NewGuid().ToString("N"))
New-Item -ItemType Directory -Path $tempDir | Out-Null
New-Item -ItemType Directory -Path (Join-Path $tempDir "_rels") | Out-Null
New-Item -ItemType Directory -Path (Join-Path $tempDir "word") | Out-Null
New-Item -ItemType Directory -Path (Join-Path $tempDir "word\_rels") | Out-Null
New-Item -ItemType Directory -Path (Join-Path $tempDir "docProps") | Out-Null

Set-Content -Path (Join-Path $tempDir "[Content_Types].xml") -Value $contentTypesXml -Encoding UTF8
Set-Content -Path (Join-Path $tempDir "_rels\.rels") -Value $relsXml -Encoding UTF8
Set-Content -Path (Join-Path $tempDir "word\document.xml") -Value $docXml -Encoding UTF8
Set-Content -Path (Join-Path $tempDir "word\_rels\document.xml.rels") -Value $wordRelsXml -Encoding UTF8
Set-Content -Path (Join-Path $tempDir "docProps\core.xml") -Value $coreXml -Encoding UTF8
Set-Content -Path (Join-Path $tempDir "docProps\app.xml") -Value $appXml -Encoding UTF8

$outDocx = Join-Path (Get-Location) "Website-Content-Review.docx"
if (Test-Path $outDocx) {
    Remove-Item $outDocx -Force
}

Compress-Archive -Path (Join-Path $tempDir "*") -DestinationPath $outDocx -Force
Remove-Item -Path $tempDir -Recurse -Force

Write-Output "Created: $outDocx"
