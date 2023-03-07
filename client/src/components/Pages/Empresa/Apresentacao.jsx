import React from "react";
import Header from "../../Common/Header";
import Footer from "../../Common/Footer";
import Banner from "../../Elements/Banner";

var bnrimg = require("./../../../images/banner.jpg");

const Apresentacao = () => {
  return (
    <>
      <Header />
      <div className="page-content">
        <Banner title="Apresentação" pagename="Empresa" bgimage={bnrimg} />

        <div className="section-full p-tb150">
          <div className="container">
            <div className="section-content">
              <div className="empresa-text">
                <p>
                  Fundada em Maio de 1983, a Norasil – Sociedade de Construção
                  Civil, S.A., (com Sede e Estaleiro Central em Matosinhos) tem
                  como objecto principal a execução de empreitadas de obras
                  públicas e de obras particulares.
                </p>
                <p>
                  A decisão de criar esta empresa de construção foi consequência
                  da evolução natural e aspiração do seu Fundador – Joaquim
                  António Nogueira da Hora (Engenheiro Civil), hoje Presidente
                  do Conselho de Administração, que sempre exerceu a actividade
                  profissional em empresas de construção.
                </p>
                <p>
                  Desde logo, a Norasil cresceu em simultâneo com a Firma
                  Nogueira da Hora – Sociedade Imobiliária, Lda. fundada em
                  Março de 1983, e cujo objectivo fundamental é a promoção
                  imobiliária (aquisição, recuperação, transformação de bens
                  imóveis e sua comercialização). Ambas constituem um grupo de
                  empresas familiares, cuja totalidade do capital é detida por
                  cinco membros da mesma família.
                </p>
                <p>
                  Por estratégia, que se tem mantido desde a fundação, a Norasil
                  desenvolveu e implementou aptidões, técnicas e especializações
                  em várias áreas específicas da construção civil, desde as
                  infraestruturas às obras de engenharia, abarcando igualmente
                  os acabamentos e decoração. Para tal, foram adquiridos os
                  meios técnicos e humanos apropriados, sendo hoje detentora de
                  um corpo técnico e de um parque de equipamentos que lhe
                  garantem a capacidade de execução anual de um volume de
                  negócio superior a vinte milhões de euros.
                </p>
                <p>
                  A evolução do crescimento da empresa, alicerçada na contínua
                  implementação de actos definidos no plano estratégico, tem
                  permitido, apesar de a actividade se desenvolver
                  preferencialmente em Portugal Continental, ser hoje uma
                  empresa média, com nome conceituado no mercado de obras
                  públicas e privadas, com significativa fidelização de Clientes
                  e com reforçada confiança perante Bancos, Fornecedores,
                  Subempreiteiros e Colaboradores em geral.
                </p>
                <p>
                  Na perspectiva de evolução e melhoria, e com base quer na
                  envolvente e na conjuntura, quer na experiência e antecedentes
                  da empresa, nos últimos anos estabelecemos e mantemos algumas
                  outras opções estratégicas, nomeadamente:{" "}
                </p>
                <p>
                  Criação de parcerias, para desenvolver e negociar de forma a
                  assegurar níveis concorrenciais e aumento de sinergias.
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

export default Apresentacao;
