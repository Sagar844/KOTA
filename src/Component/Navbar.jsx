import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <div className=" mx-5 my-10">
        <img
          className="fixed top-0 "
          src="https://cdn.discordapp.com/attachments/1001168177952211054/1076486503594729513/image.png"
          alt=""
        />
      </div>
      <div className="flex justify-end">
        <Link className="text-black font-bold" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
};
