const Web3 = require('web3');
const web3 = new Web3('http://localhost:8545')

const path = require('path');

const express = require('express');
const app = express();

/*
this assigns the router module
which may or may not get used

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

*/


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// point to static files
app.use(express.static(path.join(__dirname, 'public')));

/*
print all the accounts running on testRPC

web3.eth.getAccounts().then(e => console.log(e));

*/

// direct requests to localhost:3000 to form
app.get('/', (req, res) => {
  res.sendFile('/home/delo/witcoin/public/html/index.html')
})

// create the server

app.listen(3000);
