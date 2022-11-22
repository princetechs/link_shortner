import connectMongo from "../../utils/connectMongo";
import Urls_model from "../../models/urls";

export default async (req: any, res: any) => {
  if (req.method != "POST") {
    return res.status(400).json({
      success: false,
      error: "Invalid Request",
      data: [],
    });
  }

  //checking in for url in body
  let shortUrlLink = req.body.shortUrlLink ? req.body.shortUrlLink : "";
  if (!shortUrlLink) {
    return res.status(400).json({
      success: false,
      error: "shortUrlLink Not found in body",
      data: [],
    });
  }

  //connect to database
  connectMongo();

  //checking for url exist or not in db
  let urlResponse = await Urls_model.findOne({ shortUrl: shortUrlLink });

  //If link not found
  if (!urlResponse) {
    return res.status(400).json({
      success: false,
      error: "Invalid link",
      data: [],
    });
  }

  //if exist then send as response
  return res.status(200).json({
    success: true,
    data: urlResponse,
  });
};
