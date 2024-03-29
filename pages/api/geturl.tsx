import connectMongo from "../../utils/connectMongo";
import Urls_model from "../../models/urls";
var randomstring = require("randomstring");

const generateUniqueLink = async (shortUrlLink: any) => {
  let urlResponse;

  do {
    urlResponse = await Urls_model.findOne({ shortUrlLink });
    if (urlResponse) {
      shortUrlLink = randomstring.generate(7);
    }
  } while (urlResponse);

  return shortUrlLink;
};


function isValidURL(string: any) {
  var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
  return (res !== null)
};

export default async (req: any, res: any) => {
  //check for method
  //   let data = [];

  if (req.method != "POST") {
    return res.status(400).json({
      success: false,
      error: "Invalid Request",
      data: [],
    });
  }

  //checking in for url in body
  let url = req.body.url ? req.body.url : "";
  if (!url) {
    return res.status(400).json({
      success: false,
      error: "URL Not found in body",
      data: [],
    });
  }

  //check for valid url
  if (!isValidURL(url)) {
    return res.status(400).json({
      success: true,
      error: "Please Provide A Valid URL",
      data: [],
    });
  }

  //connect to database
  connectMongo();

  //checking for url exist or not in db
  let urlResponse = await Urls_model.findOne({ url: url });

  if (!urlResponse) {
    //create a new entry
    let shortUrlLink = await generateUniqueLink(randomstring.generate(7));
    console.log("--------------", shortUrlLink);

    urlResponse = await Urls_model.create({
      url: url,
      shortUrl: shortUrlLink,
    });
  }
  //if exist then send as response

  return res.status(200).json({
    success: true,
    data: urlResponse,
  });
};