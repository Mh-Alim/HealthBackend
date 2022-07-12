const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path:"../config/config.env"})

//Set up default mongoose connection
const connectDataBase= ()=>{
        mongoose.connect(process.env.DB_URL, {useNewUrlParser: true}).then((data)=>{
            console.log(`mongodb connected with server: ${data.connection.host} }`)
        });
 
}

module.exports = connectDataBase;