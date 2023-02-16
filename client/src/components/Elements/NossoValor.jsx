import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import CountUp from 'react-countup';
import ModalVideo from 'react-modal-video';
import '../../../node_modules/react-modal-video/css/modal-video.min.css';

var img1 = require('./../../images/video-bg.jpg');

const NossoValor = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);

  const loadScript = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.addEventListener('load', () => {
        resolve();
      });
      script.addEventListener('error', (e) => {
        reject(e);
      });
      document.body.appendChild(script);
      document.body.removeChild(script);
    });
  };

  useEffect(() => {
    loadScript('./assets/js/masonary.js');
  }, []);
  return (
    <>
      <div className='section-full mobile-page-padding p-t80 p-b30 bg-white'>
        <div className='container'>
          <div className='section-content'>
            <div className='row'>
              <div className='col-md-6 col-sm-12'>
                {/* TITLE START */}
                <div className='section-head'>
                  <div className='mt-separator-outer separator-left'>
                    <div className='mt-separator'>
                      <h2 className='text-uppercase sep-line-one '>
                        <span className='font-weight-300 text-primary'>
                          O Nosso
                        </span>{' '}
                        Valor
                      </h2>
                    </div>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. <br />
                      <br /> It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.{' '}
                    </p>
                  </div>
                </div>
                {/* TITLE END */}
                <div className='col-md-4 mt-count m-b30 text-white mt-icon-box-wraper center  bg-dark p-a20'>
                  <div className='counter font-30 font-weight-800 m-b15 text-primary'>
                    <CountUp end={670} duration={5} />
                  </div>
                  <h4 className='m-tb0'>Obras</h4>
                </div>
                <div className='col-md-4 mt-count m-b30 text-white mt-icon-box-wraper center  bg-dark p-a20'>
                  <div className='counter font-30 font-weight-800 m-b15  text-primary'>
                    <CountUp end={670} duration={5} />
                  </div>
                  <h4 className='m-tb0'>Colaboradores</h4>
                </div>
                <div className='col-md-4 mt-count m-b30 text-white mt-icon-box-wraper center  bg-dark p-a20'>
                  <div className='counter font-30 font-weight-800 m-b15 text-primary'>
                    <CountUp end={1500} duration={5} />
                  </div>
                  <h4 className='m-tb0'>Distinções</h4>
                </div>
              </div>
              <div
                className='video-section-full bg-no-repeat bg-cover overlay-wraper'
                style={{ backgroundImage: 'url(' + img1 + ')' }}
              >
                <div className='overlay-main bg-black opacity-07' />
                <div className='video-section-inner'>
                  <div className='video-section-content'>
                    <div className='video-section-left'>
                      <NavLink
                        to={'#'}
                        className='play-now'
                        onClick={openModal}
                      >
                        <i className='icon fa fa-play' />
                        <span className='ripple' />
                      </NavLink>
                    </div>
                    <div className='video-section-right'>
                      <NavLink
                        to={'#'}
                        className='font-weight-600 text-uppercase'
                        onClick={openModal}
                      >
                        Video Presentation
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ModalVideo
        channel='vimeo'
        isOpen={isOpen}
        videoId='34741214'
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default NossoValor;
