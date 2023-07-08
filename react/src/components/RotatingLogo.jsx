import React from "react";
import "./rotating.scss";

const RotatingLogo = (props) => {
  return (
    <div style={{ ...props.style }} className={props.className}>
      <div className="contei">
        <div className="obert">
          <div className="thokla thokla1">
            <div className="coin coin1" style={{ backgroundImage: "url(" + props.logoUrl + ")" }}></div>
            <div className="coin coin2" style={{ backgroundImage: "url(" + props.logoUrl + ")" }}></div>
            <div className="coin coin3" style={{ backgroundImage: "url(" + props.logoUrl + ")" }}></div>
          </div>
          <div className="thokla thokla2">
            <div className="coin coin1" style={{ backgroundImage: "url(" + props.logoUrl + ")" }}></div>
            <div className="coin coin2" style={{ backgroundImage: "url(" + props.logoUrl + ")" }}></div>
            <div className="coin coin3" style={{ backgroundImage: "url(" + props.logoUrl + ")" }}></div>
          </div>
          <div className="thokla thokla3">
            <div className="coin coin1" style={{ backgroundImage: "url(" + props.logoUrl + ")" }}></div>
            <div className="coin coin2" style={{ backgroundImage: "url(" + props.logoUrl + ")" }}></div>
            <div className="coin coin3" style={{ backgroundImage: "url(" + props.logoUrl + ")" }}></div>
          </div>
          <div className="thokla thokla4">
            <div className="coin coin1" style={{ backgroundImage: "url(" + props.logoUrl + ")" }}></div>
            <div className="coin coin2" style={{ backgroundImage: "url(" + props.logoUrl + ")" }}></div>
            <div className="coin coin3" style={{ backgroundImage: "url(" + props.logoUrl + ")" }}></div>
          </div>
          {/* <div className="thokla thokla5">
                        <div className="coin coin1"></div>
                        <div className="coin coin2"></div>
                        <div className="coin coin3"></div>
                    </div>
                    <div className="thokla thokla6">
                        <div className="coin coin1"></div>
                        <div className="coin coin2"></div>
                        <div className="coin coin3"></div>
                    </div>
                    <div className="thokla thokla7">
                        <div className="coin coin1"></div>
                        <div className="coin coin2"></div>
                        <div className="coin coin3"></div>
                    </div>
                    <div className="thokla thokla8">
                        <div className="coin coin1"></div>
                        <div className="coin coin2"></div>
                        <div className="coin coin3"></div>
                    </div>
                    <div className="thokla thokla9">
                        <div className="coin coin1"></div>
                        <div className="coin coin2"></div>
                        <div className="coin coin3"></div>
                    </div>
                    <div className="thokla thokla10">
                        <div className="coin coin1"></div>
                        <div className="coin coin2"></div>
                        <div className="coin coin3"></div>
                    </div>
                    <div className="thokla thokla11">
                        <div className="coin coin1"></div>
                        <div className="coin coin2"></div>
                        <div className="coin coin3"></div>
                    </div>
                    <div className="thokla thokla12">
                        <div className="coin coin1"></div>
                        <div className="coin coin2"></div>
                        <div className="coin coin3"></div>
                    </div>
                    <div className="thokla thokla13">
                        <div className="coin coin1"></div>
                        <div className="coin coin2"></div>
                        <div className="coin coin3"></div>
                    </div>
                    <div className="thokla thokla14">
                        <div className="coin coin1"></div>
                        <div className="coin coin2"></div>
                        <div className="coin coin3"></div>
                    </div>
                    <div className="thokla thokla15">
                        <div className="coin coin1"></div>
                        <div className="coin coin2"></div>
                        <div className="coin coin3"></div>
                    </div> */}
        </div>
      </div>
    </div>
  );
};

export default RotatingLogo;
