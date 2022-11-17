

const member = require('../models/member');


import connectMongo from "../../utils/connectMongo"


// import Urls from "../models/urls"
export default async (req, res) => {

    const dbdata = await connectMongo();

    // const urllist = await Urls.find();

    let response = await member.create({
        name: "Sandip",
        phone: "1111111",
        status: "active"
    });


    console.log('ddddddddddddddddd', response)

    return res.status(200).json(
        {
            success: true,
            data: response
        }
    );
}


// const memberController = {


//     create: async (req, res) => {



//     }
// }