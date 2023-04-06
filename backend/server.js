const express = require('express');
const User = require('./Models/User');
const app = express();

//connect db
require('./config/dbconnect')();

app.use(express.json());
//Routes
//Users Routes
app.post('/api/users/register' , async (req,res) => {
    try {
        const {name,email,password} = req.body;
        const user = await User.create({name,email,password});
        console.log(user);
    } catch (error) {
        console.log(error)
    }
});

app.post('/api/users/login' , (req,res) => {
    res.send('Login Route');
});

app.put('/api/users/update' , (req,res) => {
    res.send('Update Route');
});

app.delete('/api/users/:id' , (req,res) => {
    res.send('Delete Route');
});

//Fetch Users
app.get('/api/users/' , (req,res) => {
    res.send('Fetch users');
})

//server
const PORT = process.env.PORT || 5000

app.listen(PORT,() => {
   console.log(`server is up and runing ${PORT}`)
})