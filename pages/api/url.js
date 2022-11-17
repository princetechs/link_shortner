import connectMongo  from "../../utils/connectMongo"
// import Urls from "../models/urls"
export default async (req, res) => {
   const dbdata= await connectMongo();
   sas
    // const urllist = await Urls.find();
console.log(dbdata);
    res.status(200).json({ name: "Sada" });
};