import React from "react";
import { NavLink } from "react-router-dom";

import bnr1 from "./../../images/background/bg-5.png";

import pic1 from "../../images/propostadevalor/pic1.jpg";
import pic2 from "../../images/propostadevalor/pic2.jpg";
import pic3 from "../../images/propostadevalor/pic3.jpg";

const Specialization = () => {
  return (
    <>
      <div
        className="section-full mobile-page-padding bg-white p-t80 p-b30 bg-repeat square_shape1"
        style={{ backgroundImage: "url(" + bnr1 + ")" }}
      >
        <div className="container">
          <div className="section-content">
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-6 m-b30">
                <div className="image-effect-one hover-shadow">
                  <img src={pic1} alt="" />
                  <div className="figcaption">
                    <h4>Vocação</h4>
                    <p>Prestação de Serviço de Excelência.</p>
                    <NavLink to="/empresa/propostadevalor">
                      <i className="link-plus bg-primary" />
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4  col-sm-6 m-b30">
                <div className="image-effect-one hover-shadow">
                  <img src={pic2} alt="" />
                  <div className="figcaption">
                    <h4>Competência</h4>
                    <p>Melhores Regras e Processos Construtivos.</p>
                    <NavLink to="/empresa/propostadevalor">
                      <i className="link-plus bg-primary" />
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4  col-sm-6 m-b30">
                <div className="image-effect-one hover-shadow">
                  <img src={pic3} alt="" />
                  <div className="figcaption bg-dark">
                    <h4>Qualidade</h4>
                    <p>Em permanência e em todas as suas vertentes.</p>
                    <NavLink to="/empresa/propostadevalor">
                      <i className="link-plus bg-primary" />
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-12 col-sm-6 m-b30">
                <div className="mt-box our-speciallization-content">
                  <h3 className="m-t0">
                    <span className="font-weight-100">Proposta de</span> Valor.
                  </h3>
                  <p>
                    Oferecemos soluções personalizadas e de alta qualidade para
                    os nossos clientes, combinando o nosso conhecimento técnico
                    e compromisso com o prazo e orçamento.
                  </p>
                  <NavLink
                    to="/empresa/propostadevalor"
                    className="site-button btn-effect"
                  >
                    Ver Tudo
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hilite-title text-right p-r50 text-uppercase">
          <strong>Bem-Vindo</strong>
        </div>
      </div>
    </>
  );
};

export default Specialization;
