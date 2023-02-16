import React from 'react';
import { NavLink } from 'react-router-dom';

var bnr1 = require('./../../images/background/bg-5.png');

const Specialization = () => {
  return (
    <>
      <div
        className='section-full mobile-page-padding bg-white p-t80 p-b30 bg-repeat square_shape1'
        style={{ backgroundImage: 'url(' + bnr1 + ')' }}
      >
        <div className='container'>
          {/* IMAGE CAROUSEL START */}
          <div className='section-content'>
            <div className='row'>
              <div className='col-lg-3 col-md-4 col-sm-6 m-b30'>
                <div className='image-effect-one hover-shadow'>
                  <img src={require('../../images/pic1.jpg')} alt='' />
                  <div className='figcaption'>
                    <h4>Vocação</h4>
                    <p>Prestação de Serviço de Excelência.</p>
                    <NavLink to='/about'>
                      <i className='link-plus bg-primary' />
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-4  col-sm-6 m-b30'>
                <div className='image-effect-one hover-shadow'>
                  <img src={require('../../images/pic2.jpg')} alt='' />
                  <div className='figcaption'>
                    <h4>Competência</h4>
                    <p>Melhores Regras e Processos Construtivos.</p>
                    <NavLink to='/about'>
                      <i className='link-plus bg-primary' />
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-4  col-sm-6 m-b30'>
                <div className='image-effect-one hover-shadow'>
                  <img src={require('../../images/pic3.jpg')} alt='' />
                  <div className='figcaption bg-dark'>
                    <h4>Qualidade</h4>
                    <p>Em permanência e em todas as suas vertentes.</p>
                    <NavLink to='/about'>
                      <i className='link-plus bg-primary' />
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-12 col-sm-6 m-b30'>
                <div className='mt-box our-speciallization-content'>
                  <h3 className='m-t0'>
                    <span className='font-weight-100'>Proposta de</span> Valor.
                  </h3>
                  <p>
                    When it comes to your house, don’t mess with the rest, trust
                    the best. Making your vision come true, that is what we do.
                  </p>
                  <NavLink to='/about' className='site-button btn-effect'>
                    Ver Tudo
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='hilite-title text-right p-r50 text-uppercase'>
          <strong>Bem-Vindo</strong>
        </div>
      </div>
    </>
  );
};

export default Specialization;
