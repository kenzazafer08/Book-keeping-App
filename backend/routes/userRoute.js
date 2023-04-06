const express = require('express');
const User = require('../Models/User');

const usersRoute = express.Router();

usersRoute.post('/register' , async (req,res) => {
    try {
        const {name,email,password} = req.body;
        const user = await User.create({name,email,password});
        if (user) {
            res.status(200);
            res.json({
              _id: user._id,
              name: user.name,
              email: user.email,
              password: user.password,
            });
          }
    } catch (error) {
        console.log(error)
    }
});

usersRoute.post('/login' , (req,res) => {
    res.send('Login Route');
});

usersRoute.put('/update' , (req,res) => {
    res.send('Update Route');
});

usersRoute.delete('/:id' , (req,res) => {
    res.send('Delete Route');
});

//Fetch Users
usersRoute.get('/' , (req,res) => {
    res.send('Fetch users');
})


module.exports = usersRoute