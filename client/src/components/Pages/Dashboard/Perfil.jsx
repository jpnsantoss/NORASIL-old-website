import React, { useContext, useState } from "react";
import Header from "../../Common/Header";
import DashHeader from "../../Common/DashHeader";
import Footer from "../../Common/Footer";
import Banner from "../../Elements/Banner";
import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";

import bnrimg from "./../../../images/banner.jpg";
import { AuthContext } from "../../../context/authContext";
import { NavLink, useLocation } from "react-router-dom";
import Loader from "../../Elements/Loader";

const Perfil = () => {
  const location = useLocation();
  const userId = location.pathname.split("/")[3];

  const { currentUser, logout } = useContext(AuthContext);

  const queryClient = useQueryClient();
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
    password2: "",
    admin: false,
  });

  const fetchUser = async () => {
    const { data } = await axios.get(`/users/${userId}`);
    setInputs((prev) => ({
      ...prev,
      username: data.username,
      admin: data.admin,
    }));
    return data;
  };

  const {
    data: user,
    isLoading,
    isError,
    error,
  } = useQuery(["user", userId], fetchUser);

  const editUser = useMutation(
    (editedUser) =>
      axios.put(`/users/${userId}`, editedUser, { withCredentials: true }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("user");
        toast.success("Usuário Editado!");
      },
    }
  );

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSelect = (e) => {
    const { name, value } = e.target;
    const newValue = value === "1";
    setInputs((prev) => ({ ...prev, [name]: newValue }));
  };

  const handleCreate = async (e) => {
    e.preventDefault();

    if (inputs.password != inputs.password2)
      return toast.error("As senhas não coincidem.");
    const updatedInputs = {
      ...inputs,
      isAdmin: currentUser.admin,
    };
    try {
      await editUser.mutateAsync(updatedInputs);
    } catch (err) {
      toast.error(
        err.response?.data?.message || err.message || "Ocorreu um erro."
      );
      if (err.response.data.message == "Não autenticado!") {
        navigate("/login");
      }
    }
  };

  const isMobile = window.innerWidth <= 768;

  if (isLoading) return <Loader />;
  if (isError) toast.error(error.message);

  return (
    <>
      <Header />
      <div className="page-content">
        <Banner title={user.username} pagename="Dashboard" bgimage={bnrimg} />
        {currentUser.admin == 1 && <DashHeader />}
        {currentUser.id != user.id && (
          <div className="container m-t100" style={{ marginBottom: "-100px" }}>
            <h4>
              <NavLink to="/admin/users">
                <i className="fa fa-angle-left arrow-animation m-r10" /> Voltar
              </NavLink>
            </h4>
          </div>
        )}
        <div className="section-full">
          <div className="container">
            <div className="section-content">
              <div className="section-content">
                <div className="container p-l0 ">
                  {currentUser.id == user.id && (
                    <div
                      className={`col-md-6 ${isMobile ? "m-b100" : "m-tb100"}`}
                    >
                      <h2>Olá {user.username}!</h2>
                      <div className="widget widget_services inline-links">
                        <h4 className="widget-title">Queres ir para onde?</h4>
                        <ul>
                          <li>
                            <NavLink to={"/"}>Início</NavLink>
                          </li>
                          <li>
                            <NavLink to={"/admin"}>Dashboard</NavLink>
                          </li>
                        </ul>
                      </div>
                      <button
                        type="submit"
                        onClick={logout}
                        className="site-button outline red text-uppercase"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                  <div className="col-md-6 p-l0 m-tb100">
                    <div className="section-head">
                      <div className="mt-separator-outer separator-left">
                        <div className="mt-separator">
                          <h2 className="text-black text-uppercase sep-line-one ">
                            <span className="font-weight-300 text-primary">
                              Detalhes da{" "}
                            </span>{" "}
                            Conta
                          </h2>
                        </div>
                      </div>
                    </div>
                    <form onSubmit={handleCreate}>
                      <div className="form-group">
                        <input
                          type="text"
                          name="username"
                          className="form-control"
                          required
                          value={inputs.username}
                          onChange={handleChange}
                          placeholder="Username"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          name="password"
                          value={inputs.password}
                          onChange={handleChange}
                          type="password"
                          className="form-control"
                          required
                          placeholder="Password"
                        />
                        <input
                          name="password2"
                          value={inputs.password2}
                          onChange={handleChange}
                          type="password"
                          className="form-control"
                          required
                          placeholder="Confirma a password"
                        />
                      </div>
                      {currentUser.admin == 1 && currentUser.id != user.id && (
                        <div className="form-group">
                          <label>Admin:</label>
                          <select
                            name="admin"
                            onChange={handleSelect}
                            value={inputs.admin ? "1" : "0"}
                          >
                            <option value="0">Não</option>
                            <option value="1">Sim</option>
                          </select>
                        </div>
                      )}

                      <div>
                        <button
                          type="submit"
                          className="site-button outline green text-uppercase"
                        >
                          Atualizar
                        </button>
                      </div>
                    </form>
                  </div>
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

export default Perfil;
