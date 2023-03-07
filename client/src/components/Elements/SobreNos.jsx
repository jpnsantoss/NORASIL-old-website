import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const images = [
  require("./../../images/gallery/pic1.jpg"),
  require("./../../images/gallery/pic8.jpg"),
  require("./../../images/gallery/pic9.jpg"),
  require("./../../images/gallery/pic6.jpg"),
  require("./../../images/gallery/pic2.jpg"),
];

var bnr1 = require("./../../images/background/bg-6.png");

const SobreNos = () => {
  useEffect(() => {
    function loadScript(src) {
      return new Promise((resolve, reject) => {
        var script = document.createElement("script");
        script.src = src;
        script.addEventListener("load", () => {
          resolve();
        });
        script.addEventListener("error", (e) => {
          reject(e);
        });
        document.body.appendChild(script);
        document.body.removeChild(script);
      });
    }

    loadScript("./assets/js/masonary.js");
  }, []);

  const options = {
    loop: true,
    autoplay: true,
    margin: 30,
    nav: false,
    dots: true,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      991: {
        items: 1,
      },
    },
  };
  return (
    <>
      <div
        className="section-full mobile-page-padding p-t80 p-b30 bg-dark bg-repeat square_shape2 bg-moving"
        style={{ backgroundImage: "url(" + bnr1 + ")" }}
      >
        <div className="container">
          <div className="section-head">
            <div className="mt-separator-outer separator-center">
              <div className="mt-separator">
                <h2 className="text-white text-uppercase sep-line-one ">
                  <span className="font-weight-300 text-primary">Sobre a</span>{" "}
                  Empresa
                </h2>
              </div>
            </div>
          </div>
          <div className="section-content">
            <div className="row">
              <div className="col-md-9 col-sm-12">
                <OwlCarousel
                  className="owl-carousel about-home owl-btn-vertical-center"
                  {...options}
                >
                  {images.map((item, index) => (
                    <div className="item" key={index}>
                      <div className="mt-img-effect zoom-slow">
                        <NavLink to="/empresa/apresentacao">
                          <img src={item} alt="" />
                        </NavLink>
                      </div>
                    </div>
                  ))}
                </OwlCarousel>
              </div>
              <div className="col-md-3 col-sm-12">
                <div className="about-home-right bg-white p-a30">
                  <h3 className="m-t0">
                    <span className="font-weight-100">Uma Empresa </span>{" "}
                    Comprometida com a Excelência.
                  </h3>
                  <p>
                    <strong>
                      Fundada em 1983 por Joaquim António Nogueira da Hora, a
                      Norasil é uma empresa de construção civil.
                    </strong>
                  </p>
                  <p>
                    Este empresa especializou-se em diversas áreas e adquiriu os
                    meios necessários para atingir um volume de negócios anual
                    superior a 20 milhões de euros.
                  </p>
                  <p>
                    Para continuar a crescer e melhorar, estabeleceu
                    estratégias, como a criação de parcerias, para garantir
                    níveis competitivos e sinergias.
                  </p>
                  <div className="text-right">
                    <NavLink
                      to="/empresa/apresentacao"
                      className="site-button-link"
                      data-hover="Read More"
                    >
                      Ler Mais{" "}
                      <i className="fa fa-angle-right arrow-animation" />
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hilite-title text-left p-l50 text-uppercase hilite-dark">
          <strong>Sobre Nós</strong>
        </div>
      </div>
    </>
  );
};

export default SobreNos;
