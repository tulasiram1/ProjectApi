const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const controller = require('./controller/controller');
const morgan = require('morgan');
const compression = require('compression')

dotenv.config({ path: './config.env' });
app.use(morgan('dev'))
app.use(compression);
app.listen(process.env.PORT, () => { console.log(`listening to port number ${process.env.PORT}`); });
const URL = process.env.DATABASE_URL.replace('<password>', process.env.DATABASE);
mongoose.connect(URL).then(() => { console.log('connection success'); }).catch((err) => { console.log(err); });
app.get('/', (req, res) => { console.log("Hello"); })
app.use('/api', controller);
