import React from 'react';
import Navigation from '../Common/Navigation';
import { NavLink } from 'react-router-dom';

var bnr = require('./../../images/background/bg-5.png');

class Header extends React.Component {

    constructor(props){
        super(props);
        this.state = {logo: require('./../../images/logo-light.png')};
    }

    state = { isQuoteActive: false };

    handleQuoteToggle = () => {
        this.setState({ isQuoteActive: !this.state.isQuoteActive });
    };

    componentDidMount() {

        const handleScroll = () => {
            const offset = window.scrollY;

            const stickyheader = document.querySelector('.sticky-header ');

            if (offset >= 100) {
                stickyheader.classList.add('is-fixed');
                stickyheader.classList.add('color-fill');

            } else {
                stickyheader.classList.remove('is-fixed');
                stickyheader.classList.remove('color-fill');
            }
        }

        window.addEventListener('scroll', handleScroll);

        window.updateTopMostParent = (logopath) => {
           this.setState({ logo: logopath }); 
        };
    }

    render() {
        const isQuoteActive = this.state.isQuoteActive;
        
        return (
            <>

                <header className="site-header header-style-1">
                    <div className="top-bar bg-gray">
                        <div className="container">
                            <div className="row">
                                <div className="mt-topbar-right clearfix">
                                    <ul className="list-unstyled e-p-bx pull-right">
                                        <li><i className="fa fa-envelope" /> norasil@norasil.pt</li>
                                        <li><i className="fa fa-phone" />(351) 229 399 250</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sticky-header main-bar-wraper">
                        <div className="main-bar bg-white">
                            <div className="container">
                                <div className="logo-header">
                                    <div className="logo-header-inner logo-header-one">
                                        <NavLink to={"/"}>
                                            <img src={this.state.logo} alt="Norasil" />
                                        </NavLink>
                                    </div>
                                </div>
                                {/* NAV Toggle Button */}
                                <button data-target=".header-nav" data-toggle="collapse" type="button" className="navbar-toggle collapsed">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar" />
                                    <span className="icon-bar" />
                                    <span className="icon-bar" />
                                </button>
                                {/* ETRA Nav */}
                                <div className="extra-nav">
                                    <div className="extra-cell">
                                        <NavLink to={"#"} className="contact-slide-show" onClick={this.handleQuoteToggle}><i className="fa fa-angle-left arrow-animation" /></NavLink>
                                    </div>
                                </div>
                                {/* ETRA Nav */}
                                {/* Contact Nav */}
                                <div className="contact-slide-hide " style={{ backgroundImage: 'url(' + bnr + ')', right: isQuoteActive ? '0px' : '-500px' }}>
                                    <div className="contact-nav">
                                    <NavLink to={"#"} className="contact_close" onClick={this.handleQuoteToggle}>×</NavLink>
                                        <div className="contact-nav-form p-a30">
                                            <div className="contact-info   m-b30">
                                                <div className="mt-icon-box-wraper center p-b30">
                                                    <div className="icon-xs m-b20 scale-in-center"><i className="fa fa-phone" /></div>
                                                    <div className="icon-content">
                                                        <h5 className="m-t0 font-weight-500">Telefone (Sede)</h5>
                                                        <p>(351) 229 399 250</p>
                                                    </div>
                                                </div>
                                                <div className="mt-icon-box-wraper center p-b30">
                                                    <div className="icon-xs m-b20 scale-in-center"><i className="fa fa-envelope" /></div>
                                                    <div className="icon-content">
                                                        <h5 className="m-t0 font-weight-500">Endereço de E-Mail</h5>
                                                        <p>norasil@norasil.pt</p>
                                                    </div>
                                                </div>
                                                <div className="mt-icon-box-wraper center p-b30">
                                                    <div className="icon-xs m-b20 scale-in-center"><i className="fa fa-map-marker" /></div>
                                                    <div className="icon-content">
                                                        <h5 className="m-t0 font-weight-500">Localização (Sede)</h5>
                                                        <p>Rua de Brito Capelo 598, Matosinhos</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="full-social-bg">
                                                <ul>
                                                    <li><a href="https://www.facebook.com/norasil.pt/" target="_blank" rel="noreferrer" className="facebook"><i className="fa fa-facebook" /></a></li>
                                                    <li><a href="https://pt.linkedin.com/company/norasil" target="_blank" rel="noreferrer" className="linkedin"><i className="fa fa-linkedin" /></a></li>
                                                </ul>
                                            </div>
                                            <div className="text-center">
                                                <h4 className="font-weight-600">©  2023 NORASIL S.A.</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* MAIN Vav */}
                                <Navigation />
                            </div>
                        </div>
                    </div>
                </header>

            </>
        );
    };
};

export default Header;
