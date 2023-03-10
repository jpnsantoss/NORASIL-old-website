import React, { useEffect, useState } from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import Banner from "../Elements/Banner";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";
import Loader from "../Elements/Loader";
import { toast } from "react-toastify";

import bnrimg from "./../../images/banner.jpg";

const Portfolio = () => {
  const [category, setCat] = useState(null);

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
    loadScript("./assets/js/masonary.js");
  }, []);

  //FILTERS
  const fetchCategories = async () => {
    const { data } = await axios.get("/categories");
    return data;
  };

  const {
    data: filters,
    isLoading: loadingCats,
    isError: isCatsError,
    error: catsError,
  } = useQuery("filters", fetchCategories);

  //BUILDS

  const fetchBuilds = async (limitParam, categoryParam) => {
    const url = categoryParam
      ? `/builds?limit=${limitParam}&category=${categoryParam}`
      : `/builds?limit=${limitParam}`;
    const response = await axios.get(url);
    return response.data;
  };

  const {
    data: builds,
    isLoading: loadingBuilds,
    isError: isBuildsError,
    error: buildsError,
    isPreviousData,
    refetch,
  } = useQuery(["portfolio", category], () => fetchBuilds(10, category), {
    keepPreviousData: true,
  });

  useEffect(() => {
    console.log(category);
    refetch();
  }, [category]);

  if (loadingCats) return <Loader />;
  if (loadingBuilds) return <Loader />;
  if (isBuildsError) toast.error(buildsError.message);
  if (isCatsError) toast.error(catsError.message);

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
                    to={"#"}
                    onClick={() => setCat(null)}
                  >
                    Geral
                  </NavLink>
                </li>
                {filters.map((item, index) => (
                  <li key={index}>
                    <NavLink
                      data-hover={item.name}
                      onClick={() => setCat(item.id)}
                      to={"#"}
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <div className="container">
                <div className="col-md-6 col-md-offset-3">
                  <div className="input-group">
                    <input
                      name="news-letter"
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
                </div>
              </div>
            </div>
            <div className="portfolio-wrap mfp-gallery work-grid row clearfix">
              {builds.data.map((build, index) => (
                <div
                  key={index}
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
                        to="/obra"
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
            <div className="m-t50 text-center">
              <NavLink to={"#"} className="site-button btn-effect">
                Load More
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Portfolio;
