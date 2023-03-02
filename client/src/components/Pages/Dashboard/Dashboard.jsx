import React, { useEffect, useState } from "react";
import Header from "../../Common/Header";
import DashHeader from "../../Common/DashHeader";
import Footer from "../../Common/Footer";
import Banner from "../../Elements/Banner";
import { useMutation, useQuery, useQueryClient } from "react-query";
import axios from "axios";
import moment from "moment";
import { NavLink } from "react-router-dom";

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

  const [file, setFile] = useState(null);

  //BUILDS

  const fetchBuilds = async () => {
    const { data } = await axios.get("/builds");
    return data;
  };

  const { data: builds, isLoading, error } = useQuery("builds", fetchBuilds);

  const createBuild = useMutation(
    (newBuild) => axios.post("/builds", newBuild),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("builds");
      },
    }
  );

  const deleteBuild = useMutation(
    (buildId) => axios.delete(`/builds/${buildId}`),
    {
      onSuccess: () => {
        queryClient.invalidateQUeries("builds");
      },
    }
  );

  //CATEGORIES

  const fetchCategories = async () => {
    const { data } = await axios.get("/categories");
    return data;
  };

  const {
    data: cats,
    isLoading: loadingCats,
    error: catsError,
    isSuccess: catsSuccess,
  } = useQuery("buildcats", fetchCategories);

  useEffect(() => {
    if (catsSuccess && cats.length > 0) {
      setInputs((inputs) => ({ ...inputs, category: cats[0].id }));
    }
  }, [catsSuccess, cats]);

  //MAIN IMAGE

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

  //HANDLERS

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
      console.log(err);
    }
  };

  const handleLoadMore = async (e) => {
    e.preventDefault();
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
                        Obra
                      </h2>
                    </div>
                  </div>
                </div>
                {/* TITLE END */}
                <div className="container">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        name="title"
                        type="text"
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
                        required
                        className="form-control"
                        placeholder="Prazo"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        name="description"
                        rows={4}
                        className="form-control "
                        placeholder="Descrição"
                        defaultValue={""}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="my-select">Área de Intervenção:</label>
                      {loadingCats ? (
                        <div>Loading...</div>
                      ) : catsError ? (
                        <div>Error: {catsError.message}</div>
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

                    <div className="form-group">
                      <label htmlFor="main-image">Main Image:</label>
                      <input
                        name=""
                        type="file"
                        accept="image/*"
                        required
                        onChange={(e) => setFile(e.target.files[0])}
                        className="form-control-file"
                        //onChange={handleMainImageChange}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="additional-images">
                        Additional Images:
                      </label>
                      <input
                        name="additional-images"
                        type="file"
                        accept="image/*"
                        multiple
                        className="form-control-file"
                        //onChange={handleAdditionalImagesChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    onClick={handleCreate}
                    className="site-button outline green text-uppercase"
                  >
                    Criar
                  </button>
                </div>

                {/* TITLE START */}
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
                {/* TITLE END */}
                {/* {isLoading ? (
                  <div>Loading...</div>
                ) : error ? (
                  <div>Error: {error.message}</div>
                ) : ( */}
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
                    {/* {users.map((item) => ( */}
                    <tr>
                      <td>Titulo</td>
                      <td>Cliente</td>
                      <td className="col-md-2 text-center">Data</td>
                      <td className="col-md-2">
                        <div className="botoes">
                          <button
                            className="site-button text-uppercase operation-button  blue m-r5"
                            type="button"
                          >
                            <i className="fa fa-image" />{" "}
                          </button>
                          <button
                            className="site-button operation-button text-uppercase red"
                            type="button"
                            // onClick={() => handleDelete(item.id)}
                            // onClick={() => handleDelete(item.id)}
                          >
                            <i className="fa fa-close" />{" "}
                          </button>
                        </div>
                      </td>
                    </tr>
                    {/* ))} */}
                  </tbody>
                </table>

                <div className="m-t50 text-center">
                  <button
                    onClick={handleLoadMore}
                    className="site-button btn-effect"
                  >
                    Load More
                  </button>
                </div>
                {/* )} */}
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

export default Dashboard;
