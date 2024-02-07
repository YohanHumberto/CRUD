#!/usr/bin/env bash

if [ "${1}" = "stage" ]
then
    printf 'Not necessary run test...\n'
    exit 0
fi


if [ "${1}" = "master" ]
then
    export MY_MESSAGE="PR to ${1} OK"
    printf 'Run all tests...\n'
    
    pip install -r src/requirements.txt
    pip install -r src/requirements_dev.txt
    python -m pytest --cov-report xml:tests/coverage.xml --cov=. tests -s -vv
fi