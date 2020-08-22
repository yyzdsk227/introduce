import React, { memo, useEffect } from 'react';
import '../DomCompoCss/Header.scss';
import '../DomCompoCss/SectionCommon.scss';
import PlayModals from '../Compo_etc/PlayModal';
import { nalUtilsThunk } from '../Const_etc/nalUtils';
import { useDispatch, useSelector } from 'react-redux';

const Header = memo(() => {
  const { temperature, name } = useSelector((state) => state.NalReducer);

  console.log(useSelector((state) => state.NalReducer));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(nalUtilsThunk());
  }, [temperature]);

  return (
    <header>
      <div className="inner clearfix">
        <div className="menu-group float--left">
          <div className="logo">
            <a href="https://www.github.com/yyzdsk227">GitHub</a>
          </div>

          <ul className="main-menu toggle">
            <li>
              <a href="#skills">Skills</a>
            </li>

            <li>
              <PlayModals />
            </li>
          </ul>
        </div>

        <div className="float--right">
          <ul className="weathering">
            <li
              onClick={() => {
                dispatch(nalUtilsThunk());
              }}
            ></li>
            <li>{`${temperature}'C`}</li>
            <li>{name}</li>
          </ul>
        </div>
        <div id="toggle-btn">Header Menu Toggle Button</div>
      </div>
    </header>
  );
});

export default memo(Header);
