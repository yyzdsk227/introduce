import React from 'react';

import Header from './DomCompo/Header';
import './App.scss';
import Visual from './DomCompo/Visual';
import Profile from './DomCompo/Profile';
import Learning from './DomCompo/Learning';
import Mapgoo from './DomCompo/Mapgoo';
import Footer from './DomCompo/Footer';
import PlayModal from './Compo_etc/PlayModal';
import PlayGuide from './Compo_etc/PlayGuide';

function App() {
  return (
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
      <div className="playmodal">
        <PlayGuide />
        <PlayModal />
      </div>
      <Mapgoo />
      <Footer />
    </div>
  );
}

export default App;
