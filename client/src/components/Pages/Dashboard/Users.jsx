import React, { useEffect, useState } from 'react';
import Header from '../../Common/Header';
import DashHeader from '../../Common/DashHeader';
import Footer from '../../Common/Footer';
import Banner from '../../Elements/Banner';
import axios from 'axios';

var bnrimg = require('./../../../images/banner.jpg');

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/users`);
        console.log(res.data);
        setUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

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
                          Adicionar{' '}
                        </span>{' '}
                        User
                      </h2>
                    </div>
                  </div>
                </div>
                {/* TITLE END */}
                <div className="container p-l0">
                  <div className="col-md-6 p-l0">
                    <div className="form-group">
                      <input
                        name="username"
                        type="text"
                        required
                        className="form-control"
                        placeholder="Username"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        name="password"
                        type="text"
                        className="form-control"
                        required
                        placeholder="Password"
                      />
                    </div>
                    <div>
                      <button
                        name="submit"
                        type="submit"
                        value="Submit"
                        className="site-button outline green text-uppercase"
                      >
                        criar
                      </button>
                    </div>
                  </div>
                </div>

                {/* TITLE START */}
                <div className="section-head m-t100">
                  <div className="mt-separator-outer separator-left">
                    <div className="mt-separator">
                      <h2 className="text-black text-uppercase sep-line-one ">
                        <span className="font-weight-300 text-primary">
                          Lista de{' '}
                        </span>{' '}
                        Users
                      </h2>
                    </div>
                  </div>
                </div>
                {/* TITLE END */}
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th className="text-center">Id</th>
                      <th>Título</th>
                      <th className="text-center">Operações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((item) => (
                      <tr key={item.id}>
                        <td className="col-md-1 text-center">{item.id}</td>
                        <td>{item.username}</td>
                        <td className="col-md-2">
                          <div className="botoes">
                            <button
                              className="site-button text-uppercase operation-button  blue m-r5"
                              type="button"
                            >
                              <i className="fa fa-pencil" />{' '}
                            </button>
                            <button
                              className="site-button operation-button text-uppercase red"
                              type="button"
                              // onClick={() => handleDelete(item.id)}
                            >
                              <i className="fa fa-close" />{' '}
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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

export default Users;
