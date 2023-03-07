import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const services = [
  {
    count: 1,
    title: `Missão`,
    icon: require("./../../images/icon/crane-1.png"),
    description:
      "A nossa missão é oferecer soluções inovadoras, combinando qualidade e eficiência para a realização de projetos de sucesso.",
  },
  {
    count: 2,
    title: "Visão",
    icon: require("./../../images/icon/renovation.png"),
    description:
      "A nossa visão é ser reconhecidos como uma empresa que oferece soluções de alta qualidade, visando o sucesso dos nossos clientes.",
  },
  {
    count: 3,
    title: "Valores e Objetivos",
    icon: require("./../../images/icon/toolbox.png"),
    description:
      "Na Norasil, o nosso objetivo é sempre alcançar a excelência em tudo o que fazemos, preservando os nossos valores éticos e profissionais.",
  },
  {
    count: 4,
    title: "Estratégia",
    icon: require("./../../images/icon/compass.png"),
    description:
      "Na Norasil, trabalhamos na promoção e valorização da sua imagem, consolidando-se como referência no mercado da construção civil.",
  },
];

var img1 = require("./../../images/background/bg-6.png");

const PoliticaDeQualidade = () => {
  useEffect(() => {
    function loadScript(src) {
      return new Promise(function (resolve, reject) {
        var script = document.createElement("script");
        script.src = src;
        script.addEventListener("load", function () {
          resolve();
        });
        script.addEventListener("error", function (e) {
          reject(e);
        });
        document.body.appendChild(script);
        document.body.removeChild(script);
      });
    }

    loadScript("./assets/js/masonary.js");
  }, []);

  return (
    <>
      <div className="section-full mobile-page-padding  p-b150  square_shape2">
        <div className="section-content">
          <div
            className="Service-half-top p-t80  bg-dark bg-moving"
            style={{ backgroundImage: "url(" + img1 + ")" }}
          >
            <div className="container">
              <div className="section-head text-white">
                <div className="mt-separator-outer separator-left">
                  <div className="mt-separator">
                    <h2 className="text-white text-uppercase sep-line-one ">
                      <span className="font-weight-300 text-primary">
                        Política da
                      </span>{" "}
                      Qualidade
                    </h2>
                  </div>
                </div>
                <h3>Comprometidos com a excelência em cada projeto.</h3>
              </div>
            </div>
          </div>
          <div className="services-half-bottom">
            <div className="container">
              <div className="row">
                {services.map((item, index) => (
                  <div className="col-md-3 col-sm-6" key={index}>
                    <div className="mt-icon-box-wraper m-b30">
                      <div className="relative icon-count-2 bg-gray p-a30 p-tb50">
                        <span className="icon-count-number">{item.count}</span>
                        <div className="icon-md inline-icon m-b15 text-primary scale-in-center">
                          <span className="icon-cell">
                            <img src={item.icon} alt="" />
                          </span>
                        </div>
                        <div className="icon-content">
                          <h4 className="mt-tilte m-b25 display-flex">
                            {item.title}
                          </h4>
                          <p>{item.description}</p>
                          <NavLink
                            to={"/empresa/politicadequalidade"}
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
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PoliticaDeQualidade;
