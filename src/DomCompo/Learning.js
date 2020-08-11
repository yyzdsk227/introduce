import React, { useState, useEffect, useContext, memo } from "react";
import "../DomCompoCss/SectionCommon.scss";
import "../DomCompoCss/Learning.scss";

import learns from "../Const_etc/learns";
import stateContext from "../Context/StateContext";

const Learning = memo(() => {
  const initAbouts = useContext(stateContext);

  const [abouts, setAbouts] = useState(initAbouts);

  return (
    <section className="section section--learning">
      <div className="inner">
        <div className="buttoning" id="buttoning">
          <button
            onClick={() => {
              abouts.num < 3
                ? setAbouts({
                    title: learns[abouts.num + 1].title,
                    about: learns[abouts.num + 1].isAbout,
                    num: abouts.num + 1,
                  })
                : setAbouts({
                    num: 0,
                  });
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              abouts.num > 0
                ? setAbouts({
                    title: learns[abouts.num - 1].title,
                    about: learns[abouts.num - 1].isAbout,
                    num: abouts.num - 1,
                  })
                : setAbouts({
                    num: 3,
                  });
            }}
          >
            -
          </button>
        </div>
        <div className="learning" id="learning">
          {abouts.num !== 3 ? (
            <img src={learns[abouts.num].Img_mark} alt="g"></img>
          ) : (
            <></>
          )}
        </div>
        <ul>
          {abouts.num !== 3 ? (
            <>
              <li>{learns[abouts.num].title} </li>
              <li>{learns[abouts.num].isAbout}</li>
            </>
          ) : (
            <p>
              {learns[abouts.num].title}
              <br />
              <br />

              {learns[abouts.num].isAbout}
            </p>
          )}
        </ul>
      </div>
      {/* </div> */}
    </section>
  );
});

export default memo(Learning);
