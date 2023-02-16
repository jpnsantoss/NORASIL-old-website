import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Error from './Pages/Error';
import Localizacao from './Pages/Localizacao';
import Obra from './Pages/Obra';
import ObraVideo from './Pages/ObraVideo';
import Portfolio from './Pages/Portfolio';
import Apresentacao from './Pages/Empresa/Apresentacao';
import PoliticaDeQualidade from './Pages/Empresa/PoliticaDeQualidade';
import Sqa from './Pages/Empresa/Sqa';
import PropostaDeValor from './Pages/Empresa/PropostaDeValor';
import Recrutamento from './Pages/Recrutamento';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard/Dashboard';
import Users from './Pages/Dashboard/Users';
import Areas from './Pages/Dashboard/Areas';
import Cargos from './Pages/Dashboard/Cargos';
import CreateArea from './Pages/Dashboard/Forms/CreateArea';
import CreateUser from './Pages/Dashboard/Forms/CreateUser';
import CreateBuild from './Pages/Dashboard/Forms/CreateBuild';
import CreateRole from './Pages/Dashboard/Forms/CreateRole';

const Components = () => {
  return (
    <BrowserRouter basename="/">
      <div className="page-wraper">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/error" exact element={<Error />} />
          <Route path="/localizacao" exact element={<Localizacao />} />
          <Route path="/obra" exact element={<Obra />} />
          <Route path="/obravideo" exact element={<ObraVideo />} />
          <Route path="/portfolio" exact element={<Portfolio />} />
          <Route path="/recrutamento" exact element={<Recrutamento />} />

          <Route path="/login" element={<Login />} />
          <Route path="/admin" exact element={<Dashboard />} />
          <Route path="*" element={<Error />} />

          <Route path="empresa">
            <Route index element={<Apresentacao />} />
            <Route path="apresentacao" element={<Apresentacao />} />
            <Route
              path="politicadequalidade"
              element={<PoliticaDeQualidade />}
            />
            <Route path="propostadevalor" element={<PropostaDeValor />} />
            <Route path="sqa" element={<Sqa />} />
          </Route>

          <Route path="admin">
            <Route index element={<Dashboard />} />
            <Route path="obras">
              <Route index element={<Dashboard />} />
              <Route path="editor" element={<CreateBuild />} />
            </Route>
            <Route path="users">
              <Route index element={<Users />} />
              <Route path="editor" element={<CreateUser />} />
            </Route>
            <Route path="areas">
              <Route index element={<Areas />} />
              <Route path="editor" element={<CreateArea />} />
            </Route>
            <Route path="cargos">
              <Route index element={<Cargos />} />
              <Route path="editor" element={<CreateRole />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Components;
