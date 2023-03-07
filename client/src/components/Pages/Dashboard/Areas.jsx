import React, { useState } from "react";
import Header from "../../Common/Header";
import DashHeader from "../../Common/DashHeader";
import Footer from "../../Common/Footer";
import Banner from "../../Elements/Banner";
import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";

var bnrimg = require("./../../../images/banner.jpg");

const Areas = () => {
  const queryClient = useQueryClient();

  const [name, setName] = useState("");

  const fetchCategories = async () => {
    const { data } = await axios.get("/categories");
    return data;
  };

  const {
    data: cats,
    isLoading,
    error,
  } = useQuery("categories", fetchCategories);

  const createCategory = useMutation(
    (newCategory) => axios.post("/categories", newCategory),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("categories");
        toast.success("Área de Intervenção Criada!");
      },
    }
  );

  const deleteCategory = useMutation(
    (categoryId) => axios.delete(`/categories/${categoryId}`),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("categories");
        toast.success("Área de Intervenção Apagada!");
      },
    }
  );

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      await createCategory.mutateAsync({ name });
      setName("");
    } catch (err) {
      toast.error(
        err.response?.data?.message || err.message || "Ocorreu um erro."
      );
    }
  };

  const handleDelete = async (categoryId) => {
    try {
      await deleteCategory.mutateAsync(categoryId);
    } catch (err) {
      toast.error(
        err.response?.data?.message || err.message || "Ocorreu um erro."
      );
    }
  };

  return (
    <>
      <Header />
      <div className="page-content">
        <Banner title="Dashboard" pagename="Dashboard" bgimage={bnrimg} />
        <DashHeader />
        <div className="section-full p-tb150">
          <div className="container">
            <div className="section-content">
              <div className="section-content m-b50">
                <div className="section-head">
                  <div className="mt-separator-outer separator-left">
                    <div className="mt-separator">
                      <h2 className="text-black text-uppercase sep-line-one ">
                        <span className="font-weight-300 text-primary">
                          Adicionar{" "}
                        </span>{" "}
                        Área
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 p-l0">
                  <form onSubmit={handleCreate}>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        required
                        value={name}
                        placeholder="Nome"
                        onChange={(e) => setName(e.target.value)}
                      />
                      <span className="input-group-btn">
                        <button type="submit" className="site-button green">
                          Criar
                        </button>
                      </span>
                    </div>
                  </form>
                </div>
                <div className="section-head m-t150">
                  <div className="mt-separator-outer separator-left">
                    <div className="mt-separator">
                      <h2 className="text-black text-uppercase sep-line-one ">
                        <span className="font-weight-300 text-primary">
                          Lista de{" "}
                        </span>{" "}
                        Áreas
                      </h2>
                    </div>
                  </div>
                </div>
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
                      {cats.map((item) => (
                        <tr key={item.id}>
                          <td className="col-md-1 text-center">{item.id}</td>
                          <td>{item.name}</td>
                          <td className="col-md-2">
                            <div className="botoes">
                              <button
                                className="site-button operation-button text-uppercase red"
                                type="button"
                                onClick={() => handleDelete(item.id)}
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
      </div>

      <Footer />
    </>
  );
};

export default Areas;
