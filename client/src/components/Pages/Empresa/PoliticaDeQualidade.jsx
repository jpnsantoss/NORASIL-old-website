import React from "react";
import Header from "../../Common/Header";
import Footer from "../../Common/Footer";
import Banner from "../../Elements/Banner";

var bnrimg = require("./../../../images/banner.jpg");

const PoliticaDeQualidade = () => {
  return (
    <>
      <Header />
      <div className="page-content">
        <Banner
          title="Política de Qualidade"
          pagename="Empresa"
          bgimage={bnrimg}
        />

        <div className="section-full p-tb80 inner-page-padding">
          <div className="container">
            <div className="row">
              <div className="section-content">
                <div className="m-b50">
                  <div className="section-content">
                    <div className="mt-tabs tabs-default">
                      <ul className="nav nav-tabs">
                        <li className="active">
                          <a data-toggle="tab" href="#cat1">
                            Missão
                          </a>
                        </li>
                        <li>
                          <a data-toggle="tab" href="#cat2">
                            Visão
                          </a>
                        </li>
                        <li>
                          <a data-toggle="tab" href="#cat3">
                            Valores e Objetivos
                          </a>
                        </li>
                        <li>
                          <a data-toggle="tab" href="#cat4">
                            Estratégia
                          </a>
                        </li>
                      </ul>
                      <div className="tab-content">
                        <div id="cat1" className="tab-pane active">
                          <p className="empresa-text m-t50">
                            A missão da Norasil é oferecer serviços de
                            construção de alta qualidade, com foco na
                            valorização constante da qualidade da obra
                            construída. Nós procuramos a plena satisfação dos
                            nossos clientes através da validação sistemática de
                            regras e práticas inovadoras. Além disso,
                            incentivamos o desenvolvimento tecnológico e de
                            gestão para garantir a rapidez e a segurança na
                            execução dos nossos projetos.
                          </p>
                        </div>
                        <div id="cat2" className="tab-pane">
                          <p className="empresa-text m-t50">
                            A visão da Norasil é reforçar a sua posição no
                            mercado de obras públicas e privadas, tornando-se
                            uma referência em qualidade e inovação. Além disso,
                            procuramos aumentar a integração, satisfação e
                            motivação dos nossos colaboradores, sempre
                            incentivando o crescimento da qualidade e
                            competitividade por meio da inovação e melhoria do
                            conhecimento. A Norasil visa fomentar a continuidade
                            da redução de custos, sempre preservando a
                            qualidade, a produtividade e a eficácia dos nossos
                            serviços.
                          </p>
                        </div>
                        <div id="cat3" className="tab-pane">
                          <p className="empresa-text m-t50">
                            Na Norasil, os nossos valores e objetivos são
                            baseados no cumprimento de compromissos, com um
                            quadro de profissionalismo e responsabilidade.
                            Acreditamos na prestação de um serviço de
                            excelência, colocando sempre todo o empenho,
                            experiência e conhecimento em tudo o que fazemos.
                            Nós valorizamos o desempenho das funções individuais
                            com ética, rigor e eficiência, e procuramos o
                            desenvolvimento de uma filosofia de melhoria
                            contínua envolvendo todos os colaboradores. Além
                            disso, fomentamos o espírito de equipa entre os
                            nossos colaboradores, contribuindo para que todos
                            tenham a perceção de que o desempenho global da
                            empresa resulta da combinação dos seus esforços
                            individuais.
                          </p>
                        </div>
                        <div id="cat4" className="tab-pane">
                          <p className="empresa-text m-t50">
                            A Norasil tem como estratégia ampliar a sua presença
                            geográfica, atuando tanto nacionalmente como
                            internacional. A empresa pretende criar parcerias
                            estratégicas que ajudem a alcançar uma vantagem
                            competitiva e aumentar sinergias. Em simultâneo, a
                            Norasil dedica-se a manter uma atividade económica
                            viável, analisando soluções técnicas e económicas
                            com rigor e objetividade. A Norasil pretende
                            fortalecer a sua relação com os clientes antigos,
                            mantendo uma relação de proximidade e
                            disponibilidade. Além disso, a Norasil valoriza a
                            atualização constante de conhecimentos e a
                            frequência de ações de formação.{" "}
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
      </div>

      <Footer />
    </>
  );
};

export default PoliticaDeQualidade;
