@echo off

if not exist node\.bin\jake (
    echo Building npm modules
    call npm rebuild
)

node_modules\.bin\jake %*