import mongoose from "mongoose";


const db_url = `mongodb+srv://sandip282:pxExh1ymChe6OPKr@testmongo.baasqpu.mongodb.net/kahnu_test?retryWrites=true&w=majority`;

const connect = () => {

    //check if it is already connected to database
    if (mongoose.connections[0].readyState) {
        console.log('Connected to datbase');
        return;
    }

    mongoose.connect(process.env.DB_URL ? process.env.DB_URL : db_url);

    mongoose.connection.on('connected', () => {
        console.log('connected successfully');
    })

    mongoose.connection.on('error', (err) => {
        console.log('connection failed', err);
    })




}


export default connect;