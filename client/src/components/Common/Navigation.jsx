import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import AlvaraDeConstrucao from '../Documents/AlvaraDeConstrucao.pdf';
import RelatorioDeContas from '../Documents/RelatorioDeContas.pdf';

const Navigation = (props) => {
  useEffect(() => {
    function loadScript(src) {
      return new Promise(function (resolve, reject) {
        var script = document.createElement('script');
        script.src = src;
        script.addEventListener('load', function () {
          resolve();
        });
        script.addEventListener('error', function (e) {
          reject(e);
        });
        document.body.appendChild(script);
        document.body.removeChild(script);
      });
    }
    loadScript('/assets/js/masonary.js');
  }, []);

  return (
    <>
      <div
        className={
          props.bgcolor !== ''
            ? `header-nav navbar-collapse collapse ${props.bgcolor}`
            : 'header-nav navbar-collapse collapse'
        }
      >
        <ul className="nav navbar-nav">
          <li>
            <NavLink to={'/'}>Início</NavLink>
          </li>
          <li>
            {/* eslint-disable-next-line */}
            <a href="#">Empresa</a>
            <ul className="sub-menu">
              <li>
                <NavLink to={'/empresa/apresentacao'}>Apresentação</NavLink>
              </li>
              <li>
                <NavLink to={'/empresa/politicadequalidade'}>
                  Política de Qualidade
                </NavLink>
              </li>
              <li>
                <NavLink to={'/empresa/propostadevalor'}>
                  Proposta de Valor
                </NavLink>
              </li>
              <li>
                <NavLink to={'/empresa/sqa'}>SQA</NavLink>
              </li>
            </ul>
          </li>
          <li>
            {/* eslint-disable-next-line */}
            <a href="#">Documentos</a>
            <ul className="sub-menu">
              <li>
                <a href={AlvaraDeConstrucao} rel="noreferrer" target="_blank">
                  Alvará de Construção
                </a>
              </li>
              <li>
                <a href={RelatorioDeContas} rel="noreferrer" target="_blank">
                  Relatório de Contas
                </a>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to={'/portfolio'}>Portfólio</NavLink>
          </li>
          {/* <li> <NavLink to={'/recrutamento'}>Recrutamento</NavLink> </li> */}
          <li>
            <NavLink to={'/localizacao'}>Localização</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navigation;
