import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "./website/pages/Home";
import Shop from "./website/pages/Shop";
import Contact from "./website/pages/Contact";
import Why from "./website/pages/Why";
import Testimonial from "./website/pages/Testimonial";
import PNF from "./website/pages/PNF";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<><Home/></>}></Route>
          <Route path="/shop" element={<><Shop/></>}></Route>
          <Route path="/contact" element={<><Contact/></>}></Route>
          <Route path="/why" element={<><Why/></>}></Route>
          <Route path="/testimonial" element={<><Testimonial/></>}></Route>
          <Route path="*" element={<><PNF/></>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
