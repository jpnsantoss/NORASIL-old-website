import React from 'react';
import Header from '../../../Common/Header';
import DashHeader from '../../../Common/DashHeader';
import Footer from '../../../Common/Footer';
import Banner from '../../../Elements/Banner';

var bnrimg = require('../../../../images/banner.jpg');

const CreateRole = () => {
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
                          Adicionar{' '}
                        </span>{' '}
                        Cargo
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div className="col-md-6 col-md-offset-3">
                    <div className="input-group">
                      <input
                        name="news-letter"
                        className="form-control"
                        placeholder="Nome"
                        type="text"
                      />
                      <span className="input-group-btn">
                        <button type="submit" className="site-button green">
                          Criar
                        </button>
                      </span>
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

export default CreateRole;
