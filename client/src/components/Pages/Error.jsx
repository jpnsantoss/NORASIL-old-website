import React from "react";
import { NavLink } from "react-router-dom";
import Header from "./../Common/Header";
import Footer from "./../Common/Footer";
import Banner from "./../Elements/Banner";

import bnrimg from "./../../images/banner.jpg";

const Error = () => {
  return (
    <>
      <Header />
      <div className="page-content">
        <Banner title="Page Not Found" pagename="Error Page" bgimage={bnrimg} />

        <div className="section-full p-tb150">
          <div className="container">
            <div className="section-content">
              <div className="page-notfound text-center">
                <strong>Página não encontrada!</strong>
                <span className="title">404</span>
                <p>
                  A página solicitada não foi encontrada. Por favor, verifique o
                  endereço e tente novamente.
                </p>
                <NavLink
                  to="/"
                  title="Voltar ao início"
                  className="site-button btn-effect"
                >
                  Voltar ao início
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Error;
