import "./App.css";
import { KotaHome } from "./Component/KotaHome";
import { Navbar } from "./Component/Navbar";
import { MakingBrands } from "./MakingBrands";
import { DigitalAgency } from "./Component/DigitalAgency";
import { Beauty } from "./Component/Beauty";
import { Thought } from "./Component/Thought";
import { Impact } from "./Component/Impact";
import { WebsiteDesign } from "./Component/WebsiteDesign";
import { Workwegon } from "./Component/Workwegon";

function App() {
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
      <Workwegon/>
    </div>
  );
}

export default App;
