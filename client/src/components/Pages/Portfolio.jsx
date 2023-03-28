import React, { useEffect, useState } from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import Banner from "../Elements/Banner";
import { NavLink, useLocation } from "react-router-dom";
import axios from "axios";
import { useQuery, useQueryClient } from "react-query";
import Loader from "../Elements/Loader";
import { toast } from "react-toastify";

import bnrimg from "./../../images/banner.jpg";

const Portfolio = () => {
  //Preview Images
  const loadScript = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.addEventListener("load", () => {
        resolve();
      });
      script.addEventListener("error", (e) => {
        reject(e);
      });
      document.body.appendChild(script);
      document.body.removeChild(script);
    });
  };

  useEffect(() => {
    loadScript("/assets/js/masonary.js");
  }, []);

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

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const category = useLocation().search;

  //BUILDS

  const fetchBuilds = async (pageParam = 1, categoryParam, searchParam) => {
    let url = `/builds?page=${pageParam}`;

    if (categoryParam) {
      const categoryQueryParam = categoryParam.replace("?", "&");
      url += categoryQueryParam;
    }

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
  } = useQuery(
    ["portfolio", page, category, search],
    () => fetchBuilds(page, category, search),
    {
      keepPreviousData: true,
    }
  );

  const handleSearch = (e) => {
    e.preventDefault();
    const searchInput = e.target.elements.searchInput;
    setSearch(searchInput.value);
    searchInput.value = "";
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
        <Banner title="Portfólio" pagename="Portfólio" bgimage={bnrimg} />

        <div className="section-full p-tb80 inner-page-padding">
          <div className="container">
            <div className="p-b30 text-center">
              <ul className="filter-navigation inline-navigation link-style  text-uppercase">
                <li className="active">
                  <NavLink
                    data-hover="Geral"
                    to={"/portfolio"}
                    onClick={() => setSearch("")}
                    className={category === "" ? "active-cat" : ""}
                  >
                    Geral
                  </NavLink>
                </li>
                {cats.map((item, index) => {
                  const isActive = `?cat=${item.slug}` === category;
                  return (
                    <li key={index}>
                      <NavLink
                        onClick={() => setSearch("")}
                        data-hover={item.name}
                        to={`/portfolio/?cat=${item.slug}`}
                        className={isActive ? "active-cat" : ""}
                      >
                        {item.name}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
              <div className="container m-t50 p-l0">
                <div className="col-md-6 p-l0">
                  <form onSubmit={handleSearch}>
                    <div className="input-group">
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
              <div className="portfolio-wrap mfp-gallery work-grid row clearfix m-tb50">
                {builds.data.map((build) => (
                  <div
                    key={build.id}
                    className={`masonry-item col-md-4 col-sm-6 m-b30`}
                  >
                    <div className="image-effect-two hover-shadow">
                      <img
                        className="portfolio-image"
                        src={`http://localhost:8800/uploads/${build.mainImage}`}
                        alt=""
                      />
                      <div className="figcaption">
                        <h4 className="mt-title" style={{ fontSize: "24px" }}>
                          {build.title}
                        </h4>
                        <ul className="portfolio-card">
                          <li>{build.category_name}</li>
                          <li>{build.client}</li>
                          <li>Prazo: {build.time}</li>
                        </ul>
                        <NavLink
                          to={`/portfolio/${build.id}`}
                          className="read-more site-button btn-effect"
                        >
                          Ver Mais
                        </NavLink>
                        <a
                          className="mfp-link"
                          href={`http://localhost:8800/uploads/${build.mainImage}`}
                        >
                          <i className="fa fa-arrows-alt" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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

      <Footer />
    </>
  );
};

export default Portfolio;
