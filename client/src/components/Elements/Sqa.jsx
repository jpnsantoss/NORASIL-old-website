import React from "react";
import { NavLink } from "react-router-dom";

const Faq = () => {
  return (
    <>
      <div className="section-full p-t100 p-b100 bg-white inner-page-padding">
        <div className="container">
          <div className="section-content">
            <div className="row">
              <div className="col-md-6 col-sm-6">
                <div className="section-head">
                  <div className="mt-separator-outer separator-left">
                    <div className="mt-separator">
                      <h2 className="text-uppercase sep-line-one ">
                        <span className="font-weight-300 text-primary">
                          Política
                        </span>{" "}
                        SQA
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="section-content p-b30">
                  <div className="mt-accordion acc-bg-gray" id="accordion5">
                    <div className="panel mt-panel">
                      <div className="acod-head acc-actives">
                        <h6 className="acod-title">
                          <a
                            data-toggle="collapse"
                            href="#collapseOne5"
                            data-parent="#accordion5"
                          >
                            Segurança
                            <span className="indicator">
                              <i className="fa" />
                            </span>
                          </a>
                        </h6>
                      </div>
                      <div id="collapseOne5" className="acod-body collapse in">
                        <div className="acod-content p-tb15 text-justify">
                          <p>
                            Um dos nossos objectivos prioritários é a
                            implementação de medidas de prevenção e protecção
                            tendentes a evitar os riscos e a zelar pela
                            segurança e saúde dos trabalhadores.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="panel mt-panel">
                      <div className="acod-head">
                        <h6 className="acod-title">
                          <a
                            data-toggle="collapse"
                            href="#collapseTwo5"
                            className="collapsed"
                            data-parent="#accordion5"
                          >
                            Qualidade
                            <span className="indicator">
                              <i className="fa" />
                            </span>
                          </a>
                        </h6>
                      </div>
                      <div id="collapseTwo5" className="acod-body collapse">
                        <div className="acod-content p-tb15 text-justify">
                          Em 2001 a NORASIL obteve a certificação do Sistema de
                          Gestão de Qualidade segundo a NP EN ISO 9001. <br />
                          <br />
                          Neste contexto, está naturalmente institucionalizado
                          um conjunto de procedimentos, normalização,
                          parametrização e avaliação periódicas de desempenho,
                          que são garantes de uma construção cuidada, com
                          qualidade e segurança. <br />
                          <br />
                          Posteriormente foi certificada de acordo com a NP EN
                          ISO 9001:2000 e de seguida, pela NP EN ISO 9001:2008.
                        </div>
                      </div>
                    </div>
                    <div className="panel mt-panel">
                      <div className="acod-head">
                        <h6 className="acod-title">
                          <a
                            data-toggle="collapse"
                            href="#collapseThree5"
                            className="collapsed"
                            data-parent="#accordion5"
                          >
                            Ambiente
                            <span className="indicator">
                              <i className="fa" />
                            </span>
                          </a>
                        </h6>
                      </div>
                      <div id="collapseThree5" className="acod-body collapse">
                        <div className="acod-content p-tb15 text-justify">
                          Pela importância que lhe atribuímos, desde há muito
                          desenvolvemos, caso a caso, um plano de gestão
                          ambiental tendo como objectivo concreto a minimização
                          dos efeitos negativos e prejudiciais sobre o meio
                          ambiente.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="section-head">
                  <div className="mt-separator-outer separator-left">
                    <div className="mt-separator">
                      <h2 className="text-uppercase sep-line-one ">
                        <span className="font-weight-300 text-primary">
                          A nossa
                        </span>{" "}
                        Solução
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mt-icon-box-wraper p-a25 m-b30 onhover-box-shadow bg-gray center">
                      <div className="mt-icon-box-sm inline-icon text-primary  m-b20 radius bg-secondry  scale-in-center">
                        <span className="icon-cell text-primary">
                          <i className="flaticon-sketch" />
                        </span>
                      </div>
                      <div className="icon-content text-black">
                        <h4 className="mt-tilte text-uppercase font-weight-600 m-b20">
                          Assistance
                        </h4>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          setting as Planning.
                        </p>
                        <NavLink
                          to="/about"
                          className="site-button-link"
                          data-hover="Read More"
                        >
                          Read More{" "}
                          <i className="fa fa-angle-right arrow-animation" />
                        </NavLink>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mt-icon-box-wraper p-a25 m-b30 onhover-box-shadow bg-dark center">
                      <div className="mt-icon-box-sm inline-icon text-primary  m-b20 radius bg-secondry  scale-in-center">
                        <span className="icon-cell text-primary">
                          <i className="flaticon-ui" />
                        </span>
                      </div>
                      <div className="icon-content text-white">
                        <h4 className="mt-tilte text-uppercase font-weight-600 m-b20">
                          Financing
                        </h4>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          setting as Planning.
                        </p>
                        <NavLink
                          to="/about"
                          className="site-button-link yellow"
                          data-hover="Read More"
                        >
                          Read More{" "}
                          <i className="fa fa-angle-right arrow-animation" />
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
