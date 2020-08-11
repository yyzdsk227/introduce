import React from "react";
import "../DomCompoCss/SectionCommon.scss";
import "../DomCompoCss/Mapgoo.scss";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import PlayModals from "../Compo_etc/PlayModal";

const Mapgoo = ({ google }) => {
  return (
    <section className="section section--where-is">
      <div className="inner">
        <div className="summary">
          <div className="summary__title">where is md's home?</div>
          <div className="summary__description">
            located seoul gangdong myeong-ill Road 172
          </div>
        </div>

        <div className="map">
          <Map
            google={google}
            stlye={{
              width: "100%",
              height: "100%",
            }}
            zoom={13}
            initialCenter={{ lat: 37.534285, lng: 127.146541 }}
          >
            <Marker position={{ lat: 37.534285, lng: 127.146541 }} />
          </Map>
        </div>
      </div>
    </section>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyCTQIlxBn5AfKGvsfJiormAE1esN3fcCkg",
})(Mapgoo);
