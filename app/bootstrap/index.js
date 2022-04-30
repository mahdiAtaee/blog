const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');
const sqlSessionStore = require('./sessionHandler/mysql')(session);

module.exports = app => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: false
    }));
    app.engine('handlebars', hbs.engine());
    app.set('view engine', 'handlebars');
    app.set('views', path.join(__dirname, '../views'));
    app.use('/static', express.static(path.join(__dirname, '../../public')));
    app.use(cookieParser('keyboard cat'));
    app.use(session({
        store: sqlSessionStore,
        key: 'blog',
        resave: true,
        saveUninitialized: true,
        cookie: {
            maxAge: 60000000
        },
        unset: 'destroy'
    }));
    app.use(flash());
}