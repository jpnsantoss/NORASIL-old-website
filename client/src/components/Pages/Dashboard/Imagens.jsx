import { NavLink, useLocation } from "react-router-dom";
import Header from "../../Common/Header";
import Footer from "../../Common/Footer";
import Banner from "../../Elements/Banner";
import DashHeader from "../../Common/DashHeader";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Loader from "../../Elements/Loader";

const Imagens = () => {
  const queryClient = useQueryClient();
  const [files, setFiles] = useState([]);

  const location = useLocation();

  const buildId = location.pathname.split("/")[3];

  const fetchBuild = async () => {
    const { data } = await axios.get(`/builds/${buildId}`);
    return data;
  };

  const {
    data: build,
    isLoading,
    isError,
    error,
  } = useQuery(["build", buildId], () => fetchBuild());

  const upload = async (file) => {
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

  const addImage = useMutation((imgUrl) =>
    axios.post(
      "/images",
      {
        buildId,
        imgUrl,
      },
      { withCredentials: true }
    )
  );

  const deleteImage = useMutation(
    (imageId) => axios.delete(`/images/${imageId}`),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("build");
        toast.success("Imagem Apagada!");
      },
    }
  );

  const handleCreate = async (e) => {
    e.preventDefault();

    for (let i = 0; i < files.length; i++) {
      const imgUrl = await upload(files[i]);
      try {
        await addImage.mutateAsync(imgUrl);
      } catch (err) {
        toast.error(
          err.response?.data?.message || err.message || "Ocorreu um erro."
        );
      }
    }
    queryClient.invalidateQueries("build");
    toast.success("Imagens adicionadas!");
  };

  const handleDelete = async (imageId) => {
    try {
      await deleteImage.mutateAsync(imageId);
    } catch (err) {
      toast.error(
        err.response?.data?.message || err.message || "Ocorreu um erro."
      );
    }
  };

  if (isLoading) return <Loader />;
  if (isError) toast.error(error.message);

  return (
    <>
      <Header />
      <div className="page-content">
        <Banner
          title={build.title}
          pagename="Obras"
          bgimage={`http://localhost:8800/uploads/${build.mainImage}`}
        />
        <DashHeader />

        <div className="section-full p-tb150">
          <div className="container">
            <div className="section-head">
              <div className="mt-separator-outer separator-left">
                <div className="mt-separator">
                  <h2 className="text-black text-uppercase sep-line-one ">
                    <span className="font-weight-300 text-primary">
                      Adicionar{" "}
                    </span>{" "}
                    Imagens
                  </h2>
                </div>
              </div>
            </div>
            <form onSubmit={handleCreate}>
              <div className="container">
                <div className="col-md-6 p-l0">
                  <div className="form-group">
                    <input
                      name="additional-images"
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={(e) => setFiles(Array.from(e.target.files))}
                      className="form-control-file"
                    />
                  </div>
                </div>
              </div>
              <div className="m-tb50 m-l20">
                <button
                  type="submit"
                  className="site-button outline green text-uppercase"
                >
                  Adicionar
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
                    Imagens
                  </h2>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="portfolio-wrap mfp-gallery news-grid clearfix row ">
                {build.additional_images.map((item) => (
                  <div
                    className="masonry-item  col-lg-4 col-md-4 col-sm-6"
                    key={item.id}
                  >
                    <div className="blog-post blog-grid date-style-2">
                      <div className="mt-post-media imagens-dash">
                        <a
                          className="mfp-link"
                          href={`http://localhost:8800/uploads/${item.image_url}`}
                        >
                          <img
                            src={`http://localhost:8800/uploads/${item.image_url}`}
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="mt-post-info">
                        <div className="mt-post-meta ">
                          <ul>
                            <NavLink onClick={() => handleDelete(item.id)}>
                              <li className="post-date">
                                <strong>
                                  <i className="fa fa-close" />
                                </strong>{" "}
                              </li>
                            </NavLink>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Imagens;
