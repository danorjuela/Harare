#!/bin/bash
echo "Stopping localstack..."
[ -d "local-environment" ] && cd local-environment
docker-compose down