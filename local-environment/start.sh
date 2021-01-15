#!/bin/bash
export AWS_PAGER=""
aws configure set region us-east-1 --profile localstack
aws configure set aws_access_key_id 123Aa321 --profile localstack
aws configure set aws_secret_access_key 123Aa321 --profile localstack

echo "Launching localstack..."
[ -d "local-environment" ] && cd local-environment
docker-compose up -d

echo "Waiting localstack to launch dashboard on 8080..."
sleep 10
echo
echo "Localstack up and running!"
echo