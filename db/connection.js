const mongoose = require('mongoose')
const connectionString = process.env.DB_CONNECTION_STRING
mongoose.connect(connectionString).then((res)=>{
    console.log("Style Guru server successfully connected with MongoDB Atlas");
}).catch((reason)=>{
    console.log("MongoDB connection failed!!!");
    console.log(reason);
})