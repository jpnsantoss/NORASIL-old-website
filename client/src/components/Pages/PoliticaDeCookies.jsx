import React from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import Banner from "../Elements/Banner";

import bnrimg from "./../../images/banner.jpg";

const PoliticaDeCookies = () => {
  return (
    <>
      <Header />
      <div className="page-content">
        <Banner
          title="Política de Cookies"
          pagename="Início"
          bgimage={bnrimg}
        />

        <div className="section-full p-tb150">
          <div className="container">
            <div className="section-content">
              <div className="empresa-text">
                <li>
                  <b> O que são cookies</b>
                </li>
                <br />
                <p>
                  “Cookies” são pequenas etiquetas de software que podem ser
                  armazenadas no seu computador através do navegador de internet
                  (browser), retendo apenas informação relacionada com as suas
                  preferências, não incluindo, como tal, os seus dados pessoais.
                </p>
                <br />
                <li>
                  <b>Porque é que o website utiliza cookies?</b>
                </li>
                <br />
                <p>
                  Durante uma visita a esta página web, poderão ser colocados
                  ficheiros denominados “Cookies” no computador do utilizador.
                  Estes Cookies permitem adequar a página web aos gostos e
                  preferências do utilizador e apresentar promoções e ofertas de
                  produtos que podem ser do seu interesse enquanto utilizador.
                </p>
                <br />
                <li>
                  <b>Tipos de Cookies</b>
                </li>
                <br />
                <p>
                  Cookies necessários para: Permitir a navegação no Site; Tirar
                  partido das suas funcionalidades, nomeadamente, aceder a áreas
                  seguras e conteúdos de acesso exclusivo para Utilizadores
                  registados.
                </p>
                <p>
                  Cookies funcionais para: Gravar informação sobre as opções dos
                  nossos Utilizadores; Permitir customizar o nosso Site às
                  necessidades dos mesmos, nomeadamente, memorizar a língua de
                  origem.
                </p>
                <p>
                  Cookies de desempenho para: Monitorizar a forma como os
                  Utilizadores individualmente acedem ao nosso Site e com que
                  regularidade.
                </p>
                <p>
                  Cookies de sessão para: Utilizadas para o processo de
                  reservas, uma vez que estes tipos de cookies são mais seguros,
                  não podendo ser manipuladas por terceiros.
                </p>
                <p>
                  Usamos cookies analíticos para monitorizar e melhorar o nosso
                  site. Esses cookies são fornecidos pelo Google Analytics 4, um
                  serviço de análise do Google. Desta forma, recolhemos
                  informações sobre como os utilizadores interagem no nosso
                  site, como páginas visitadas, tempo gasto, fontes de tráfego,
                  cliques e outras métricas. Essas informações são totalmente
                  anónimas, ou seja, não permitem a identificação de
                  utilizadores individuais.
                </p>
                <br />
                <li>
                  <b>Como gerir os cookies</b>
                </li>
                <br />
                <p>
                  Na maioria dos navegadores de Internet (Browsers) estes
                  cookies podem ser facilmente removidos ou recusados. Poderá
                  alterar as suas permissões ao selecionar as definições
                  pretendidas no navegador. Encontrará também mais detalhes
                  sobre estes procedimentos na secção de ajuda do respetivo
                  navegador. A grande maioria dos browsers permite aos
                  Utilizadores visualizar os cookies alojados bem como
                  eliminá-los ou bloqueá-los. Sempre que haja uma eliminação de
                  cookies, algumas finalidades do website poderão ser afetadas.
                  Caso pretenda saber mais sobre o modo de funcionamento dos
                  Cookies, poderá consultar os Sites AboutCookies.org ou
                  Cookiecentral.com.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PoliticaDeCookies;
