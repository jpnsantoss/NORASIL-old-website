import React from "react";
import { NavLink } from "react-router-dom";

import bnr1 from "./../../images/background/callus.jpg";

const Callus = () => {
  return (
    <>
      <div
        className="section-full mobile-page-padding p-tb80 overlay-wraper bg-cover bg-center"
        style={{ backgroundImage: "url(" + bnr1 + ")" }}
      >
        <div className="overlay-main bg-primary opacity-07" />
        <div className="container">
          <div className="section-content">
            <div className="call-us-section text-center">
              <h4 className="m-b15">Vamos trabalhar juntos</h4>
              <h2 className="call-us-number m-b15 m-b0">(+351) 229 399 250</h2>
              <h4 className="call-us-address m-t0 m-b20">
                Rua de Brito Capelo 598, Matosinhos
              </h4>
              <NavLink
                to="/contactus"
                className="site-button-secondry btn-effect bg-dark"
              >
                Contacte-nos
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Callus;
