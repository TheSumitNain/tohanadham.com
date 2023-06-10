import React from "react";
import Header from "./components/Header";
import Reply from "./components/Reply";
import Main from "./components/Main";
import Rules from "./components/Rules";
import Events from "./components/Events";
import {Routes, Route} from "react-router-dom";
import "./css/App.css";

import ScrollToTop from "react-scroll-to-top";
import Contact from "./components/Contact";
import Aarti from "./components/Aarti";

import Chalisa from "./components/Aarti/Chalisa";
import HanumanAarti from "./components/Aarti/HanumanAarti";
import RamAarti from "./components/Aarti/RamAarti";
import RamStuti from "./components/Aarti/RamStuti";

const App = () => {

  return (
    <>
      <marquee class="text-danger-emphasis " width="100%" behavior="scroll" style={{letterSpacing:"1px"}}>
        जय श्री राम &nbsp; जय श्री राम &nbsp;जय श्री राम &nbsp;जय श्री राम &nbsp;जय श्री राम &nbsp;जय श्री राम &nbsp;जय श्री राम
        &nbsp;जय श्री राम &nbsp;जय श्री राम &nbsp;जय श्री राम &nbsp;जय श्री राम &nbsp;जय श्री राम &nbsp;जय श्री राम &nbsp;जय श्री राम
        &nbsp;जय श्री राम &nbsp;जय श्री राम &nbsp;जय श्री राम &nbsp;जय श्री राम &nbsp;
        जय श्री राम &nbsp; जय श्री राम &nbsp;जय श्री राम &nbsp;जय श्री राम &nbsp;जय श्री राम &nbsp;जय श्री राम &nbsp;जय श्री राम
        &nbsp;जय श्री राम &nbsp;जय श्री राम &nbsp;जय श्री राम &nbsp;जय श्री राम &nbsp;जय श्री राम &nbsp;जय श्री राम &nbsp;जय श्री राम
        &nbsp;जय श्री राम &nbsp;जय श्री राम &nbsp;जय श्री राम &nbsp;जय श्री राम &nbsp;
        जय श्री राम &nbsp; जय श्री राम &nbsp;जय श्री राम &nbsp;जय श्री राम &nbsp;जय श्री राम &nbsp;जय श्री राम &nbsp;जय श्री राम
        &nbsp;जय श्री राम &nbsp;जय श्री राम &nbsp;जय श्री राम &nbsp;जय श्री राम &nbsp;जय श्री राम &nbsp;जय श्री राम &nbsp;जय श्री राम
        &nbsp;जय श्री राम &nbsp;जय श्री राम &nbsp;जय श्री राम &nbsp;जय श्री राम &nbsp;
        जय श्री राम &nbsp; जय श्री राम &nbsp;जय श्री राम &nbsp;जय श्री राम &nbsp;जय श्री राम &nbsp;जय श्री राम &nbsp;जय श्री राम
        &nbsp;जय श्री राम &nbsp;जय श्री राम &nbsp;जय श्री राम &nbsp;जय श्री राम &nbsp;जय श्री राम &nbsp;जय श्री राम &nbsp;जय श्री राम
        &nbsp;जय श्री राम &nbsp;जय श्री राम &nbsp;जय श्री राम &nbsp;जय श्री राम &nbsp;
        जय श्री राम &nbsp; जय श्री राम &nbsp;जय श्री राम &nbsp;जय श्री राम &nbsp;जय श्री राम &nbsp;जय श्री राम &nbsp;जय श्री राम
        &nbsp;जय श्री राम &nbsp;जय श्री राम &nbsp;जय श्री राम &nbsp;जय श्री राम &nbsp;जय श्री राम &nbsp;जय श्री राम &nbsp;जय श्री राम
        &nbsp;जय श्री राम &nbsp;जय श्री राम &nbsp;जय श्री राम &nbsp;जय श्री राम &nbsp;
        जय श्री राम &nbsp; जय श्री राम &nbsp;जय श्री राम &nbsp;जय श्री राम &nbsp;जय श्री राम &nbsp;जय श्री राम &nbsp;जय श्री राम
        &nbsp;जय श्री राम &nbsp;जय श्री राम &nbsp;जय श्री राम &nbsp;जय श्री राम &nbsp;जय श्री राम &nbsp;जय श्री राम &nbsp;जय श्री राम
        &nbsp;जय श्री राम &nbsp;जय श्री राम &nbsp;जय श्री राम &nbsp;जय श्री राम &nbsp;
      </marquee>
      <Header />
     
      <Routes>
         <Route path="/" element={<Main/>} exact />
         <Route path="/rules" element={<Rules/>} exact />
         <Route path="/aarti" element={<Aarti/>} exact />
         <Route path="/aarti/chalisa" element={<Chalisa/>} exact />
         <Route path="/aarti/hanumanaarti" element={<HanumanAarti/>} exact />
         <Route path="/aarti/ramaarti" element={<RamAarti/>} exact />
         <Route path="/aarti/ramstuti" element={<RamStuti/>} exact />
         <Route path="/events" element={<Events/>} exact />
         <Route path="/reply" element={<Reply/>} exact />
      </Routes>
     
    <ScrollToTop
        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", 
        borderRadius: "50%" }}
        smooth
        color="teal"
        top="500"
      />

      <div className="icon-bar">
        <a href="https://www.facebook.com/tohanadham/" style={{background: "#3b5999"}}>
          <i class="fab fa-square-facebook"> </i> click here to visit
        </a>
        <a href="https://www.instagram.com/tohana_dham/?igshid=YmMyMTA2M2Y%3D" style={{background: "#e4405f"}}>
          <i class="fab fa-instagram"> </i> click here to visit
        </a>
        <a href="https://api.whatsapp.com/send?phone=9304900007" style={{background: "#25D366"}}>
          <i class="fab fa-whatsapp"> </i> click here to visit
        </a>
        <a href="https://www.youtube.com/@TohanaDham" style={{background: "#cd201f"}}>
          <i class="fab fa-youtube-square"> </i> click here to visit
        </a>
      </div>
      <Contact />
    </>
  );
};

export default App;
