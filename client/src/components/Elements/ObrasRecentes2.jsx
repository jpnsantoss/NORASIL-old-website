import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { NavLink } from "react-router-dom";
import Loader from "./Loader";

const ObrasRecentes2 = (props) => {
  const fetchRecentBuilds = async () => {
    const { data } = await axios.get(`/builds?limit=3`);
    const maxDescriptionLength = 120;
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
      const truncatedDescription =
        build.description.length > maxDescriptionLength
          ? build.description.slice(0, maxDescriptionLength) + "..."
          : build.description;
      return {
        ...build,
        day,
        month,
        year,
        description: truncatedDescription,
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
      <div className="section-head m-t100">
        <div className="mt-separator-outer separator-left">
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
              <div className="mt-box blog-post latest-blog-3 date-style-1 bg-white m-b30">
                <div className="mt-post-media mt-img-overlay7">
                  <NavLink to={`/portfolio/${build.id}`}>
                    <img
                      src={`http://localhost:8800/uploads/${build.mainImage}`}
                      alt=""
                    />
                  </NavLink>
                </div>
                <div
                  className={
                    props.bgcolor !== ""
                      ? `mt-post-info p-a30 ${props.bgcolor}`
                      : "mt-post-info p-a30"
                  }
                >
                  <div className="post-overlay-position">
                    <div className="mt-post-meta ">
                      <ul>
                        <li className="post-date">
                          <strong className="text-primary">{build.day}</strong>{" "}
                          <span>
                            {build.month} 20{build.year}
                          </span>
                        </li>
                        <li className="post-category">{build.category_name}</li>
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
                          to="/blog-grid"
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
    </>
  );
};

export default ObrasRecentes2;
