import React, { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Localizacao from "./Pages/Localizacao";
import Obra from "./Pages/Obra";
import ObraVideo from "./Pages/ObraVideo";
import Portfolio from "./Pages/Portfolio";
import Apresentacao from "./Pages/Empresa/Apresentacao";
import PoliticaDeQualidade from "./Pages/Empresa/PoliticaDeQualidade";
import Sqa from "./Pages/Empresa/Sqa";
import PropostaDeValor from "./Pages/Empresa/PropostaDeValor";
import Recrutamento from "./Pages/Recrutamento";
import Login from "./Pages/Login";
import Obras from "./Pages/Dashboard/Obras";
import Users from "./Pages/Dashboard/Users";
// import Areas from "./Pages/Dashboard/Areas";
import { AuthContext } from "../context/authContext";
import ScrollToTop from "./Common/ScrollToTop";
import Imagens from "./Pages/Dashboard/Imagens";

const Components = () => {
  const ProtectedRoute = ({ children }) => {
    const { currentUser } = useContext(AuthContext);

    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  const AdminRoute = ({ children }) => {
    const { currentUser } = useContext(AuthContext);
    if (!currentUser.admin) {
      return <Navigate to="/" />;
    }

    return children;
  };

  return (
    <BrowserRouter basename="/">
      <ScrollToTop />
      <div className="page-wraper">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/error" exact element={<Error />} />
          <Route path="/localizacao" exact element={<Localizacao />} />
          <Route path="/obravideo" exact element={<ObraVideo />} />
          <Route path="/portfolio">
            <Route index element={<Portfolio />} />
            <Route path="/portfolio/:id" element={<Obra />} />
          </Route>
          <Route path="/recrutamento" exact element={<Recrutamento />} />

          <Route path="/login" element={<Login />} />
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
            <Route
              index
              element={
                <ProtectedRoute>
                  {" "}
                  <Obras />{" "}
                </ProtectedRoute>
              }
            />

            <Route path="obras">
              <Route
                index
                element={
                  <ProtectedRoute>
                    {" "}
                    <Obras />{" "}
                  </ProtectedRoute>
                }
              />
              <Route
                path=":id"
                element={
                  <ProtectedRoute>
                    {" "}
                    <Imagens />{" "}
                  </ProtectedRoute>
                }
              />
            </Route>

            <Route
              path="users"
              element={
                <AdminRoute>
                  {" "}
                  <Users />{" "}
                </AdminRoute>
              }
            />

            {/* <Route
              path="areas"
              element={
                <ProtectedRoute>
                  {" "}
                  <Areas />{" "}
                </ProtectedRoute>
              }
            /> */}
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Components;
