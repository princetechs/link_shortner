
import connectMongo from '../../utils/connectMongo'
import Urls_model from '../../models/Urls';


export default async (req, res) => {

  connectMongo();

  //For create
  let response = await Urls_model.create({
      url: "sadad@sad",
      gen_url: "sasa",
      status: "active"
  });
  console.log('created', response)


  //To fetch
  let allData = await Urls_model.find({});

  return res.status(200).json(
      {
          success: true,
          new: response,
          allData: allData
      }
  );
}