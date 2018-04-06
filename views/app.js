const Web3 = require('web3');
const web3 = new Web3('http://localhost:8545')


const express = require('express');
const app = express();
const path = require('path');

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

web3.eth.getAccounts().then(e => console.log(e));

/*
create the server

app.listen(3000, function() {

})
*/
