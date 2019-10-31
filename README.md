## FBOTS
Free open source agar.io facebook bots, this have 2 versions: normal and proxy version!

## Discord
1. [200bots.ga](http://200bots.ga)
2. [Free Agar.io Bots](https://discord.gg/SDMNEcJ)
3. [Retrax](https://discord.gg/AVzgvpS)

## Usage
1. [How to get Facebook Token](https://www.youtube.com/watch?v=Sjtb_OHP2tE)
2. [Video tutorial for Windows](https://youtu.be/qnFnkmkh2VQ)


## Windows
1. Install [Node.js](https://nodejs.org)
2. Install [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) extension on your browser
3. Download the bots files from this repository as a ZIP and extract them on a folder
4. Run `install.bat` and wait for it to close by itself
5. Run `server.bat` and leave it open
6. Copy and paste the contents of either [`fbot.vanilla.user.js`](https://github.com/retrax-agar/fbot/raw/master/fbot.vanilla.user.js)
into a new Tampermonkey userscript and save it
7. Go to [agar.io](https://agar.io) with 1 of the 2 userscripts enabled and click "Connect" button, the status should say "Connected" in green
8. Create party and make sure that you are logged in on your agar.io account then click "Start Bots" button, if your IP doesn't has captcha the button should turn red and say "Stop Bots" if you get an alert saying your IP has captcha scroll down to the part where i explain different ways to fix that
9. To stop bots click the "Stop Bots" button and wait 30 seconds for the process to close you will see a countdown there
10. To run the bots again just run `start.bat`, click "Connect" button and then click "Start Bots" button if you did everything right bots should start again
11. Always make sure you wait the 30 seconds for process to close or you are gonna get captcha on your ip

## REPL.IT
1. Go to https://repl.it/ and create an account.
2. Go to https://repl.it/@retrax and click one of the repos. Then click the fork button.
3. Click the start button on your new repo and refresh the page.
4. The URL on the top left bot is your websocket URL. Copy it and replace https with wss. It s n hould look something like this: wss://agario-bots-14.turbocheetah.repl.co
5. Install this userscript and enter your websocket URL in the last input box: https://github.com/retrax-agar/fbot/raw/master/fbot.vanilla.user.js
6. Join a lobby and click connect then start.
7. Always make sure you wait 30 seconds before hitting stop in repl.
8. If you ever get captcha just repeat these steps and get a new URL


## Captcha (only for Windows)
If you get captcha alert you need to change your IP or get rid of captcha by playing with your IP. You can do so by:
- Restarting your router (only if you have a dynamic IP)
- Connecting to a VPN server like one from [ProtonVPN](https://protonvpn.com) which you make sure that doesn't has captcha
- Playing logged out of your agar.io account until captcha goes away
