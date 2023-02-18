import React from "react";
import myvideo from "./video/video.mp4";

export const MakingBrands = () => {
  return (
    <div className="mt-20 flex z-5 py-3 ">
      <video loop muted autoPlay="autoplay" className="box-content rounded-md  h-screen">
        <source src={myvideo} />
      </video>

      <div className="flex mt-40 flex-col mx-20 space-y-10 ">
        <h1 className="text-5xl font-bold ">
          Making brands a damn site better
        </h1>
        <h1 className="text-xl">
          Let’s face it, first impressions matter. Your website’s an opportunity
          to wow your audience, so why waste it with bad design? Because brands
          win new fans when they’re brave enough to go beyond their creative
          comfort zone.
        </h1>
      </div>
    </div>
  );
};
