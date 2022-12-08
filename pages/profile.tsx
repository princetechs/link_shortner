import React, { useState, useRef } from "react";
import axios from "axios";
import Layout from "../components/common/Layout";
export default function profile() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="w-120 h-50 flex">Profile Data</div>
      </div>
    </>
  );
}

profile.Layout = Layout;
