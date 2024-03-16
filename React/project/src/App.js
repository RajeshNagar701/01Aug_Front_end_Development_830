import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "./website/pages/Home";
import Shop from "./website/pages/Shop";
import Contact from "./website/pages/Contact";
import Why from "./website/pages/Why";
import Testimonial from "./website/pages/Testimonial";
import PNF from "./website/pages/PNF";
import Admin_login from "./admin/pages/Admin_login";
import Dashboard from "./admin/pages/Dashboard";
import Manage_categories from "./admin/pages/Manage_categories";
import Add_categories from "./admin/pages/Add_categories";

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


          {
          //admin  
          }
          <Route path="/admin-login" element={<><Admin_login/></>}></Route>
          <Route path="/dashboard" element={<><Dashboard/></>}></Route>
          <Route path="/manage_categories" element={<><Manage_categories/></>}></Route>
          <Route path="/add_categories" element={<><Add_categories/></>}></Route>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
