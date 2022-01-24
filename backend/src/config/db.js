/*const mongoose = require('mongoose');
mongoose.Promise = global.Promise;*/

/* local connexion
module.exports = mongoose.connect('mongodb://localhost/mymoney', { useNewUrlParser: true });*/
/*
module.exports = mongoose.connect('mongodb+srv://IsaacCaldas:Abc&$e#ghu@mymoneybackend.asgpn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})*/

const url = process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb//localhost/mymoney'
module.exports = mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})