import React from 'react';
import Header from './../Common/Header';
import Footer from '../Common/Footer';
import Slider from './../Elements/Slider';
import ObrasRecentes from '../Elements/ObrasRecentes';
import PropostaDeValor from '../Elements/PropostaDeValor';
import SobreNos from '../Elements/SobreNos';
import NossoValor from '../Elements/NossoValor';
import AreasIntervencao from '../Elements/AreasIntervencao';
import PoliticaDeQualidade from '../Elements/PoliticaDeQualidade';

const Home = () => {
  return (
    <>
      <Header />
      <div className="page-content">
        <Slider />
        <ObrasRecentes />
        <PropostaDeValor />
        <SobreNos />
        <NossoValor />
        <AreasIntervencao />
        <PoliticaDeQualidade />
      </div>
      <Footer />
    </>
  );
};

export default Home;
