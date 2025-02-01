

const mongoose= require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-1');



const db = mongoose.connection;

db.once('open',(err)=>{

    if(err){
        console.log('MongoDB connection error:',err);
        return false;
    }

    
    console.log("mongodb connection is ready");
})