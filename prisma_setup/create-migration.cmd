@echo off
:: Script para criar uma migração no Prisma

echo Iniciando processo de criação de migração...

:: Verificar se o Prisma está instalado
npx prisma -v >nul 2>&1
if %errorlevel% neq 0 (
    echo Prisma não está instalado. Execute "npm install prisma --save-dev" antes de continuar.
    exit /b 1
)

:: Solicitar o nome da migração
set /p MIGRATION_NAME=Digite o nome da migração: 

:: Validar se o nome foi fornecido
if "%MIGRATION_NAME%"=="" (
    echo Nome da migração é obrigatório. Tente novamente.
    exit /b 1
)

:: Executar comando de migração
echo Criando migração com o nome "%MIGRATION_NAME%"...
npx prisma migrate dev --name "%MIGRATION_NAME%"

echo Migração criada com sucesso!
pause
