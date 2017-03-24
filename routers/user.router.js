var express = require('express');
var router = express.Router();
var Post = require('../models/post.model');

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
