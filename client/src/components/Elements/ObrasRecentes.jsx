import React from 'react';
// import SanityClient from "../../client";

import { NavLink } from 'react-router-dom';

const blogs = [
  {
    image: require('./../../images/blog/latest-blog/pic1.jpg'),
    title: 'Commercial design for project',
    description:
      'Which is the same as saying through shrinking from toil and pain.',
    date: '14',
    month: 'April',
    year: '2021',
  },
  {
    image: require('./../../images/blog/latest-blog/pic2.jpg'),
    title: 'Our interior design prediction',
    description:
      'Today we can tell you, thanks to your passion, hard work creativity, and expertise.',
    date: '16',
    month: 'Feb',
    year: '2021',
  },
  {
    image: require('./../../images/blog/latest-blog/pic3.jpg'),
    title: 'Low cost interior designing ideas',
    description:
      'Every pleasure is to be welcomed every pain avoided. in certain circumstances obligations.',
    date: '18',
    month: 'Jan',
    year: '2021',
  },
];

const ObrasRecentes = () => {
  return (
    <>
      <div className='section-full mobile-page-padding p-t80 p-b30 bg-white'>
        <div className='container'>
          {/* TITLE START */}
          <div className='section-head '>
            <div className='mt-separator-outer separator-center'>
              <div className='mt-separator'>
                <h2 className='text-uppercase sep-line-one '>
                  <span className='font-weight-300 text-primary'>Obras</span>{' '}
                  Recentes
                </h2>
              </div>
            </div>
          </div>
          {/* TITLE END */}
          {/* IMAGE CAROUSEL START */}
          <div className='section-content'>
            <div className='row'>
              {blogs.map((item, index) => (
                <div className='col-md-4 col-sm-6' key={index}>
                  <div className='mt-box blog-post latest-blog-3 date-style-1 bg-gray m-b30 box-shadow'>
                    <div className='mt-post-media mt-img-overlay7'>
                      <NavLink to='/post-image'>
                        <img src={item.image} alt='' />
                      </NavLink>
                    </div>
                    <div className='mt-post-info p-a30'>
                      <div className='post-overlay-position'>
                        <div className='mt-post-meta '>
                          <ul>
                            <li className='post-date'>
                              <strong className='text-primary'>
                                {item.date}
                              </strong>{' '}
                              <span>
                                {item.month} {item.year}
                              </span>
                            </li>
                            <li className='post-author'>
                              {' '}
                              <NavLink to='/post-image'>
                                Continental
                              </NavLink>{' '}
                            </li>
                          </ul>
                        </div>
                        <div className='mt-post-title '>
                          <h4 className='post-title m-b0'>{item.title}</h4>
                        </div>
                        <div className='mt-post-text'>
                          <p>{item.description}</p>
                        </div>
                        <div className='readmore-line'>
                          <span>
                            <NavLink
                              to='/post-image'
                              className='site-button-link'
                              data-hover='Read More'
                            >
                              Ver Mais{' '}
                              <i className='fa fa-angle-right arrow-animation' />
                            </NavLink>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='hilite-title text-left p-l50 text-uppercase hilite-dark'>
          <strong>Novidades</strong>
        </div>
      </div>
    </>
  );
};

export default ObrasRecentes;
