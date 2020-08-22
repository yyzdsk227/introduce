import React from 'react';
import '../DomCompoCss/SectionCommon.scss';
import '../DomCompoCss/Profile.scss';
import Img_show1 from '../pub1/epl.png';
import Img_show1_5 from '../pub1/badok.png';
import Img_show2 from '../pub1/netflix.jpg';
import Img_show3 from '../pub1/osse.jpg';
import Img_show2_5 from '../pub1/mlb.jpg';

const Profile = () => {
  return (
    <section className="section section--profile">
      <div className="inner">
        <div className="profile" id="skills">
          <ul>
            <li>
              <img src={Img_show1} alt="g"></img>
              <img src={Img_show1_5} alt="g"></img>
              <p>liked</p>
              <strong>trace..</strong>
            </li>
            <li>
              <img src={Img_show2} alt="g"></img>
              <p>10$ postpaid</p>
            </li>
            <li>
              <img src={Img_show2_5} alt="g"></img>
              <p>recently liked </p>
            </li>
            <li>
              <img src={Img_show3} alt="g"></img>
              <p>2019.1-2020.6 worked </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Profile;
