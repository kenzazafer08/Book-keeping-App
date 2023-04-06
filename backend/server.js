const express = require('express');
const usersRoute = require('./routes/userRoute');
const error = require('./middlewares/errorMiddlewareHandler');
const app = express();
const async_handler = require('express-async-handler');

//connect db
require('./config/dbconnect')();

app.use(express.json());
//Routes
//Users Routes
app.use('/api/users/',usersRoute);

//Error Middleware
app.use(error.errorMiddlewareHandler)

//server
const PORT = process.env.PORT || 5000

app.listen(PORT,() => {
   console.log(`server is up and runing ${PORT}`)
})