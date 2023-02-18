import React from "react";
import { StartYourpProject } from "./StartYourpProject";

export const KotaHome = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 right-0 my-40 mx-20">
        <h6 className="text-6xl font-bold ">Rebel against <br /> boring</h6>
        <h1 className="text-xl mt-5 ">
          We’re a creative web design agency based <br /> in London that crafts
          beautiful and original websites 
          <br />
          for brands who refuse to blend in.
        </h1>

          </div>
        <img
          src="https://cdn.discordapp.com/attachments/1001168177952211054/1076350511315419206/download.png"
          alt=""
        />
    

      <div className="flex w-24 mx-10 space-x-10 object-fit opacity-1 absolute ">
        <img
          src="https://kota.co.uk/static/06bd0f13d6cca0d9ed576bd33c1cc699/f4be6/dan_grey%402x.webp"
          alt=""
        />

        <img
          src="https://kota.co.uk/static/e48ebdcc0707498a3b3b23b744365f3b/d4b21/Clutch_grey%402x.webp"
          alt=""
        />

        <img
          src="https://kota.co.uk/static/33f6a75eb3916baabc3e8fb5c4729fe6/1dd59/the-drum-logo.webp"
          alt=""
        />
        <img
          src="https://kota.co.uk/static/1970db9df55649146a13601771da8047/2c55e/awward_grey%402x.webp"
          alt=""
        />
        <img
          src="https://kota.co.uk/static/816573f6ad42e12720a2e55ca7ee3da5/23b76/css-design-awards.webp"
          alt=""
        />
      </div>
      <div>
        <StartYourpProject />

        
      </div>

    </div>
  );
};
