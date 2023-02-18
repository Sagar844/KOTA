import "./App.css";
import { Router } from "./Component/Routers";
import { Route, Routes } from "react-router-dom";
import { Contact } from "./Component/Contact";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Router/>}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>

     
    </div>
  );
}

export default App;
