import React from "react";
import { KotaHome } from "./KotaHome";
import { Navbar } from "./Navbar";
import { MakingBrands } from "./MakingBrands";
import { DigitalAgency } from "./DigitalAgency";
import { Beauty } from "./Beauty";
import { Thought } from "./Thought";
import { Impact } from "./Impact";
import { WebsiteDesign } from "./WebsiteDesign";
import { Workwegon } from "./Workwegon";
import { OurClients } from "./OurClients";
import { Footer } from "./Footer";

export const Router = () => {
  return (
    <div>
      <Navbar />
      <KotaHome />
      <MakingBrands />
      <DigitalAgency />
      <Beauty />
      <Thought />
      <Impact />
      <WebsiteDesign />
      <Workwegon />
      <OurClients />
      <Footer />
    </div>
  );
};
