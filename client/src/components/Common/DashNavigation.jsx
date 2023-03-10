import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const DashNavigation = (props) => {
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
    loadScript("/assets/js/masonary.js");
  }, []);

  return (
    <>
      <div className="header-nav">
        <ul className="nav navbar-nav">
          <li>
            <NavLink to={"/admin/obras"}>Obras</NavLink>
          </li>
          {/* <li>
            <NavLink to={'/admin/areas'}>Areas de Intervenção</NavLink>
          </li> */}
          <li>
            <NavLink to={"/admin/users"}>Utilizadores</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default DashNavigation;
