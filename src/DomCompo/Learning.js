import React, { memo } from 'react';
import '../DomCompoCss/SectionCommon.scss';
import '../DomCompoCss/Learning.scss';

import learns from '../Const_etc/learns';
import { useDispatch, useSelector } from 'react-redux';
import { learningPlus, learningMinus } from '../action';

const Learning = memo(() => {
  const { num } = useSelector((state) => state.LrnReducer);

  const dispatch = useDispatch();

  return (
    <section className="section section--learning">
      <div className="inner">
        <div className="buttoning" id="buttoning">
          <button
            onClick={() => {
              dispatch(learningPlus());
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              dispatch(learningMinus());
            }}
          >
            -
          </button>
        </div>
        <div className="learning" id="learning">
          <img src={learns[num].Img_mark} alt="g"></img>
        </div>
        <ul>
          <li>{learns[num].title} </li>
          <li>{learns[num].isAbout}</li>
        </ul>
      </div>
      {/* </div> */}
    </section>
  );
});

export default memo(Learning);
