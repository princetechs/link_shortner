import mongoose from "mongoose";

const connect = () => {

    //check if it is already connected to database
    if(mongoose.connections[0].readyState){
        console.log('Connected to datbase');
        return;
    }

    mongoose.connect(process.env.KANHU_DB);

    mongoose.connection.on('connected', ()=>{
        console.log('connected successfully');
    })

    mongoose.connection.on('error', (err)=>{
        console.log('connection failed', err);
    })




}


export default connect;