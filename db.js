require('dotenv').config();
const mongoose = require('mongoose');

//const mongoUrl = 'mongodb://localhost:27017/dhaaba';
//const mongoUrl = 'mongodb+srv://sweetsoul:<db_password>@cluster0.fz3x2ee.mongodb.net/';
//const mongoUrl = process.env.MONGODB_URL_LOCAL;
const mongoURL = process.env.MONGODB_URL;

mongoose.connect(mongoURL);

const db = mongoose.connection;

db.on('connected', ()=>{
     console.log('connected to mongodb server');
});

db.on('error', (err)=>{
     console.log('mongodb connection error: ', err);
});

db.on('disconnected', ()=>{
     console.log('mongodb disconnected');
});

module.exports = db;