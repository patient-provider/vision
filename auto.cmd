@echo off

if not exist node_modules/.bin/webpack.cmd (
    echo Building npm modules
    call npm rebuild
)

npm run %*