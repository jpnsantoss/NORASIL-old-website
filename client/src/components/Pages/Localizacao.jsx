import React from 'react';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import Banner from '../Elements/Banner';

var bnrimg = require('./../../images/banner.jpg');

const Localizacao = () => {
  return (
    <>
      <Header />
      <div className="page-content">
        <Banner
          title="Localização e Contacto"
          pagename="Contact Us"
          bgimage={bnrimg}
        />

        {/* SECTION CONTENTG START */}
        <div className="section-full p-tb80 inner-page-padding">
          {/* LOCATION BLOCK*/}
          <div className="container">
            {/* GOOGLE MAP & CONTACT FORM */}
            <div className="section-content">
              {/* CONTACT FORM*/}
              <div className="row">
                <div className="col-md-8 col-sm-6">
                  <form
                    className="contact-form cons-contact-form"
                    method="post"
                    action=""
                  >
                    <div className="contact-one m-b30">
                      {/* TITLE START */}
                      <div className="section-head">
                        <div className="mt-separator-outer separator-left">
                          <div className="mt-separator">
                            <h2 className="text-uppercase sep-line-one ">
                              <span className="font-weight-300 text-primary">
                                Entre em
                              </span>{' '}
                              Contacto
                            </h2>
                          </div>
                        </div>
                      </div>
                      {/* TITLE END */}
                      <div className="form-group">
                        <input
                          name="username"
                          type="text"
                          required
                          className="form-control"
                          placeholder="Nome"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          name="email"
                          type="text"
                          className="form-control"
                          required
                          placeholder="E-Mail"
                        />
                      </div>
                      <div className="form-group">
                        <textarea
                          name="message"
                          rows={4}
                          className="form-control"
                          required
                          placeholder="Mensagem"
                          defaultValue={''}
                          style={{ height: '18vh' }}
                        />
                      </div>
                      <div className="text-right">
                        <button
                          name="submit"
                          type="submit"
                          value="Submit"
                          className="site-button btn-effect"
                        >
                          Enviar
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="contact-info m-b30">
                    {/* TITLE START */}
                    <div className="section-head">
                      <div className="mt-separator-outer separator-left">
                        <div className="mt-separator">
                          <h2 className="text-uppercase sep-line-one ">
                            Contactos
                          </h2>
                        </div>
                      </div>
                    </div>
                    {/* TITLE END */}
                    <div className="bg-dark p-a20 text-white">
                      <div className="mt-icon-box-wraper left p-b40">
                        <div className="icon-xs">
                          <i className="fa fa-phone" />
                        </div>
                        <div className="icon-content">
                          <h5 className="m-t0 font-weight-500">
                            Telefone (Sede)
                          </h5>
                          <p>(+351) 229 399 250</p>
                        </div>
                      </div>
                      <div className="mt-icon-box-wraper left p-b40">
                        <div className="icon-xs">
                          <i className="fa fa-envelope" />
                        </div>
                        <div className="icon-content">
                          <h5 className="m-t0 font-weight-500">
                            Endereço de E-Mail
                          </h5>
                          <p>norasil@norasil.pt</p>
                        </div>
                      </div>
                      <div className="mt-icon-box-wraper left">
                        <div className="icon-xs">
                          <i className="fa fa-map-marker" />
                        </div>
                        <div className="icon-content">
                          <h5 className="m-t0 font-weight-500">Sede</h5>
                          <p>Rua de Brito Capelo 598, Matosinhos</p>
                          <h5 className="m-t0 font-weight-500">
                            Estaleiro Central
                          </h5>
                          <p>Rua das Rosas, 519 4455-550 Perafita</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="gmap-outline">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3002.802070555161!2d-8.692456484179209!3d41.182484079283476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd246f3a62c97fd5%3A0xae7c451864213813!2sRua%20de%20Brito%20Capelo%20598%2C%204450-075%20Matosinhos!5e0!3m2!1spt-PT!2spt!4v1676588606166!5m2!1spt-PT!2spt"
                title="Mapa da Sede"
                width="100%"
                height="450"
                style={{ border: '0' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        {/* SECTION CONTENT END */}
      </div>

      <Footer />
    </>
  );
};

export default Localizacao;
