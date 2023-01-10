import connectMongo from "../../utils/connectMongo";
import Urls_model from "../../models/urls";
connectMongo();
export default async (req: any, res: any) => {

  let url = JSON.parse(req.body).url ? JSON.parse(req.body).url : "";
  console.log("test:-",JSON.parse(req.body).url);

  let urlResponse = await Urls_model.findOne({ shortUrl: url });

return res.status(200).json({
    success: true,
    data: urlResponse,
  });
}