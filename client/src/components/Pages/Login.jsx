import React, { useContext, useState } from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import Banner from "../Elements/Banner";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

import bnrimg from "./../../images/banner.jpg";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/admin");
    } catch (err) {
      console.error(err);
      setError(err.response.data);
    }
  };

  return (
    <>
      <Header />
      <div className="page-content">
        <Banner title="Login" pagename="Login" bgimage={bnrimg} />

        <div className="section-full p-tb80 inner-page-padding">
          <div className="container">
            <div className="section-content">
              <div className="row">
                <div className="col-md-6 col-sm-12 col-md-offset-3">
                  <form
                    className="contact-form cons-contact-form"
                    method="post"
                  >
                    <div className="contact-one m-b30">
                      <div className="form-group">
                        <input
                          type="text"
                          required
                          className="form-control"
                          placeholder="Username"
                          name="username"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control"
                          required
                          placeholder="Password"
                          name="password"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="text-center">
                        <button
                          onClick={handleSubmit}
                          className="site-button btn-effect"
                        >
                          submit
                        </button>
                        {err && (
                          <p style={{ color: "red", paddingTop: "10px" }}>
                            {err}
                          </p>
                        )}
                      </div>
                    </div>
                  </form>
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

export default Login;
