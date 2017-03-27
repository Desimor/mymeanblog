var express = require('express');
var router = express.Router();
var Post = require('../models/post.model');

router.post('/signup', function(req, res){
    var user = new User(req.body);
    user.save(function(err){
        if(err){
            res.status(500).json({
                msg: err
            });
        } else {
            res.status(201).json({
                msg: 'You successfully signed up'
            });
        }
    });
});
router.post('/login', function(req, res){
    res.status(200).json({
        msg: 'Logging in'
    });
});
router.get('/posts', function(req, res){
    Post.find({}, function(err, posts){
        if(err){
            res.status(500).json({
                msg: err
            });
        } else {
            res.status(200).json({
                posts: posts
            });
        }
    });
});
router.get('/posts/:id', function(req, res){
    Post.find({_id: req.params.id}, function(err, posts){
        if(err){
            res.status(500).json({
                msg: err
            });
        } else {
            res.status(200).json({
                msg: posts
            });
        }
    });
});
