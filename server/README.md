# REST api for user-display

This folder contains a REST api build using the Express framework.

I have added a resource of users that are located in a local array called "users".

Here is one user represented as JSON:

```js
  {
    id: '1',
    name: {
      first: 'Bob',
      last: 'Bobkins'
    },
    phone: '0031612345671',
    email: 'fakemail@fakeit.com',
  },
```

For the data of each user the following rules apply:
* `id` will be automatically calculated for new users but is required when updating or deleteing a user.
* `name.first` is required
* `name.last` is not required
* `phone` is required
* `email` is requred

# How to use

First, install dependencies through:
```
npm install
```
Run server with:
```
npm start
```
From there you should see:
```js
App listening on port 8000!
```
You can then hit the api on http://localhost:8000/api/users