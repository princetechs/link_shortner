import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
import { NextRequest, NextResponse, userAgent } from 'next/server'
import Urls_model from '../../models/urls';

export default function index() {

 

}

index.getInitialProps = async (context : any) => {
  const { res,query,req } =  context;
  let url = query.url;

  let urlResponse = await Urls_model.findOne({ shortUrl: url });
  console.log(urlResponse,"sanq:",query);
  
  if (query.url==urlResponse.shortUrl)
        {res.writeHead(301, { location: urlResponse.url } );
        res.end();}
        else
        return {san:"sasa"}
      } 

  
 
