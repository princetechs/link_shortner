import React, { useState, useRef } from 'react';
import { InputField, Button } from '@cred/neopop-web/lib/components';
import useInput from '../hooks/useinput';
import Layout from '../components/common/Layout';
import PricePlans from '../components/PricePlans';
import Banner from '../components/Banner';

export default function index() {
  const url = useInput("");

  const handleClick = (e: any) => {
    e.preventDefault()
    console.log(url.value);
  }

  return (
    <>
      <Banner />

      {/* <PricePlans /> */}
    </>
  );
};

index.Layout = Layout