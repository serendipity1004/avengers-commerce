const express = require('express');
const mongoose = require('mongoose');
const expressSession = require('express-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const envResult = require('dotenv').config();
const {createLogger, format, transports} = require('winston');
const {combine, timestamp, label, prettyPrint} = format;
const {fillProducts} = require('./batch/preConfig');
const Product = require('./models/products');
const CONFIGS = process.env.ENV === 'prod' ?
    require('./configs/production') :
    process.env.ENV === 'dev' ?
        require('./configs/development') :
        require('./configs/default');

/**
 * Logger Setting
 * */
const logger = createLogger({
    format: combine(
        // label({label:'label test'}),
        timestamp(),
        prettyPrint()
    ),
    transports: [new transports.Console()]
});

const app = express();

Product.findOne({name: 'Big Titties'}).exec((err, result) => {
    if (!result) {
        fillProducts();
    }
});

/**
 * Mongo Setup
 * */
mongoose.Promise = global.Promise;
mongoose.connect(CONFIGS.MONGO_URI);

/**
 * Middlewares
 * */
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(expressSession({
    secret: CONFIGS.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: process.env.ENV === 'prod' ?
        {
            secure: true,
            maxAge: CONFIGS.SESSION_LIFE
        } :
        {
            maxAge: CONFIGS.SESSION_LIFE
        }
}));

/**
 * Routes
 * */
require('./routes/products')(app);
require('./routes/user')(app);

/**
 * Start
 * */
app.listen(CONFIGS.PORT, () => {
    logger.info(`Server Running at PORT : ${CONFIGS.PORT}`);
});