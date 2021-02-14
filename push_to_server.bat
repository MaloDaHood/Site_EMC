@echo off
cd C:\Users\Malo\documents\github\Site_EMC
git add *
set /p input=Texte du commit ?
git commit -m "%input%"
git push
echo Push vers le serveur web :
git push site_EMC main