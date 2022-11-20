

// const Member = require('../models/member');
import Member from "../../models/member";

import connectMongo from "../../utils/connectMongo"


export default async (req :any, res :any) => {

    connectMongo();

    //For create
    let response = await Member.create({
        email: "dsdmkafkadfnda@sad",
        password: "1111111",
        status: "active"
    });
    console.log('created', response)


    //To fetch
    let allData = await Member.find({});

    return res.status(200).json(
        {
            success: true,
            new: response,
            allData: allData
        }
    );
}
