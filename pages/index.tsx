import React, { useState,useRef } from 'react';
// import { InputField,Button } from '@cred/neopop-web/lib/components';
import useInput from '../hooks/useinput';
// import Urls_model from '../models/Urls';
// import Member from '../models/member';


export default function index() {
const url = useInput("");

const handleClick=(e:any)=>
{
  e.preventDefault()
  console.log(url.value);
}


return (
  <div className='flex justify-center items-center h-screen'>

  <div className='w-120 h-50 flex'>
        
sandip

    </div>
  </div>
  
);
};



