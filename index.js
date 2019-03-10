const express = require('express');
const sql = require('mysql');
const keys = require('./config/keys');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const Sequelize = require('sequelize');
const path = require('path');

const app = express();

//const sequelize = new Sequelize(keys.MYSQL_DATABASE, keys.MYSQL_USER, keys.MYSQL_PASSWORD,
//  {
//    port     : "3306",
//    host     : "localhost",
//    dialect  : "mysql"
//  }, 
//);

//sequelize.authenticate()
//  .then((err) => {
//    if (!!err) {
//      console.log('unable to connect: ' + err)
//    } else {
//      console.log('Connection success!')
//    }
//  });

app.use(bodyParser.json());

app.use(morgan('dev'));

if (process.env.NODE_ENV === 'production') {
  // Express will serve production assets - ie main.js / main.class
  app.use(express.static('client/build'));

  // Express will serve index.html if route isn't recognized
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

//app.get('/p/blog', (req, res) => {
//  const query = "SELECT * FROM blogEntries";
//  sequelize.query(query, { type: Sequelize.QueryTypes.SELECT }).then(result => {
//    console.log(JSON.stringify(result));
//    res.send(JSON.stringify(result));
//  })
//})

const PORT = process.env.PORT || 3005;
app.listen(PORT);