import { BrowserRouter,Routes,Route } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./feature/Pages/Home";
import Add_user from "./feature/Pages/Add_user";
import Edit_user from "./feature/Pages/Edit_user";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ToastContainer></ToastContainer>
        <Routes>
          <Route path="/" element={<><Home/></>}></Route>
          <Route path="/add_user" element={<><Add_user/></>}></Route>
          <Route path="/edit_user/:id" element={<><Edit_user/></>}></Route>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
