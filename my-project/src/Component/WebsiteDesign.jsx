import React, { useState } from "react";

export const WebsiteDesign = () => {
  const [brand, setbrand] = useState(true);
  const [brand2, setbrand2] = useState(false);
  const [brand3, setbrand3] = useState(false);

  return (
    <div className="relative">
      <div className="absolute top-0 left-0  mx-5 text-4xl font-bold my-40 space-y-4  ">
        <h1 onClick={() => setbrand(!brand)}>Website Design & Development</h1>

        <h1 onClick={() => setbrand2(!brand2)}>Branding</h1>

        <h1 onClick={() => setbrand3(!brand3)}>Digital Marketing</h1>
      </div>

      <button className="hover:bg-white  text-white px-10 border-2 border-sky-500 rounded-full absolute py-5 my-96 mx-6 hover:text-black ">
        VIEW ALL SERVICES
      </button>
      <img
        className="w-full "
        src="https://cdn.discordapp.com/attachments/1001168177952211054/1076370803504971786/gradient-bg-services.webp"
        alt=""
      />
      {brand && (
        <img
          className="absolute top-0 right-0 my-40 mx-6 w-1/2 "
          src="https://cdn.discordapp.com/attachments/1001168177952211054/1076370803056197652/websites_1.webp"
          alt=""
        />
      )}
      {brand2 && (
        <img
          className="absolute top-0 right-0 h-screen mx-10 rounded-md     mt-5 object-none "
          src="https://cdn.discordapp.com/attachments/1001168177952211054/1076370802477371422/Image-wogan-43.webp"
          alt=""
        />
      )}

      {brand3 && (
        <img
          className="absolute top-0 right-0 my-80 mx-6 w-1/2 "
          src="https://cdn.discordapp.com/attachments/1001168177952211054/1076370803056197652/websites_1.webp"
          alt=""
        />
      )}
    </div>
  );
};
