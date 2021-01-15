aws configure set region us-east-1 --profile localstack
aws configure set aws_access_key_id 123Aa321 --profile localstack
aws configure set aws_secret_access_key 123Aa321 --profile localstack

Write-Output "Launching localstack and services"
if ([IO.Directory]::Exists( (Join-Path (Get-Location) 'local-environment') )) {
    Set-Location "local-environment"
}
docker-compose up -d

Write-Output "Waiting localstack to launch dashboard on 8080..."
Start-Sleep -Seconds 10

Write-Output ""
Write-Output "Localstack up and running!"
Write-Output ""
Write-Output "Creating queues..."
