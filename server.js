const app = require('./app');
const dotenv = require('dotenv');
const connectDataBase = require('./config/database')

// handling uncaught exception

process.on("uncaughtException",(err)=>{
    console.log(`Error : ${err.message}`);
    console.log(`shutting down the server due to uncaughtexception`);
    server.close(()=>{
        process.exit(1);
    })
})



// config
dotenv.config({path:"./config/config.env"});

// mongodb connection 
connectDataBase();





const port = process.env.PORT;
const server = app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})


// unhandeled promise rejection 
// if aisa error aaye to hum jaldi se jaldi server cresh krayenge 

process.on("unhandledRejection",err=>{
    console.log(`Error : ${err.message}`);
    console.log(`shutting down the server due to unhandeled promise rejection`);
    server.close(()=>{
        process.exit(1);
    })
})

