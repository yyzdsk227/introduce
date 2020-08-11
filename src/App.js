import React, { useContext, useState } from "react";

import Header from "./DomCompo/Header";
import "./App.scss";
import Visual from "./DomCompo/Visual";
import Profile from "./DomCompo/Profile";
import Learning from "./DomCompo/Learning";
import Mapgoo from "./DomCompo/Mapgoo";
import Footer from "./DomCompo/Footer";
import stateContext from "./Context/StateContext.js";
import learns from "./Const_etc/learns";
import PlayModal from "./Compo_etc/PlayModal";

const stateConn = {
  temperature: 0,
  icon: "",
  name: "",
  title: learns[0].title,
  about: learns[0].isAbout,
  num: 0,
  Img_mark: learns[0].Img_mark,
  isloadding: "",
  visible: false,
  winner: "",
  latestWinner: "",
  turn: "O",
  tabledata: [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ],
  recentcell: [-1, -1],
};

function App() {
  return (
    <stateContext.Provider value={stateConn}>
      <div className="body__container">
        <Header />
        <Visual />
        <div className="flex_container">
          <div className="flex_content">
            <Profile />
            <Learning />
          </div>
        </div>
        <br></br>
        <canvas id="canvas"></canvas>
        <div className="playmodal">
          <PlayModal />
        </div>
        <Mapgoo />
        <Footer />
      </div>
    </stateContext.Provider>
  );
}

export default App;
