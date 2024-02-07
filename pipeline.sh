#!/usr/bin/env bash

printf 'these are the all PR tests... \n'

if [ "${1}" != "master" ]
then 
    printf 'not PR to master'
    exit 0
fi