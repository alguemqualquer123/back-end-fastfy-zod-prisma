@echo off
echo Abrindo porta 3306 para TCP e UDP no Firewall do Windows...

:: Adicionar regra para TCP
netsh advfirewall firewall add rule name="Abrir Porta 3306 TCP" dir=in action=allow protocol=TCP localport=3306

:: Adicionar regra para UDP
netsh advfirewall firewall add rule name="Abrir Porta 3306 UDP" dir=in action=allow protocol=UDP localport=3306

echo Porta 3306 aberta com sucesso para TCP e UDP!
pause
