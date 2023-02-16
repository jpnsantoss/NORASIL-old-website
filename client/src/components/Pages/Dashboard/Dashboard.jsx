import React from 'react';
import Header from '../../Common/Header';
import DashHeader from '../../Common/DashHeader';
import Footer from '../../Common/Footer';
import Banner from '../../Elements/Banner';

var bnrimg = require('./../../../images/banner.jpg');

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className='page-content'>
        <Banner title='Obras' pagename='Dashboard' bgimage={bnrimg} />
        <DashHeader />
        {/* SECTION CONTENTG START */}
        <div className='section-full p-tb150'>
          <div className='container'>
            <div className='section-content'>
              <div className='section-content m-b50'>
                {/* TITLE START */}
                <div className='section-head'>
                  <div className='mt-separator-outer separator-left'>
                    <div className='mt-separator'>
                      <h2 className='text-black text-uppercase sep-line-one '>
                        <span className='font-weight-300 text-primary'>
                          Lista de{' '}
                        </span>{' '}
                        Obras
                      </h2>
                    </div>
                  </div>
                </div>
                {/* TITLE END */}
                <table className='table table-bordered'>
                  <thead>
                    <tr>
                      <th>Título</th>
                      <th>Cliente</th>
                      <th>Operações</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Isto é uma seca e tou farto desta aula</td>
                      <td>Centro comercial</td>
                      <td>
                        <div className='botoes'>
                          <button
                            className='site-button text-uppercase blue m-r5'
                            type='button'
                          >
                            <i className='fa fa-pencil' />{' '}
                          </button>
                          <button
                            className='site-button text-uppercase red'
                            type='button'
                          >
                            <i className='fa fa-close' />{' '}
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Alimentari Riuniti</td>
                      <td>Moe</td>
                      <td>
                        <div className='botoes'>
                          <button
                            className='site-button text-uppercase blue m-r5'
                            type='button'
                          >
                            <i className='fa fa-pencil' />{' '}
                          </button>
                          <button
                            className='site-button text-uppercase red'
                            type='button'
                          >
                            <i className='fa fa-close' />{' '}
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Ernst Handel</td>
                      <td>Island Trading</td>
                      <td>
                        <div className='botoes'>
                          <button
                            className='site-button text-uppercase blue m-r5'
                            type='button'
                          >
                            <i className='fa fa-pencil' />{' '}
                          </button>
                          <button
                            className='site-button text-uppercase red'
                            type='button'
                          >
                            <i className='fa fa-close' />{' '}
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

export default Dashboard;
