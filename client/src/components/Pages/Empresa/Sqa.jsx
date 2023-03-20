import React from "react";
import Header from "../../Common/Header";
import Footer from "../../Common/Footer";
import Banner from "../../Elements/Banner";

import bnrimg from "./../../../images/banner.jpg";

const Sqa = () => {
  return (
    <>
      <Header />
      <div className="page-content">
        <Banner
          title="Segurança, Qualidade e Ambiente"
          pagename="Empresa"
          bgimage={bnrimg}
        />

        <div className="section-full p-tb80 inner-page-padding">
          <div className="container">
            <div className="row">
              <div className="section-content">
                <div className="container m-b50">
                  <div className="mt-tabs vertical tabs-default">
                    <ul className="nav nav-tabs">
                      <li className="active">
                        <a data-toggle="tab" href="#seguranca">
                          Segurança
                        </a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#qualidade">
                          Qualidade
                        </a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#ambiente">
                          Ambiente
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content empresa-text">
                      <div id="seguranca" className="tab-pane active">
                        <p className="m-b0 ">
                          Um dos nossos objectivos prioritários é a
                          implementação de medidas de prevenção e protecção
                          tendentes a evitar os riscos e a zelar pela segurança
                          e saúde dos trabalhadores.
                        </p>
                      </div>
                      <div id="qualidade" className="tab-pane">
                        <p className="m-b0">
                          Em 2001 a NORASIL obteve a certificação do Sistema de
                          Gestão de Qualidade segundo a NP EN ISO 9001. <br />
                          <br /> Neste contexto, está naturalmente
                          institucionalizado um conjunto de procedimentos,
                          normalização, parametrização e avaliação periódicas de
                          desempenho, que são garantes de uma construção
                          cuidada, com qualidade e segurança. <br /> <br />
                          Posteriormente foi certificada de acordo com a NP EN
                          ISO 9001:2000 e de seguida, pela NP EN ISO 9001:2008.
                        </p>
                      </div>
                      <div id="ambiente" className="tab-pane">
                        <p className="m-b0">
                          Pela importância que lhe atribuímos, desde há muito
                          desenvolvemos, caso a caso, um plano de gestão
                          ambiental tendo como objectivo concreto a minimização
                          dos efeitos negativos e prejudiciais sobre o meio
                          ambiente.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Sqa;
