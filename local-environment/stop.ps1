Write-Output "Stopping localstack and services"
if ([IO.Directory]::Exists( (Join-Path (Get-Location) 'local-environment') )) {
    Set-Location "local-environment"
}
docker-compose down