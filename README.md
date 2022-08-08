# user-display

## Description
My take on a simple user display application with seperate REST api server.

This project was build and tested on:

npm v8.11.0

Node v16.16.0

### Set-up
1. In your terminal, clone the repo with:
  ```
  git clone https://github.com/MortenEmde/user-display.git
  ```
2. Enter the repo:
  ```
  cd user-display
  ```
3. This application makes use of concurrently for easy start of client + server.  
To install dependencies and start up the application + server, in the terminal type:
  ```
  npm run start
  ```
4. After a few seconds the terminal will display:
  ```js
  [1] Compiled successfully!
  [1] 
  [1] You can now view client in the browser.
  [1] 
  [1]   Local:            http://localhost:3000/
  [1]   On Your Network:  http://192.168.178.30:3000/
  ```

Alternatively, you can follow the steps in the README.md of the client and server seperatelty.

__Note:__ You will need to run the _server_ to see and interact with data in the _client_
