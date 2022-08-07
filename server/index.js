const app = require('express')();
var cors = require('cors')
const port = 8000;

app.use(cors())

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});

let users = [
  {
    id: '1',
    name: {
      first: 'Bob',
      last: 'Bobkins'
    },
    phone: '0031612345671',
    email: 'fakemail@fakeit.com',
  },
  {
    id: '2',
    name: {
      first: 'Jen',
      last: 'Jenkins'
    },
    phone: '0031623456710',
    email: 'mailfake@fakeit.com',
  },
  {
    id: '3',
    name: {
      first: 'Carl',
      last: 'Carlson'
    },
    phone: '0031634567012',
    email: 'fakepost@fakeit.com',
  },
  {
    id: '4',
    name: {
      first: 'Madonna',
      last: ''
    },
    phone: '0031645670123',
    email: 'madona@nolastname.com',
  },
];

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// HELPER FUNCTIONS
const nextId = (users) => {
  const highestId = users.reduce((acc, cur) => cur.id > acc ? cur.id : acc, 0);
  return Number.parseInt(highestId) + 1;
};

/* Finds user based on ID. */
const findUser = (userId) => {
  return users.find(user => user.id === userId);
};

/* Check if user format is correct before posting. */
const validateUser = (user) => {
  if (user.id === undefined 
    || user.name === undefined
    || user.name.first === undefined
    || user.phone === undefined
    || user.email === undefined) {
    return false;
  }
  return true;
};

/* Updates the submitted user */ 
const updateUsersArray = (userToUpdate, allUsers, updatedUserData) =>{
  const userToUpdateIndex = allUsers.indexOf(userToUpdate);
  return allUsers.splice(userToUpdateIndex, 1, updatedUserData);
};

/* Deletes the user data */
const deleteUser = (user) => {
  delete user.id;
  delete user.name;
  delete user.phone;
  delete user.email;
};

// ENDPOINTS
/* GET all users */
app.get('/api/users', async (_req, res) => {
  res
    .send(users);
});

/* GET a single user based on ID */
app.get('/api/users/:id', async (req, res) => {
  const userToDisplay = findUser(req.params.id);
  if (userToDisplay !== undefined) {
    res
      .send(userToDisplay);
  } else {
    res
      .status(404)
      .send('user not found');
  }
});

/* POST a new user assuming format in request body is:
  {
    "id": "",
    "name": {
      "first": "Firstname",
      "last": "Lastname"
    },
    "phone": "1234567890",
    "email": "email@mail.com"
  }
*/
app.post('/api/users', async (req, res) => {
  const nextuser = req.body;
  nextuser.id = nextId(users).toString();
  if (validateUser(nextuser)) {
    users = users.concat(nextuser);
    res
      .status(201)
      .send(users);
  } else {
    res
      .status(400)
      .send('Bad request. Please include "name {"first"}" "phone" and "email" in object');
  }
});

/* PUT updated data on a user assuming format in request body is:
  {
    "id": "1",
    "name": {
      "first": "Bobby",
      "last": "Bobkins"
    },
    "phone": "0031612345671",
    "email": "fakemail@fakeit.com"
  }
*/
app.put('/api/users/:id', async (req, res) => {
  const userToUpdate = findUser(req.params.id);
  const updatedUserData = req.body;
  if (userToUpdate !== undefined) {
    if (validateUser(updatedUserData)) {
      updateUsersArray(userToUpdate, users, updatedUserData);
      res
        .sendStatus(204);
    } else {
      res
        .status(400)
        .send('Bad request. Please include "name {"first"}" "phone" and "email" in object');
    }
  } else {
    res
      .status(404)
      .send('user not found');
  }
});

/* DELETE a user */
app.delete('/api/users/:id', async (req, res) => {
  const userToDeleteId = req.params.id;
  const userToDelete = findUser(userToDeleteId);
  if (userToDelete !== undefined) {
    deleteUser(userToDelete);
    res
      .sendStatus(204);
  } else {
    res
      .status(404)
      .send('user not found');
  }
});
 
module.exports.app = app;
