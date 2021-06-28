const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

const cors = require('cors');
const PORT = 5000;
const uri = `mongodb+srv://fawazsullia:kenkaneki13@cluster0.pvzfr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

//import routes
const submitJobRoute = require('./routes/submitJob.js')

//middlewares
app.use(cors())
app.use(express.json())

//route middlewares
app.use('/submit-job', submitJobRoute);



//connecting to database
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
console.log("The database is connected");

});

//listen on port 
app.listen(PORT, ()=> console.log("Server up and running"));