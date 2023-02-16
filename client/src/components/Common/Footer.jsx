import React from 'react';
import { NavLink } from 'react-router-dom';

var bgimage = require('./../../images/background/bg-site.png');

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.currentstate = {logo: require('./../../images/logo-dark.png')};
    }
    
    updateFooterLogo = (updatedlogo) => {this.currentstate.logo = updatedlogo;}
    render() {
        return (
            <>
                <footer className="site-footer footer-large  footer-dark	footer-wide">
                    <div className="container call-to-action-wrap bg-no-repeat bg-center" style={{ backgroundImage: 'url('+bgimage+')' }}>
                        <div className="p-a30 bg-primary ">
                            <div className="row">
                                <div className="col-md-8 col-sm-8">
                                    <div className="call-to-action-left text-black">
                                        <h4 className="text-uppercase m-b10 m-t0">Subscreva-se à nossa newsletter!</h4>
                                        <span>Não perca nenhuma informação da Norasil subscrevendo-se à nossa Newsletter.</span>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <div className="call-to-action-right">
                                        <div className="widget_newsletter">
                                            <div className="newsletter-bx">
                                                <form role="search" action="">
                                                    <div className="input-group">
                                                        <input name="news-letter" className="form-control" placeholder="ENTER YOUR EMAIL" type="text" />
                                                        <span className="input-group-btn">
                                                            <button type="submit" className="site-button"><i className="fa fa-paper-plane-o" /></button>
                                                        </span>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* FOOTER BLOCKES START */}
                    <div className="footer-top overlay-wraper">
                        <div className="overlay-main" />
                        <div className="container">
                            <div className="row">
                                {/* ABOUT COMPANY */}
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="widget widget_about">
                                        {/*<h4 class="widget-title">About Company</h4>*/}
                                        <div className="logo-footer clearfix p-b15">
                                            <NavLink to={"./"}><img src={this.currentstate.logo} alt=""/></NavLink>
                                        </div>
                                        <p className="max-w400">Today we can tell you, thanks to your passion, hard work creativity, and expertise, you delivered us the most beautiful house great looks.</p>
                                        <ul className="social-icons  mt-social-links">
                                            <li><NavLink to={"#"} className="fa fa-google" /></li>
                                            <li><NavLink to={"#"} className="fa fa-rss" /></li>
                                            <li><NavLink to={"#"} className="fa fa-facebook" /></li>
                                            <li><NavLink to={"#"} className="fa fa-twitter" /></li>
                                            <li><NavLink to={"#"} className="fa fa-linkedin" /></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* RESENT POST */}
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="widget widget_address_outer">
                                        <h4 className="widget-title">Contacte-nos</h4>
                                        <ul className="widget_address">
                                            <li>Rua de Brito Capelo 598, Matosinhos</li>
                                            <li>norasil@norasil.pt</li>
                                            <li>(351) 229 399 250</li>
                                        </ul>
                                    </div>
                                </div>
                                {/* USEFUL LINKS */}
                                <div className="col-lg-3 col-md-6 col-sm-6 footer-col-3">
                                    <div className="widget widget_services inline-links">
                                        <h4 className="widget-title">Links Úteis</h4>
                                        <ul>
                                            <li><NavLink to={"/"}>Início</NavLink></li>
                                            <li><NavLink to={"/portfolio"}>Portfólio</NavLink></li>
                                            <li><NavLink to={"/recrutamento"}>Recrutamento</NavLink></li>
                                            <li><NavLink to={"/localizacao"}>Localização</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* TAGS */}
                                <div className="col-lg-3 col-md-6 col-sm-6 footer-col-3">
                                    <div className="widget widget_services inline-links">
                                        <h4 className="widget-title">Informações Adicionais</h4>
                                        <ul>
                                            <li><NavLink to={"/privacidade"}>Política de Privacidade</NavLink></li>
                                            <li><NavLink to={"/cookies"}>Política de Cookies</NavLink></li>
                                            <li><a href="https://www.livroreclamacoes.pt/" target="_blank" rel="noreferrer">Livro de Reclamações</a></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* NEWSLETTER */}
                            </div>
                        </div>
                    </div>
                    {/* FOOTER COPYRIGHT */}
                    <div className="footer-bottom overlay-wraper">
                        <div className="overlay-main" />
                        <div className="container">
                            <div className="row">
                                <div className="mt-footer-bot-center">
                                    <span className="copyrights-text">© 2023 Norasil - Sociedade de Construção Civil, S.A. <br /> Desenvolvido por <a style={{ color: "white" }}  href="mailto:joaosantos@norasil.pt">João Santos</a>.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>

            </>
        );
    };
};

export default Footer;