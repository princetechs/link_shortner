import React, { useState, useRef } from "react";
// import { InputField, Button } from "@cred/neopop-web/lib/components";
// import useInput from "../hooks/useinput";
// import Urls_model from '../models/Urls';
// import Member from '../models/member';
import Layout from "../components/common/Layout";
import axios from "axios";

export default function test() {
  function CopyValue(element) {
    var copyText = document.getElementById(element);
    copyText.select();
    document.execCommand("copy");
  }

  const [url, setUrl] = useState();
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState();

  const [shortUrl, setShortUrl] = useState();

  const getShortUrl = async (e :any) => {
    e.preventDefault();

    const options = {
      url: "http://localhost:3000/api/geturl",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: {
        url: url,
      },
    };

    axios(options)
      .then((response) => {
        console.log("response", response.data.data );
        setError('');
        setShortUrl(response.data.data.shortUrl ?  `http://localhost:3000/s/${response.data.data.shortUrl}` : '' )
      })
      .catch((err) => {
        console.log("errrr", err.response.data);
        setError(
          err.response?.data?.error
            ? err.response?.data?.error
            : "Something went wrong"
        );
      });
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="max-w-3xl bg-gray-100 flex justify-center items-center">
          <div className="container mx-auto bg-indigo-500 rounded-lg p-14">
            <h1 className="text-center font-bold text-white text-4xl mb-6">
              Paste the URL to be shortened
            </h1>

            {error ? <div className="error text-center  text-white py-2">{error}</div> : ""}

            {shortUrl ? (
              <>
                <div className="flex flex-col sm:flex-row  items-center rounded-lg overflow-hidden justify-between gap-2 mt-4">
                  <input
                    id="hello"
                    className="text-base w-full sm:w-9/12 bg-white py-3 rounded-md text-gray-400 flex-grow outline-none px-2 "
                    type="text"
                    // placeholder="Paste your link here"
                    value={shortUrl}
                    readOnly
                  />
                  <div className=" flex items-center rounded-lg ">
                    <button
                      className="bg-white text-black text-base rounded-lg px-4 py-3"
                      onClick={() => CopyValue("hello")}
                    >
                      Copy URL
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex flex-col sm:flex-row  items-center rounded-lg overflow-hidden justify-between gap-2">
                <input
                  className="text-base w-full sm:w-9/12 bg-white py-3 rounded-md text-gray-400 flex-grow outline-none px-2 "
                  type="text"
                  placeholder="Paste your link here"
                  value={url ? url : ""}
                  onChange={(e) => setUrl(e.target.value)}
                />
                <div className=" flex items-center rounded-lg ">
                  <button
                    className="bg-white text-black text-base rounded-lg px-4 py-3"
                    onClick={getShortUrl}
                  >
                    Shorten URL
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
test.Layout = Layout;