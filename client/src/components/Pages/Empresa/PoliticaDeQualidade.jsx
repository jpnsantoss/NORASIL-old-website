import React from 'react';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import Banner from '../../Elements/Banner';

var bnrimg = require('./../../../images/banner.jpg');

const PoliticaDeQualidade = () => {
  return (
    <>
      <Header />
      <div className='page-content'>
        <Banner
          title='Política de Qualidade'
          pagename='Empresa'
          bgimage={bnrimg}
        />

        {/* SECTION CONTENTG START */}
        <div className='section-full p-tb80 inner-page-padding'>
          <div className='container'>
            <div className='row'>
              <div className='section-content'>
                <div className='m-b50'>
                  {/* TAB DEFAULT */}
                  <div className='section-content'>
                    <div className='mt-tabs tabs-default'>
                      <ul className='nav nav-tabs'>
                        <li className='active'>
                          <a data-toggle='tab' href='#cat1'>
                            Missão
                          </a>
                        </li>
                        <li>
                          <a data-toggle='tab' href='#cat2'>
                            Visão
                          </a>
                        </li>
                        <li>
                          <a data-toggle='tab' href='#cat3'>
                            Valores e Objetivos
                          </a>
                        </li>
                        <li>
                          <a data-toggle='tab' href='#cat4'>
                            Estratégia
                          </a>
                        </li>
                      </ul>
                      <div className='tab-content'>
                        <div id='cat1' className='tab-pane active'>
                          <ul className='m-tb20 m-l20 empresa-text'>
                            <li>
                              A crescente valorização da qualidade da obra
                              construída;
                            </li>
                            <li>
                              A sistemática validação de regras tendentes à
                              plena satisfação dos Clientes;
                            </li>
                            <li>
                              O incentivo à inovação e desenvolvimento
                              tecnológico e de gestão;
                            </li>
                            <li>
                              As boas práticas, rapidez e segurança na execução;
                            </li>
                            <li>
                              A pesquisa de novas oportunidades de negócio e de
                              cooperação empresarial;
                            </li>
                            <li>
                              O apoio e melhoria da habilitação para o exercício
                              da actividade.
                            </li>
                          </ul>
                        </div>
                        <div id='cat2' className='tab-pane'>
                          <ul className='m-tb20 m-l20 empresa-text'>
                            <li>
                              O reforço da posição da Norasil no mercado das
                              obras públicas e privadas;
                            </li>
                            <li>
                              Reforçar a confiança perante os Bancos, Clientes,
                              Prestadores de Serviços e Colaboradores em geral;
                            </li>
                            <li>Tornar mais fortes os vínculos contratuais;</li>
                            <li>
                              Aumentar os graus de integração, satisfação e
                              motivação dos Colaboradores;
                            </li>
                            <li>
                              Crescimento da qualidade e competitividade com o
                              incentivo de inovação e melhoria do conhecimento;
                            </li>
                            <li>
                              Fomentar a continua redução de custos, sem
                              prejuízo da qualidade, produtividade e eficácia.
                            </li>
                          </ul>
                        </div>
                        <div id='cat3' className='tab-pane'>
                          <ul className='m-tb20 m-l20 empresa-text'>
                            <li>
                              Cumprimento de compromissos, num quadro de
                              profissionalismo e responsabilidade;
                            </li>
                            <li>
                              Assumir como vocação a prestação de um serviço de
                              excelência, colocando sempre todo o empenho,
                              experiência e conhecimento em tudo o que se
                              executa;
                            </li>
                            <li>
                              O desempenho das funções individuais respeitando
                              os princípios da ética, rigor e eficiência;
                            </li>
                            <li>
                              O desenvolvimento de uma filosofia de melhoria
                              contínua envolvendo todos os Colaboradores;
                            </li>
                            <li>
                              Fomentar e incrementar nos Colaboradores o
                              espírito de equipa, contribuindo para que todos
                              tenham a percepção de que o desempenho global da
                              empresa resulta da combinação dos esforços
                              individuais.
                            </li>
                          </ul>
                        </div>
                        <div id='cat4' className='tab-pane'>
                          <ul className='m-tb20 m-l20 empresa-text'>
                            <li>
                              O alargamento da área geográfica de actuação a
                              todo o Território Nacional e/ou Internacional;
                            </li>
                            <li>
                              A criação de parcerias, para desenvolver e
                              negociar de forma a assegurar níveis
                              concorrenciais e aumento de sinergias;
                            </li>
                            <li>
                              A manutenção de uma actividade economicamente
                              viável;
                            </li>
                            <li>
                              Promover sistematicamente a análise de soluções
                              técnicas e económicas, com objectividade e rigor;
                            </li>
                            <li>
                              Contribuir para garantir, de forma reiterada, a
                              confiança e preferência de antigos Clientes,
                              assegurando em cada obra uma relação de
                              proximidade, disponibilidade e ligação interessada
                              com os Clientes;
                            </li>
                            <li>
                              Promover a constante actualização de
                              conhecimentos e a frequência de acções de
                              formação;
                            </li>
                            <li>
                              A promoção e valorização da imagem da Empresa.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* SECTION CONTENT END */}
      </div>

      <Footer />
    </>
  );
};

export default PoliticaDeQualidade;
