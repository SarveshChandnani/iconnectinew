import React from "react";

import "./home.css"


import Login from "../login/login";
import TextSlider from "../../Components/TextSlider/TextSlider";
import Topbar from "../../Components/Topbar";
const Home = () => {
  return (
    <>
   <Topbar/>
      <div className="homeContainer">
      
      <TextSlider />
      <Login />
      
        
       {/* <MainScreen /> */}
        
      </div>
    </>
  );
};

export default Home;
