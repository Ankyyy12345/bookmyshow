import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbarr from "./components/header/Navbar.jsx";
import Dashboard from "./components/dashboard/Dashboard";
import Offfers from "./components/offers/Offfers";
import Theaters from "./components/theaters/Theaters";
import Partyregistration from "./components/partyregistration/Partyregistration";
import Addregistration from "./components/addregistration/Addregistration";
import Addtheater from "./components/addtheater/Addtheater";
import Addoffers from "./components/addoffers/Addoffers";
import Owner from "./components/owner/Owner";
import Addtheaterform from "./components/theaters/Addtheaterform";
import Updatetheaterform from "./components/theaters/Updatetheaterform";
import Login from "./components/login/Login";
import Registration from "./registration/Registration";
import User from "./components/User";
// import Sidebar from "./components/sidebar/Sidebar";
import Addowner from "./components/owner/Addowner";
import Updateowner from "./components/owner/Updateowner";

function App() {
  return (
    <>
      <Navbarr />
      <div style={{display:"flex"}}>
        <div>
        <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        </div>
        <div>
         
          {/* <Sidebar /> */}
          
        </div>
        <div>
          <Routes>
            {/* <Route path="/dashboard" element ={<Dashboard/>} /> */}
            {/* <Route path="/login" element={<Login />} /> */}
          
            <Route path="/registration" element={<Registration/>} />
            <Route path="/updatetheaterform" element={<Updatetheaterform />} />
            <Route path="/addtheaterform" element={<Addtheaterform />} />         
            <Route path="/partyregistration" element={<Partyregistration />} />
            <Route path="/theaters" element={<Theaters />} />
            <Route path="/offers" element={<Offfers />} />
            <Route path="/addregistration" element={<Addregistration />} />
            <Route path="/addtheater" element={<Addtheater />} />
            <Route path="/addoffers" element={<Addoffers />} />
            <Route path="/owner" element={<Owner />} />
            <Route path="/addowner" element={<Addowner />} />
            <Route path="/updateowner" element={<Updateowner />} />

            <Route path="/user" element={<User />} >
            <Route path="dashboard" element={<Dashboard  />} />
              </Route>

          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
