const mongoose = require('mongoose');
const dbconnect = () => {
    mongoose.connect('mongodb+srv://kanzazafer:kenzazafer08@book-app.iigock6.mongodb.net/book-keeping-app',{
    useUnifiedTopology : true,
    useNewUrlParser : true
    }).then(() => console.log('DB connected')).catch(err => console.log(err));
}

module.exports = dbconnect;