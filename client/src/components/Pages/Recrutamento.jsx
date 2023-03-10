import React from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import Banner from "../Elements/Banner";

import bnrimg from "./../../images/banner.jpg";

const Recrutamento = () => {
  return (
    <>
      <Header />
      <div className="page-content">
        <Banner title="Recrutamento" pagename="Recrutamento" bgimage={bnrimg} />

        <div className="section-full p-tb80 inner-page-padding">
          <div className="container">
            <div className="section-content">
              <div className="row">
                <div className="col-md-12 col-sm-12">
                  <form
                    className="contact-form cons-contact-form"
                    method="post"
                    action=""
                  >
                    <div className="contact-one m-b30">
                      <div className="section-head">
                        <div className="mt-separator-outer separator-left">
                          <div className="mt-separator">
                            <h2 className="text-uppercase sep-line-one ">
                              <span className="font-weight-300 text-primary">
                                Junta-te a
                              </span>{" "}
                              Nós
                            </h2>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <input
                          name="username"
                          type="text"
                          required
                          className="form-control"
                          placeholder="Name"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          name="email"
                          type="text"
                          className="form-control"
                          required
                          placeholder="Email"
                        />
                      </div>
                      <div className="form-group">
                        <textarea
                          name="message"
                          rows={4}
                          className="form-control "
                          required
                          placeholder="Message"
                          defaultValue={""}
                        />
                      </div>
                      <div className="text-right">
                        <button
                          name="submit"
                          type="submit"
                          value="Submit"
                          className="site-button btn-effect"
                        >
                          submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Recrutamento;
