# Restore-ApplicationCache.db on USB Storage 6.72 (Ported By Mugiwara)

# inclu : ApplicationCache  Region all in one file host 5.2 By Mugiwara in user guide 

# NOTE: paste ApplicationCache.db file to the root on usb and go on ps4 browser on this https://ciss84.github.io/Restore-Cache/index.html
https://www.youtube.com/watch?v=WqXzGHuz7Rk&ab_channel=Son84Goku
# CREDIT 
# stooged for 5.05 
https://github.com/stooged/Cache-Install

payload to (re)install ApplicationCache.db to the ps4.

the payload will look for a file called ApplicationCache.db on the root of a usb drive and install it to the console.

if no file is found on the usb drive or if there is no usb drive found the payload will create and install a basic ApplicationCache.db to the console.

using the basic install you can access the landing page through the ps4 user guide or the webbrowser by going to https://ciss84.github.io/Restore-Cache/index.html

if you already have another offline cache installed you can back that up using the DB_SG_Backup payload and place the ApplicationCache.db from that backup on the root of a usb drive and use this payload to reinstall it if you have to delete the browser data or lose it for any reason.
