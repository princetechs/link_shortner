import Urls_model from '../../models/urls';
import Head from "next/head";

export default function LinkPage(){


  return(
    <>
    <Head>
    <meta property="og:title" content="link_shortner"/>
    <meta property="og:site_name" content="site_name link_shortner" />
    <meta property="og:description" content="descr iptionlink_shortner" />
    <meta property="og:image" content="link_shortner" />
  </Head>
    </>
 ) };
  


export  async function getServerSideProps(context:any){
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
    

 
