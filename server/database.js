const mongoose = require('mongoose');
const MONGODB_URI = "mongodb+srv://admin:admin1234@cluster0.vgm2t.mongodb.net/hackupc2021?retryWrites=true&w=majority";

mongoose.connect(MONGODB_URI,{
    useUnifiedTopology: true,
    useNewUrlParser:true,
    useCreateIndex: true

})
    .then(db => console.log('Conectada a la DB'))
    .catch(err => console.log(err));

