import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import CountUp from "react-countup";
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/css/modal-video.min.css";

import img1 from "./../../images/brevemente.png";

const NossoValor = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);

  const loadScript = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
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
  };

  useEffect(() => {
    loadScript("./assets/js/masonary.js");
  }, []);
  return (
    <>
      <div className="section-full mobile-page-padding p-t80 p-b30 bg-white">
        <div className="container">
          <div className="section-content">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <div className="section-head">
                  <div className="mt-separator-outer separator-left">
                    <div className="mt-separator">
                      <h2 className="text-uppercase sep-line-one ">
                        <span className="font-weight-300 text-primary">
                          O Nosso
                        </span>{" "}
                        Valor
                      </h2>
                    </div>
                    <p style={{ textAlign: "justify" }}>
                      Na Norasil, o valor está na construção de relações
                      duradouras com os nossos clientes, baseadas na confiança e
                      no compromisso com a excelência, refletido em cada etapa
                      do projeto, desde o planeamento até à entrega final,
                      sempre com rigor. <br />
                      <br />
                    </p>
                  </div>
                </div>
                <div className="col-md-4 mt-count m-b30 text-white mt-icon-box-wraper center  bg-dark p-a20">
                  <div className="counter font-30 font-weight-800 m-b15 text-primary">
                    <CountUp end={676} duration={3} />
                  </div>
                  <h4 className="m-tb0">Obras</h4>
                </div>
                <div className="col-md-4 mt-count m-b30 text-white mt-icon-box-wraper center  bg-dark p-a20">
                  <div className="counter font-30 font-weight-800 m-b15  text-primary">
                    <CountUp end={66} duration={3} />
                  </div>
                  <h4 className="m-tb0">Colaboradores</h4>
                </div>
                <div className="col-md-4 mt-count m-b30 text-white mt-icon-box-wraper center  bg-dark p-a20">
                  <div className="counter font-30 font-weight-800 m-b15 text-primary">
                    <CountUp end={7} duration={3} />
                  </div>
                  <h4 className="m-tb0">Distinções</h4>
                </div>
              </div>
              <div
                className="video-section-full bg-no-repeat bg-cover overlay-wraper"
                style={{ backgroundImage: "url(" + img1 + ")" }}
              >
                <div className="overlay-main bg-black opacity-07" />
                <div className="video-section-inner">
                  <div className="video-section-content">
                    <div className="video-section-left">
                      <NavLink
                        to={"#"}
                        className="play-now"
                        // onClick={openModal}
                      >
                        <i className="icon fa fa-play" />
                        <span className="ripple" />
                      </NavLink>
                    </div>
                    <div className="video-section-right">
                      <NavLink
                        to={"#"}
                        className="font-weight-600 text-uppercase"
                        // onClick={openModal}
                      >
                        Apresentação
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="34741214"
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default NossoValor;
