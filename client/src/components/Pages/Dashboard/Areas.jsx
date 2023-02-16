import React from 'react';
import Header from '../../Common/Header';
import DashHeader from '../../Common/DashHeader';
import Footer from '../../Common/Footer';
import Banner from '../../Elements/Banner';

var bnrimg = require('./../../../images/banner.jpg');

const Areas = () => {
  return (
    <>
      <Header />
      <div className='page-content'>
        <Banner title='Areas de Intervenção' pagename='Dashboard' bgimage={bnrimg} />
        <DashHeader />
        {/* SECTION CONTENTG START */}
        <div className='section-full p-tb150'>
          <div className='container'>
            <div className='section-content'>
              {/* Everything Here */}
            </div>
          </div>
        </div>
        {/* SECTION CONTENT END */}
      </div>

      <Footer />
    </>
  );
};

export default Areas;
