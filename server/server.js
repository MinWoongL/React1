const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const sequelize = require('./models').sequelize;
sequelize.sync();

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const PORT = process.env.PORT || 4000;

/*const {
    Test1,
    Sequelize: { Op }
  } = require('./models');
sequelize.query('SET NAMES utf8;');*/



app.post('/add/data', (req, res) => {
    console.log(req.body)

    Test1.create({
        name : req.body.name,
        address : req.body.address,
        phone : req.body.phone
    })
    .then( result => {
        res.send(result)
    })
    .catch( err => {
        console.log(err)
        throw err;
    })

})


app.get('/get/data', (req, res) => {
    Test1.findAll()
    .then( result => { res.send(result) })
    .catch( err => { throw err })
}) 


app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
  })
