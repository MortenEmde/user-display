# React SPA for user-display

This folder contains a Single Page Application build using the React framework.

I have build this application with limited use of 3rd party dependencies in mind.

All dependencies used are related to one of the following features:
* Core React functionalities
* TypeScript typing
* Testing
* Linting

I additionally added react-router-dom for dynamic routing.

## Functionality

The application consists of 2 pages, _Home_ and _Edit_.

_Home_ displays a table of user data fetched from the server (server is found next to this client in the [main repository folder](../README.md))

_Edit_ is accessed by clicking on user data in _Home_-table.   
The page displays an edit-form with the current details of the selected user already prefilled.  
All fields are mandatory to submit except for _Last Name_ in case your user is Madonna, Cher or Elvis.

## How to use

First, install dependencies through:
```
npm install
```
Run dev server:
```
npm start
```
From there you should see:
```js
Compiled successfully!

You can now view client in the browser.

  Local:            http://localhost:3000/
  On Your Network:  http://192.168.178.30:3000
```