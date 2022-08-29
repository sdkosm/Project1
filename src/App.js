import React from "react";
import './App.css';
import Navbar from "./components/inc/Navbar";
import About from "./components/pages/About";
import Contactus from "./components/pages/Contact";
import Home from "./components/pages/Home";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Footer from './components/inc/Footer';
import USignUp from "./components/pages/USignup";
import Login from "./components/pages/Login";
import Doctor from "./components/Doctorlist/Doctor";
import Hospital from "./components/Hospitallist/Hospital";
import DSignUp from "./components/pages/DSignup";
import Userdetails from "./components/pages/Userdetails";
import Doctorinfo from "./components/Doctorlist/Doctorinfo";
import Hospitalinfo from "./components/Hospitallist/Hospitalinfo";
import Bookingsummary from "./components/pages/Bookingsummary";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route  path="/" element={<Home/>}/>
          <Route  path="/about" element={<About/>}/>
          <Route  path="/contact" element={<Contactus/>}/>
          <Route  path="/Signup" element={<USignUp/>}/>
          <Route  path="/login" element={<Login/>}/>
          <Route  path="/doctor" element={<Doctor/>}/>
          <Route  path="/hospital" element={<Hospital/>}/>
          <Route  path="/register" element={<DSignUp/>}/>
          <Route  path="/userdetails" element={<Userdetails/>}/>
          <Route  path="/doctorinfo" element={<Doctorinfo/>}/>
          <Route  path="/hospitalinfo" element={<Hospitalinfo/>}/>
          <Route path="bookingsummary" element={<Bookingsummary/>}/>
           <Route path="/users">
            {/* <Route index element={<Adminlist/>}/> */}
            {/* <Route path=":userId" element={<Adminsingle/>}/> */}
            {/* <Route path="new" element={<Adminnew/>}/>   */}
           </Route>
           <Route path="/doctors">
            {/* <Route index element={<Adminlist/>}/> */}
            {/* <Route path=":doctorId" element={<Adminsingle/>}/> */}
            {/* <Route path="new" element={<Adminnew/>}/>   */}
            </Route>

        </Routes>
        <Footer/>
    
         
      </div>
    </Router>
  );
}

export default App;
