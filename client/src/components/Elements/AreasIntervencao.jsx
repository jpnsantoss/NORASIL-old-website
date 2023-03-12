import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { TbBuildingFactory2 } from "react-icons/tb";
import { RiStore2Line } from "react-icons/ri";
import { BsHouseDoor } from "react-icons/bs";
import { FaRegBuilding, FaRegHospital } from "react-icons/fa";
import { MdOutlineOtherHouses } from "react-icons/md";

const cats = [
  {
    count: 1,
    title: "Educação e Saúde",
    slug: "educacao",
    icon: <FaRegHospital />,
  },
  {
    count: 2,
    title: "Comércio e Serviços",
    slug: "comercio",
    icon: <RiStore2Line />,
  },
  {
    count: 3,
    title: "Industrial",
    slug: "industrial",
    icon: <TbBuildingFactory2 />,
  },
  {
    count: 4,
    title: "Escritórios",
    slug: "escritorios",
    icon: <FaRegBuilding />,
  },
  {
    count: 5,
    title: "Habitação",
    slug: "habitacao",
    icon: <BsHouseDoor />,
  },
  {
    count: 6,
    title: "Diversos",
    slug: "diversos",
    icon: <MdOutlineOtherHouses />,
  },
];

import img1 from "./../../images/background/bg-5.png";
import img2 from "./../../images/background/line.png";

const AreasIntervencao = () => {
  useEffect(() => {
    function loadScript(src) {
      return new Promise(function (resolve, reject) {
        var script = document.createElement("script");
        script.src = src;
        script.addEventListener("load", function () {
          resolve();
        });
        script.addEventListener("error", function (e) {
          reject(e);
        });
        document.body.appendChild(script);
        document.body.removeChild(script);
      });
    }
    loadScript("./assets/js/masonary.js");
  }, []);
  return (
    <>
      <div
        className="section-full p-t80 p-b50 bg-white mobile-page-padding"
        style={{ backgroundImage: "url(" + img1 + ")" }}
      >
        <div className="container">
          <div className="section-head">
            <div className="mt-separator-outer separator-center">
              <div className="mt-separator">
                <h2 className="text-uppercase sep-line-one ">
                  <span className="font-weight-300 text-primary">Áreas de</span>{" "}
                  Intervenção
                </h2>
              </div>
            </div>
          </div>
          <div className="section-content">
            <div className="row">
              {cats.map((item, index) => (
                <div key={index} className="col-md-4 col-sm-6">
                  <div className="mt-icon-box-wraper p-a30 center m-b30 box-shadow bg-white">
                    <div
                      className="mt-icon-box-sm inline-icon text-primary  m-b20 radius bg-primary  scale-in-center bg-moving"
                      style={{ backgroundImage: "url(" + img2 + ")" }}
                    >
                      <span className="icon-cell text-secondry">
                        {item.icon}
                      </span>
                    </div>
                    <div className="icon-content">
                      <h4 className="mt-tilte text-uppercase font-weight-600 m-b20">
                        {item.title}
                      </h4>
                      <NavLink
                        to={`/portfolio?cat=${item.slug}`}
                        className="site-button-link"
                        data-hover="Read More"
                      >
                        Ver Mais{" "}
                        <i className="fa fa-angle-right arrow-animation" />
                      </NavLink>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AreasIntervencao;
