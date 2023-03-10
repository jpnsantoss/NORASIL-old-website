import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "./Loader";

const ObrasRecentes = () => {
  const fetchRecentBuilds = async () => {
    const { data } = await axios.get(`/builds?limit=3`);
    const formattedBuilds = data.data.map((build) => {
      const dateParts = build.formatted_date.split("/");
      const day = dateParts[0];
      const monthNumber = dateParts[1];
      const year = dateParts[2];
      const monthNames = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro",
      ];
      const month = monthNames[parseInt(monthNumber) - 1];
      return {
        ...build,
        day,
        month,
        year,
      };
    });
    return formattedBuilds;
  };

  const {
    data: builds,
    isLoading,
    isError,
    error,
  } = useQuery(["recentbuilds"], () => fetchRecentBuilds());

  if (isLoading) return <Loader />;
  if (isError) toast.error(error.message);

  return (
    <>
      <div className="section-full mobile-page-padding p-t80 p-b30 bg-white">
        <div className="container">
          <div className="section-head ">
            <div className="mt-separator-outer separator-center">
              <div className="mt-separator">
                <h2 className="text-uppercase sep-line-one ">
                  <span className="font-weight-300 text-primary">Obras</span>{" "}
                  Recentes
                </h2>
              </div>
            </div>
          </div>
          <div className="section-content">
            <div className="row">
              {builds.map((build) => (
                <div className="col-md-4 col-sm-6" key={build.id}>
                  <div className="mt-box blog-post latest-blog-3 date-style-1 bg-gray m-b30 box-shadow">
                    <NavLink to={`/portfolio/${build.id}`}>
                      <div className="mt-post-media mt-img-overlay2">
                        <img
                          src={`http://localhost:8800/uploads/${build.mainImage}`}
                          alt=""
                        />
                      </div>
                    </NavLink>
                    <div className="mt-post-info p-a30">
                      <div className="post-overlay-position">
                        <div className="mt-post-meta ">
                          <ul>
                            <li className="post-date">
                              <strong className="text-primary">
                                {build.day}
                              </strong>{" "}
                              <span>
                                {build.month} {build.year}
                              </span>
                            </li>
                            <li className="post-author">Continental</li>
                          </ul>
                        </div>
                        <div className="mt-post-title ">
                          <h4 className="post-title m-b0">{build.title}</h4>
                        </div>
                        <div className="mt-post-text">
                          <p>{build.description}</p>
                        </div>
                        <div className="readmore-line">
                          <span>
                            <NavLink
                              to={`/portfolio/${build.id}`}
                              className="site-button-link"
                              data-hover="Read More"
                            >
                              Ver Mais{" "}
                              <i className="fa fa-angle-right arrow-animation" />
                            </NavLink>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="hilite-title text-left p-l50 text-uppercase hilite-dark">
          <strong>Novidades</strong>
        </div>
      </div>
    </>
  );
};

export default ObrasRecentes;
