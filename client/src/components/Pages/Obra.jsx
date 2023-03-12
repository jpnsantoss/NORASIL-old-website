import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import Banner from "../Elements/Banner";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ObrasRecentes2 from "../Elements/ObrasRecentes2";

import thumb1 from "./../../images/blog/default/teste1.jpg";
import thumb2 from "./../../images/blog/default/teste2.jpg";
import thumb3 from "./../../images/blog/default/thum3.jpg";

import bnrimg from "./../../images/banner.jpg";
import { useQuery } from "react-query";
import Loader from "../Elements/Loader";
import axios from "axios";

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

const Obra = () => {
  const location = useLocation();
  const buildId = location.pathname.split("/")[2];

  const fetchBuild = async () => {
    const { data } = await axios.get(`/builds/${buildId}`);
    const dateParts = data.formatted_date.split("/");
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
      ...data,
      day,
      month,
      year,
    };
  };

  const {
    data: build,
    isLoading,
    isError,
    error,
  } = useQuery(["build", buildId], () => fetchBuild());

  if (isLoading) return <Loader />;
  if (isError) toast.error(error.message);

  const options = {
    loop: false,
    autoplay: false,
    autoplayTimeout: 10000,
    margin: 30,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    items: 1,
    dots: true,
    animateOut: "fadeOut",
  };
  return (
    <>
      <Header />
      <div className="page-content ">
        <Banner
          title={build.title}
          pagename="Portfolio"
          bgimage={`http://localhost:8800/uploads/${build.mainImage}`}
        />

        <div className="section-full p-tb100 square_shape1 square_shape3 inner-page-padding">
          <div className="container">
            <div className="blog-post date-style-3 blog-detail text-black">
              <div className="mt-post-media">
                <OwlCarousel
                  className="owl-carousel owl-fade-slider-one owl-btn-vertical-center owl-dots-bottom-right m-b30"
                  {...options}
                >
                  <div className="item">
                    <div className="aon-thum-bx">
                      <img
                        src={`http://localhost:8800/uploads/${build.mainImage}`}
                        alt=""
                      />
                    </div>
                  </div>
                  {build.additional_images.map((item) => (
                    <div className="item" key={item.id}>
                      <div className="aon-thum-bx">
                        <img
                          src={`http://localhost:8800/uploads/${item.image_url}`}
                          alt=""
                        />
                      </div>
                    </div>
                  ))}
                </OwlCarousel>
              </div>
              <div className="mt-post-meta ">
                <ul>
                  <li className="post-date">
                    <strong>{build.day} </strong>{" "}
                    <span>
                      {build.month} 20{build.year}
                    </span>{" "}
                  </li>
                  <li className="post-category">{build.category_name}</li>
                </ul>
              </div>
              <div className="post-description-size">
                <div className="mt-post-title ">
                  <h2 className="post-title font-weight-600">{build.title}</h2>
                </div>
                <div>
                  <ul>
                    <strong>Client</strong>: {build.client}
                  </ul>
                  <ul>
                    <strong>Prazo</strong>: {build.time}
                  </ul>
                </div>
                <div className="mt-post-text">
                  <p>{build.description}</p>
                </div>
              </div>
            </div>
            <ObrasRecentes2 bgcolor="bg-gray" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Obra;
