import React from 'react';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';

const PropostaDeValor = () => {
  return (
    <>
      <Header />
      <div className='page-content'>
        {/* SECTION CONTENTG START */}
        <div className='section-full p-t80 p-b150 inner-page-padding'>
          <div className='container'>
            <div className='faq-1 bg-gray  p-a50'>
              {/* TITLE START */}
              <div className='section-head'>
                <div className='mt-separator-outer separator-center'>
                  <div className='mt-separator'>
                    <h2 className='text-uppercase sep-line-one '>
                      Proposta de Valor
                    </h2>
                  </div>
                </div>
              </div>
              {/* TITLE END */}
              <div>
                <p className='empresa-text text-center m-b100'>
                  É a nossa ambição e empreendedorismo que nos tem permitido um
                  crescimento constante, consolidado e sustentado. Mantendo esta
                  nossa postura como base; o nosso compromisso, integridade,
                  rigor e paixão, são a nossa orientação e assenta nos seguintes
                  princípios e valores:
                </p>
              </div>
              {/* Accordian */}
              <div className='mt-accordion acc-bg-white' id='accordion5'>
                <div className='panel mt-panel'>
                  <div className='acod-head'>
                    <h4 className='acod-title'>
                      <a
                        data-toggle='collapse'
                        href='#collapseOne5'
                        className='collapsed'
                        data-parent='#accordion5'
                      >
                        Rigor
                        <span className='indicator'>
                          <i className='fa fa-plus' />
                        </span>
                      </a>
                    </h4>
                  </div>
                  <div id='collapseOne5' className='acod-body collapse'>
                    <div className='acod-content p-tb15'>
                      <p className='empresa-text'>
                        O cumprimento de compromissos, num quadro de
                        profissionalismo e responsabilidade.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='panel mt-panel'>
                  <div className='acod-head'>
                    <h4 className='acod-title'>
                      <a
                        data-toggle='collapse'
                        href='#collapseTwo5'
                        className='collapsed'
                        data-parent='#accordion5'
                      >
                        Competência
                        <span className='indicator'>
                          <i className='fa fa-plus' />
                        </span>
                      </a>
                    </h4>
                  </div>
                  <div id='collapseTwo5' className='acod-body collapse'>
                    <div className='acod-content p-tb15'>
                      <p className='empresa-text'>
                        O desempenho das funções individuais respeitando os
                        princípios da ética, rigor, eficiência e integridade.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='panel mt-panel'>
                  <div className='acod-head'>
                    <h4 className='acod-title'>
                      <a
                        data-toggle='collapse'
                        href='#collapseThree5'
                        className='collapsed'
                        data-parent='#accordion5'
                      >
                        Proximidade e Flexibilidade
                        <span className='indicator'>
                          <i className='fa fa-plus' />
                        </span>
                      </a>
                    </h4>
                  </div>
                  <div id='collapseThree5' className='acod-body collapse'>
                    <div className='acod-content p-tb15'>
                      <p className='empresa-text'>
                        O estabelecimento de uma relação de proximidade com os
                        Clientes e tudo fazer para merecer a sua confiança e
                        preferência.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='panel mt-panel'>
                  <div className='acod-head'>
                    <h4 className='acod-title'>
                      <a
                        data-toggle='collapse'
                        href='#collapseFour5'
                        className='collapsed'
                        data-parent='#accordion5'
                      >
                        Qualidade, Segurança e Ambiente
                        <span className='indicator'>
                          <i className='fa fa-plus' />
                        </span>
                      </a>
                    </h4>
                  </div>
                  <div id='collapseFour5' className='acod-body collapse'>
                    <div className='acod-content p-tb15'>
                      <p className='empresa-text'>
                        A prestação de um Serviço de Excelência, cumprindo as
                        Especificações Legais e a diminuição continua da
                        Neutralidade Carbónica e Impactos Ambientais.
                      </p>
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

export default PropostaDeValor;
