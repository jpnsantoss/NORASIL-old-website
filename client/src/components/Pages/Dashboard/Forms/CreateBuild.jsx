import React, { useState } from 'react';
import Header from '../../../Common/Header';
import DashHeader from '../../../Common/DashHeader';
import Footer from '../../../Common/Footer';
import Banner from '../../../Elements/Banner';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

var bnrimg = require('../../../../images/banner.jpg');

const CreateBuild = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleChange = (date) => {
    setSelectedDate(date);
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
                        Obra
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        name="username"
                        type="text"
                        required
                        className="form-control"
                        placeholder="Título"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        name="username"
                        type="text"
                        required
                        className="form-control"
                        placeholder="Cliente"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        name="username"
                        type="text"
                        required
                        className="form-control"
                        placeholder="Prazo"
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        name="message"
                        rows={4}
                        className="form-control "
                        placeholder="Descrição"
                        defaultValue={''}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="my-select">Área de Intervenção:</label>
                      <select
                        id="my-select"
                        // value={selectedOption}
                        // onChange={handleOptionChange}
                      >
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="my-select">Data:</label>
                      <DatePicker
                        name="date"
                        selected={selectedDate}
                        onChange={handleChange}
                        dateFormat="dd-MM-yyyy"
                        className="form-control"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="main-image">Main Image:</label>
                      <input
                        name="main-image"
                        type="file"
                        accept="image/*"
                        required
                        className="form-control-file"
                        //onChange={handleMainImageChange}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="additional-images">
                        Additional Images:
                      </label>
                      <input
                        name="additional-images"
                        type="file"
                        accept="image/*"
                        multiple
                        className="form-control-file"
                        //onChange={handleAdditionalImagesChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="text-center">
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
          </div>
        </div>
        {/* SECTION CONTENT END */}
      </div>

      <Footer />
    </>
  );
};

export default CreateBuild;
