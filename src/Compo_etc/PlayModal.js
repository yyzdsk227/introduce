import React, { useState, useContext } from "react";
import Modal from "react-awesome-modal";
// import NumberBaseball from './NumberBaseball';
// import TicTaeToe from './TicTaeToe';
import stateContext from "../Context/StateContext";
import Tictaetoe from "./Tictaetoc";

const PlayModal = () => {
  const abccontext = useContext(stateContext);

  const [visible, SetVisible] = useState(abccontext);

  const openModal = () => {
    SetVisible({
      visible: true,
    });
  };

  const closeModal = () => {
    SetVisible({
      visible: false,
    });
  };

  return (
    <section className="playModal" style={{ textAlign: "center" }}>
      <li style={{ listStyle: "none" }}>
        <a
          href="#"
          onClick={openModal}
          style={{ display: "block", padding: "10px" }}
        >
          Let's Play??
        </a>
      </li>
      <Modal
        visible={visible.visible}
        width="400"
        height="400"
        effect="fadeInUp"
        onClickAway={() => {}}
        style={{ position: "relative" }}
      >
        <div
          style={{
            left: "50%",
            position: "absolute",
            transform: "translate(-50%)",
          }}
        >
          <Tictaetoe />
          <a href="#" onClick={closeModal} style={{ border: "1px solid cyan" }}>
            Close
          </a>
        </div>
      </Modal>
    </section>
  );
};

export default PlayModal;
