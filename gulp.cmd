@echo off

if not exist node\.bin\gulp (
    echo Building npm modules
    call npm rebuild
)

node_modules\.bin\gulp %*