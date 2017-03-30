//This is the configuration of the passport node module.
const passport = require('passport'); //This is the module not the file.
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user.model');

passport.use(new LocalStrategy(), function howWeAuth(username, password, done) {})