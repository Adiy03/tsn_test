//EQUIPMENT
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv')

//DECLARE ROUTES
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const listProductRoute = require('./routes/listProduct');
const cardPageRoute = require("./routes/cardPage");

dotenv.config()

mongoose
    .connect(process.env.MONGO_URL)
    .then(()=>console.log('DB Connection Succesfull!'))
    .catch((err)=>{
        console.log(err);
});

//PASS JSON FILE
app.use(express.json());

//ROUTES
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/listProduct', listProductRoute);
app.use('/api/cardPage', cardPageRoute)




app.listen(process.env.PORT || 3001, () => {
    console.log('BE server running sucessfully!');
});