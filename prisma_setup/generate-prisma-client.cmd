@echo off
:: Script para gerar o Prisma Client

echo Iniciando geração do Prisma Client...

:: Verificar se o Prisma está instalado
npx prisma -v >nul 2>&1
if %errorlevel% neq 0 (
    echo Prisma não está instalado. Execute "npm install prisma --save-dev" antes de continuar.
    exit /b 1
)

:: Gerar o Prisma Client
 

echo Prisma Client gerado com sucesso!
pause
