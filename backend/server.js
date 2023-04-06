const express = require('express');
const usersRoute = require('./routes/userRoute');
const app = express();

//connect db
require('./config/dbconnect')();

app.use(express.json());
//Routes
//Users Routes
app.use('/api/users/',usersRoute);

//server
const PORT = process.env.PORT || 5000

app.listen(PORT,() => {
   console.log(`server is up and runing ${PORT}`)
})