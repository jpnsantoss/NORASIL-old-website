import React, { useContext, useEffect, useState } from "react";
import Header from "../../Common/Header";
import DashHeader from "../../Common/DashHeader";
import Footer from "../../Common/Footer";
import Banner from "../../Elements/Banner";
import Loader from "../../Elements/Loader";
import { useMutation, useQuery, useQueryClient } from "react-query";
import axios from "axios";
import moment from "moment";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import bnrimg from "./../../../images/banner.jpg";
import { AuthContext } from "../../../context/authContext";

const cats = [
  {
    id: 1,
    name: "Educação e Saúde",
    slug: "educacao",
  },
  {
    id: 2,
    name: "Comércio e Serviços",
    slug: "comercio",
  },
  {
    id: 3,
    name: "Industrial",
    slug: "industrial",
  },
  {
    id: 4,
    name: "Escritórios",
    slug: "escritorios",
  },
  {
    id: 5,
    name: "Habitação",
    slug: "habitacao",
  },
  {
    id: 6,
    name: "Diversos",
    slug: "diversos",
  },
];

const Dashboard = () => {
  const { currentUser } = useContext(AuthContext);
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    title: "",
    client: "",
    time: "",
    description: "",
    mainImage: "",
    category: cats[0].slug,
    date: "",
  });

  const [file, setFile] = useState("");
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const fetchBuildsPage = async (pageParam = 1, searchParam) => {
    let url = `/builds?page=${pageParam}`;

    if (searchParam) {
      url += `&search=${searchParam}`;
    }
    const response = await axios.get(url);
    return response.data;
  };

  const {
    data: builds,
    isLoading: loadingBuilds,
    isError: isBuildsError,
    error: buildsError,
    isPreviousData,
  } = useQuery(["builds", page, search], () => fetchBuildsPage(page, search), {
    keepPreviousData: true,
  });

  const createBuild = useMutation(
    (newBuild) => axios.post("/builds", newBuild, { withCredentials: true }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("builds");
        toast.success("Obra Criada!");
        setInputs({
          title: "",
          client: "",
          time: "",
          description: "",
          mainImage: "",
          category: "",
          date: "",
        });
        setFile("");
      },
    }
  );

  const deleteBuild = useMutation(
    (buildId) => axios.delete(`/builds/${buildId}`, { withCredentials: true }),
    {
      onSuccess: () => {
        const newTotal = builds.total - 1;
        if (newTotal % 10 === 0 && newTotal > 0) {
          setPage(Math.max(page - 1, 0));
          pagesArray.pop();
        }
        queryClient.invalidateQueries("builds");
        toast.success("Obra Apagada!");
      },
    }
  );

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/upload", formData, {
        withCredentials: true,
      });
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();
    const currentDate = moment(Date.now()).format("YYYY-MM-DD HH:mm:ss");
    const updatedInputs = {
      ...inputs,
      mainImage: imgUrl,
      date: currentDate,
    };
    await setInputs(updatedInputs);

    try {
      await createBuild.mutateAsync(updatedInputs);
    } catch (err) {
      toast.error(
        err.response?.data?.message || err.message || "Ocorreu um erro."
      );
      if (err.response.data.message == "Não autenticado!") {
        navigate("/login");
      }
    }
  };

  const handleDelete = async (buildId) => {
    try {
      await deleteBuild.mutateAsync(buildId);
    } catch (err) {
      toast.error(
        err.response?.data?.message || err.message || "Ocorreu um erro."
      );
      if (err.response.data.message == "Não autenticado!") {
        navigate("/login");
      }
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const searchInput = e.target.elements.searchInput;
    setSearch(searchInput.value);
  };

  if (loadingBuilds) return <Loader />;
  if (isBuildsError) toast.error(buildsError.message);

  const nextPage = () => setPage((prev) => prev + 1);
  const prevPage = () => setPage((prev) => prev - 1);

  const pagesArray = Array(builds.total_pages || 0)
    .fill()
    .map((_, index) => index + 1);

  return (
    <>
      <Header />
      <div className="page-content">
        <Banner title="Dashboard" pagename="Dashboard" bgimage={bnrimg} />
        {currentUser.admin == 1 && <DashHeader />}
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
                        Obra
                      </h2>
                    </div>
                  </div>
                </div>
                <form onSubmit={handleCreate}>
                  <div className="container">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          name="title"
                          type="text"
                          value={inputs.title}
                          required
                          className="form-control"
                          placeholder="Título"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          name="client"
                          type="text"
                          value={inputs.client}
                          required
                          className="form-control"
                          placeholder="Cliente"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          name="time"
                          type="text"
                          value={inputs.time}
                          required
                          className="form-control"
                          placeholder="Prazo"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <textarea
                          name="description"
                          value={inputs.description}
                          rows={4}
                          className="form-control "
                          placeholder="Descrição"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label">
                          Área de Intervenção:
                        </label>
                        <select
                          name="category"
                          onChange={handleChange}
                          value={inputs.category}
                        >
                          {cats.map((item) => (
                            <option key={item.id} value={item.slug}>
                              {item.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="form-group m-t50">
                        <label className="form-label">Main Image:</label>
                        <input
                          name=""
                          type="file"
                          accept="image/*"
                          required
                          onChange={(e) => setFile(e.target.files[0])}
                          className="form-control-file"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="site-button outline green text-uppercase"
                    >
                      Criar
                    </button>
                  </div>
                </form>
                <div className="section-head m-t100">
                  <div className="mt-separator-outer separator-left">
                    <div className="mt-separator">
                      <h2 className="text-black text-uppercase sep-line-one ">
                        <span className="font-weight-300 text-primary">
                          Lista de{" "}
                        </span>{" "}
                        Obras
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="p-b30 text-center">
                  <div className="container m-t50 p-l0">
                    <div className="col-md-6 p-l0">
                      <form onSubmit={handleSearch}>
                        <div className="input-group m-b20">
                          <input
                            name="searchInput"
                            className="form-control"
                            placeholder="Procurar Obra"
                            type="text"
                          />
                          <span className="input-group-btn">
                            <button type="submit" className="site-button">
                              <i className="fa fa-search" />
                            </button>
                          </span>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-6">
                      {builds.total_pages > 1 && (
                        <ul className="pagination m-tb0">
                          <li>
                            <button onClick={prevPage} disabled={page === 1}>
                              «
                            </button>
                          </li>
                          {pagesArray.map((pg) => (
                            <li key={pg}>
                              <button
                                disabled={pg === builds.page}
                                onClick={() => setPage(pg)}
                              >
                                {pg}
                              </button>
                            </li>
                          ))}
                          <li>
                            <button
                              onClick={nextPage}
                              disabled={page === builds.total_pages}
                            >
                              »
                            </button>
                          </li>
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
                {search && (
                  <div className="m-b50">
                    <h4>
                      Resultados da pesquisa: <b>{search}</b>
                    </h4>
                    <button
                      className="site-button outline"
                      onClick={() => setSearch("")}
                    >
                      Limpar
                    </button>
                  </div>
                )}
                {builds.data.length > 0 ? (
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Título</th>
                        <th>Cliente</th>
                        <th>Data</th>
                        <th className="text-center">Operações</th>
                      </tr>
                    </thead>
                    <tbody>
                      {builds.data.map((build) => (
                        <tr key={build.id}>
                          <td>{build.title}</td>
                          <td>{build.client}</td>
                          <td className="col-md-2 text-center">
                            {build.formatted_date}
                          </td>
                          <td className="col-md-2">
                            <div className="botoes">
                              <NavLink
                                to={`/admin/obras/${build.id}`}
                                className="site-button text-uppercase operation-button  blue m-r5"
                                type="button"
                              >
                                <i className="fa fa-image" />{" "}
                              </NavLink>

                              <button
                                className="site-button operation-button text-uppercase red"
                                onClick={() => handleDelete(build.id)}
                              >
                                <i className="fa fa-close" />{" "}
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <div className="m-b100">
                    <h4 className="text-center">Nenhuma obra encontrada.</h4>
                  </div>
                )}
                <div className="m-b20">
                  {builds.total_pages > 1 && (
                    <ul className="pagination m-tb0">
                      <li>
                        <button onClick={prevPage} disabled={page === 1}>
                          «
                        </button>
                      </li>
                      {pagesArray.map((pg) => (
                        <li key={pg}>
                          <button
                            disabled={pg === builds.page}
                            onClick={() => setPage(pg)}
                          >
                            {pg}
                          </button>
                        </li>
                      ))}
                      <li>
                        <button
                          onClick={nextPage}
                          disabled={page === builds.total_pages}
                        >
                          »
                        </button>
                      </li>
                    </ul>
                  )}
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

export default Dashboard;
