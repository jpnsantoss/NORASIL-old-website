import React, { useState } from "react";
import Header from "../../Common/Header";
import DashHeader from "../../Common/DashHeader";
import Footer from "../../Common/Footer";
import Banner from "../../Elements/Banner";
import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";

var bnrimg = require("./../../../images/banner.jpg");

const Users = () => {
  const queryClient = useQueryClient();
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
    admin: false,
  });

  const fetchUsers = async () => {
    const { data } = await axios.get("/users");
    return data;
  };

  const { data: users, isLoading, error } = useQuery("users", fetchUsers);

  const createUser = useMutation((newUser) => axios.post("/users", newUser), {
    onSuccess: () => {
      queryClient.invalidateQueries("users");
    },
  });

  const deleteUser = useMutation((userId) => axios.delete(`/users/${userId}`), {
    onSuccess: () => {
      queryClient.invalidateQueries("users");
    },
  });

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
    try {
      const result = await createUser.mutateAsync(inputs);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (userId) => {
    try {
      await deleteUser.mutateAsync(userId);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Header />
      <div className="page-content">
        <Banner title="Dashboard" pagename="Dashboard" bgimage={bnrimg} />
        <DashHeader />
        {/* SECTION CONTENTG START */}
        <div className="section-full p-tb150">
          <div className="container">
            <div className="section-content">
              <div className="section-content m-b50">
                {/* TITLE START */}
                <div className="section-head">
                  <div className="mt-separator-outer separator-left">
                    <div className="mt-separator">
                      <h2 className="text-black text-uppercase sep-line-one ">
                        <span className="font-weight-300 text-primary">
                          Adicionar{" "}
                        </span>{" "}
                        User
                      </h2>
                    </div>
                  </div>
                </div>
                {/* TITLE END */}
                <div className="container p-l0">
                  <div className="col-md-6 p-l0">
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
                        type="text"
                        className="form-control"
                        required
                        placeholder="Password"
                      />
                    </div>
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

                    <div>
                      <button
                        type="submit"
                        onClick={handleCreate}
                        className="site-button outline green text-uppercase"
                      >
                        criar
                      </button>
                    </div>
                  </div>
                </div>

                {/* TITLE START */}
                <div className="section-head m-t100">
                  <div className="mt-separator-outer separator-left">
                    <div className="mt-separator">
                      <h2 className="text-black text-uppercase sep-line-one ">
                        <span className="font-weight-300 text-primary">
                          Lista de{" "}
                        </span>{" "}
                        Users
                      </h2>
                    </div>
                  </div>
                </div>
                {/* TITLE END */}
                {isLoading ? (
                  <div>Loading...</div>
                ) : error ? (
                  <div>Error: {error.message}</div>
                ) : (
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th className="text-center">Id</th>
                        <th>Título</th>
                        <th className="text-center">Operações</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((item) => (
                        <tr key={item.id}>
                          <td className="col-md-1 text-center">{item.id}</td>
                          <td>{item.username}</td>
                          <td className="col-md-2">
                            <div className="botoes">
                              <button
                                className="site-button text-uppercase operation-button  blue m-r5"
                                type="button"
                              >
                                <i className="fa fa-pencil" />{" "}
                              </button>
                              <button
                                className="site-button operation-button text-uppercase red"
                                type="button"
                                onClick={() => handleDelete(item.id)}
                                // onClick={() => handleDelete(item.id)}
                              >
                                <i className="fa fa-close" />{" "}
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* SECTION CONTENT END */}
      </div>

      <Footer />
    </>
  );
};

export default Users;
