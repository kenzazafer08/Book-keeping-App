const express = require('express');
const User = require('../Models/User');
const asynchHandler = require('express-async-handler');


const usersRoute = express.Router();
usersRoute.post('/register', asynchHandler(async (req, res) => {
    const { name, email, password } = req.body;
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      throw new Error('User Exist');
    }
    const userCreated = await User.create({ name, email, password });
    res.send(userCreated);
  }));

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