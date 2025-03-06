 @echo off
set "batchPath=%~dp0"

echo ------------------------------------------------
echo Starting Recording at %~dp0
::echo Recording Application URL %1"
::echo Recording will be available at "%~dp0test\recording.spec.js"
::pause

::echo cd %batchPath%
cd %batchPath%

mkdir playwright-temp >nul 2>&1
::echo cd playwright-temp
cd playwright-temp  

@call npx playwright codegen %1" -o "%~dp0playwright-temp\recording.spec.js" >nul 2>&1
echo Recording Completed
::pause

