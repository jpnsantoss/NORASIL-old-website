import React, { useEffect, useState } from 'react';
import Header from '../../Common/Header';
import DashHeader from '../../Common/DashHeader';
import Footer from '../../Common/Footer';
import Banner from '../../Elements/Banner';
import axios from 'axios';

var bnrimg = require('./../../../images/banner.jpg');

const Areas = () => {
  const [cats, setCats] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/categories`);
        setCats(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (categoryId) => {
    try {
      await axios.delete(`/categories/${categoryId}`);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/categories', { name });
    } catch (err) {
      console.log(err);
    }
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
                          Adicionar{' '}
                        </span>{' '}
                        Área
                      </h2>
                    </div>
                  </div>
                </div>
                {/* TITLE END */}
                <div className="col-md-6 p-l0">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      value={name}
                      placeholder="Nome"
                      onChange={(e) => setName(e.target.value)}
                    />
                    <span className="input-group-btn">
                      <button
                        type="submit"
                        onClick={handleCreate}
                        className="site-button green"
                      >
                        Criar
                      </button>
                    </span>
                  </div>
                </div>
                <div className="section-head m-t150">
                  <div className="mt-separator-outer separator-left">
                    <div className="mt-separator">
                      <h2 className="text-black text-uppercase sep-line-one ">
                        <span className="font-weight-300 text-primary">
                          Lista de{' '}
                        </span>{' '}
                        Áreas
                      </h2>
                    </div>
                  </div>
                </div>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th className="text-center">Id</th>
                      <th>Título</th>
                      <th className="text-center">Operações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cats.map((item) => (
                      <tr key={item.id}>
                        <td className="col-md-1 text-center">{item.id}</td>
                        <td>{item.name}</td>
                        <td className="col-md-2">
                          <div className="botoes">
                            <button
                              className="site-button operation-button text-uppercase red"
                              type="button"
                              onClick={() => handleDelete(item.id)}
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

export default Areas;
