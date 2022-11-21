import React, { useState,useRef } from 'react';
import { InputField,Button } from '@cred/neopop-web/lib/components';
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
        <InputField
          // ref={inputRef}
          // onChange={handleInput}
          {...url}
          autoFocus
          colorConfig={{
            labelColor: "#0d0d0d",
            textColor: "#000000",
            
          }}
          colorMode="light"
          id="text_field"
          inputMode="text"
          label="Past Url Here"
          maxLength={30}
          onBlur={function noRefCheck() { }}
          // onChange={function noRefCheck() { }}
          onFocus={function noRefCheck() { }}
          placeholder="Enter Url Here"
          type="text"
        />

        <Button kind="elevated" onClick={()=>handleClick} showArrow size='small' >Generate</Button>



    </div>
  </div>
  
);
};



