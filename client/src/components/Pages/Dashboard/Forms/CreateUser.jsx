import React from 'react';
import Header from '../../../Common/Header';
import DashHeader from '../../../Common/DashHeader';
import Footer from '../../../Common/Footer';
import Banner from '../../../Elements/Banner';

var bnrimg = require('../../../../images/banner.jpg');

const CreateUser = () => {
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
                        Utilizador
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div className="col-md-6 col-md-offset-3">
                    <div className="form-group">
                      <input
                        name="username"
                        type="text"
                        required
                        className="form-control"
                        placeholder="Username"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        name="password"
                        type="password"
                        className="form-control"
                        required
                        placeholder="Password"
                      />
                    </div>
                    <div className="text-center">
                      <button
                        name="submit"
                        type="submit"
                        value="Submit"
                        className="site-button outline green text-uppercase"
                      >
                        criar
                      </button>
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

export default CreateUser;
