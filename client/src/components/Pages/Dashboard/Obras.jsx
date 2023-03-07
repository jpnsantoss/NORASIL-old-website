import React, { useEffect, useState } from "react";
import Header from "../../Common/Header";
import DashHeader from "../../Common/DashHeader";
import Footer from "../../Common/Footer";
import Banner from "../../Elements/Banner";
import Loader from "../../Elements/Loader";
import { useMutation, useQuery, useQueryClient } from "react-query";
import axios from "axios";
import moment from "moment";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import ConfirmButton from "react-confirm-button";

var bnrimg = require("./../../../images/banner.jpg");

const Dashboard = () => {
  const queryClient = useQueryClient();
  const [inputs, setInputs] = useState({
    title: "",
    client: "",
    time: "",
    description: "",
    mainImage: "",
    category: "",
    date: "",
  });
  const [file, setFile] = useState("");
  const [page, setPage] = useState(1);

  const fetchBuildsPage = async (pageParam = 1) => {
    const response = await axios.get(`/builds?page=${pageParam}`);
    return response.data;
  };

  const {
    data: builds,
    isLoading: loadingBuilds,
    isError: isBuildsError,
    error: buildsError,
    isPreviousData,
  } = useQuery(["builds", page], () => fetchBuildsPage(page), {
    keepPreviousData: true,
  });

  const createBuild = useMutation(
    (newBuild) => axios.post("/builds", newBuild),
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
    (buildId) => axios.delete(`/builds/${buildId}`),
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

  const fetchCategories = async () => {
    const { data } = await axios.get("/categories");
    return data;
  };

  const {
    data: cats,
    isLoading: loadingCats,
    isError: isCatsError,
    error: catsError,
    isSuccess: catsSuccess,
  } = useQuery("buildcats", fetchCategories);

  useEffect(() => {
    if (catsSuccess && cats.length > 0) {
      setInputs((inputs) => ({ ...inputs, category: cats[0].id }));
    }
  }, [catsSuccess, cats]);

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSelect = (event) => {
    const categoryId = parseInt(event.target.value);
    setInputs((inputs) => ({
      ...inputs,
      category: categoryId,
    }));
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
    }
  };

  const handleDelete = async (buildId) => {
    try {
      await deleteBuild.mutateAsync(buildId);
    } catch (err) {
      toast.error(
        err.response?.data?.message || err.message || "Ocorreu um erro."
      );
    }
  };

  if (loadingBuilds) return <Loader />;
  if (isBuildsError) toast.error(buildsError.message);
  if (isCatsError) toast.error(catsError.message);

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
                        {loadingCats ? (
                          <div>Loading...</div>
                        ) : (
                          <select
                            name="category"
                            onChange={handleSelect}
                            value={inputs.category}
                          >
                            {cats.map((item) => (
                              <option key={item.id} value={item.id}>
                                {item.name}
                              </option>
                            ))}
                          </select>
                        )}
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

                            <ConfirmButton
                              className="site-button operation-button text-uppercase red"
                              onConfirm={() => handleDelete(build.id)}
                              confirming={{
                                text: "?",
                                className:
                                  "site-button operation-button text-uppercase orange",
                              }}
                            >
                              <i className="fa fa-close" />{" "}
                            </ConfirmButton>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {builds.total_pages > 1 && (
                  <ul className="pagination m-tb0">
                    <li>
                      <NavLink
                        onClick={prevPage}
                        disabled={isPreviousData || page === 1}
                      >
                        «
                      </NavLink>
                    </li>
                    {pagesArray.map((pg) => (
                      <li key={pg}>
                        <NavLink
                          disabled={pg === builds.page}
                          onClick={() => setPage(pg)}
                        >
                          {pg}
                        </NavLink>
                      </li>
                    ))}
                    <li>
                      <NavLink
                        onClick={nextPage}
                        disabled={isPreviousData || page === builds.total_pages}
                      >
                        »
                      </NavLink>
                    </li>
                  </ul>
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

export default Dashboard;
