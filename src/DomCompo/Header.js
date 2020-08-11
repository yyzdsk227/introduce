import React, { memo } from "react";
import "../DomCompoCss/Header.scss";
import "../DomCompoCss/SectionCommon.scss";
import axios from "axios";
import { GetNalssi } from "../Compo_etc/GetNalssi";
import PlayModals from "../Compo_etc/PlayModal";

const Header = memo(() => {
  const [nalssi, SetNalssi] = GetNalssi();

  return (
    <header>
      <div className="inner clearfix">
        <div className="menu-group float--left">
          <div className="logo">
            <a href="https://www.github.com/yyzdsk227">GitHub</a>
          </div>
          <ul className="weathering">
            <li
              onClick={
                nalssi.isloadding
                  ? () => {}
                  : () => {
                      SetNalssi({
                        isloadding: true,
                      });

                      setTimeout(() => {
                        axios
                          .get(
                            "http://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=bd8c36da2c4510a870343fdbd5739b54"
                          )
                          .then((response) => response.data)
                          .then((data) => {
                            SetNalssi({
                              temperature: Math.floor(data.main.temp - 273.15),
                              icon: data.weather[0].icon,
                              name: data.weather[0].main,
                              isloadding: false,
                            });
                          });
                      }, 1500);
                    }
              }
            ></li>
            <li>
              {nalssi.isloadding ? "loading.." : `${nalssi.temperature}'C`}
            </li>
            <li>{nalssi.isloadding ? "" : nalssi.name}</li>
          </ul>
          <ul className="main-menu toggle">
            <li>
              <a href="#skills">Skils</a>
            </li>

            <li>
              <PlayModals />
              {/* link로 컴포넌트 연결해야할듯 */}
            </li>
          </ul>
        </div>

        {/* <div className="weather-show float--right">
        
        </div> */}

        <div id="toggle-btn">Header Menu Toggle Button</div>
      </div>
    </header>
  );
});

export default memo(Header);
