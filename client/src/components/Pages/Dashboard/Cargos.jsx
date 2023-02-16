import React from 'react';
import Header from '../../Common/Header';
import DashHeader from '../../Common/DashHeader';
import Footer from '../../Common/Footer';
import Banner from '../../Elements/Banner';
import { NavLink } from 'react-router-dom';

var bnrimg = require('./../../../images/banner.jpg');

const Cargos = () => {
  return (
    <>
      <Header />
      <div className="page-content">
        <Banner title="Dashboard" pagename="Dashboard" bgimage={bnrimg} />
        <DashHeader />
        {/* SECTION CONTENTG START */}
        <div className="section-full p-tb150">
          <div className="container">
            <div className="section-content">
              <div className="section-content m-b50">
                {/* TITLE START */}
                <div className="section-head">
                  <div className="mt-separator-outer separator-left">
                    <div className="mt-separator">
                      <h2 className="text-black text-uppercase sep-line-one ">
                        <span className="font-weight-300 text-primary">
                          Lista de{' '}
                        </span>{' '}
                        Cargos
                      </h2>
                      <NavLink
                        to="./editor"
                        className="m-t15 site-button outline green text-uppercase m-r15"
                      >
                        Adicionar Cargo
                      </NavLink>
                    </div>
                  </div>
                </div>
                {/* TITLE END */}
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Título</th>
                      <th>Operações</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Isto é uma seca e tou farto desta aula</td>
                      <td>
                        <div className="botoes">
                          <button
                            className="site-button text-uppercase blue m-r5"
                            type="button"
                          >
                            <i className="fa fa-pencil" />{' '}
                          </button>
                          <button
                            className="site-button text-uppercase red"
                            type="button"
                          >
                            <i className="fa fa-close" />{' '}
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Alimentari Riuniti</td>
                      <td>
                        <div className="botoes">
                          <button
                            className="site-button text-uppercase blue m-r5"
                            type="button"
                          >
                            <i className="fa fa-pencil" />{' '}
                          </button>
                          <button
                            className="site-button text-uppercase red"
                            type="button"
                          >
                            <i className="fa fa-close" />{' '}
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Ernst Handel</td>
                      <td>
                        <div className="botoes">
                          <button
                            className="site-button text-uppercase blue m-r5"
                            type="button"
                          >
                            <i className="fa fa-pencil" />{' '}
                          </button>
                          <button
                            className="site-button text-uppercase red"
                            type="button"
                          >
                            <i className="fa fa-close" />{' '}
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
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

export default Cargos;
