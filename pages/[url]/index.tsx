import Urls_model from '../../models/urls';

export default async function getServerSideProps(context:any){
  const { query } =  context;

  let url_code = query.url;  //get code from the browser url
  let urlResponse = await Urls_model.findOne({ shortUrl: url_code }); //request the code and get the url
  console.log(urlResponse,"here is the response........")
  if (query.url==urlResponse.shortUrl)
        return {
          redirect: {
            destination: urlResponse.url,
          },
        };
        else if (!urlResponse)
        return {
          redirect: {
            destination: "/test",
          },
        };
      } 
    

 
