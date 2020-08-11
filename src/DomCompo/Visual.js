import React from "react";
import "../DomCompoCss/SectionCommon.scss";
import "../DomCompoCss/Visual.scss";

const Visual = () => {
  return (
    <section className="section section--visual">
      <div className="inner">
        <div className="summary">
          <h2 className="summary__title">
            hope to be skillful <br /> Front-end developer
            {/* <!-- &nbsp 줄바꿈?--> */}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Visual;
