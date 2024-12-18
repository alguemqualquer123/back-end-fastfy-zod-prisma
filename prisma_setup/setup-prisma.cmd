@echo off
:: Configuração inicial para instalação do Prisma

echo Iniciando a configuração do Prisma...

:: Verificar se o Node.js está instalado
node -v >nul 2>&1
if %errorlevel% neq 0 (
    echo Node.js não está instalado. Por favor, instale o Node.js antes de continuar.
    exit /b 1
)

:: Inicializar o projeto Node.js
if not exist package.json (
    echo Inicializando o projeto Node.js...
    npm init -y
)

:: Instalar Prisma CLI e Prisma Client
echo Instalando Prisma CLI e Prisma Client...
npm install prisma --save-dev
npm install @prisma/client

:: Inicializar Prisma
echo Inicializando o Prisma...
npx prisma init

:: Exibir mensagem de sucesso
echo Configuração concluída com sucesso. Verifique o arquivo "prisma/schema.prisma" para configurar seus modelos.
pause
