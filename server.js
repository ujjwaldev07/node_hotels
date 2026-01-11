const express = require('express')
const app = express();
const db = require('./db');
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

const personRoutes = require('./routers/personRoutes');
const menuRoutes = require('./routers/menuRouters');

app.use('/person', personRoutes);
app.use('/menu', menuRoutes);

app.listen(PORT, ()=>{
     console.log('server is running on port 3000');
})