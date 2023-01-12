import React from "react";
import { Link } from "react-router-dom";

import "../assets/css/DashContent.css";

const DashContent = () => {
  return (
    <div className="dashc">
      <div className="dashc-content">
        {[9, 10, 11, 12].map((item, index) => {
          return (
            <div className="dashc-card" key={item}>
              <Link
                to={`#open-${item}`}
                className="dashc-link"
                preventScrollReset={true}
              >
                Class - {item}
              </Link>
              <div id={`open-${item}`} className="dashc-submenu">
                <Link
                  to={`/dashboard/${item}/biology`}
                  className="dashc-sublink"
                >
                  Biology
                </Link>
                <Link
                  to={`/dashboard/${item}/physics`}
                  className="dashc-sublink"
                >
                  Physics
                </Link>
                <Link
                  to={`/dashboard/${item}/chemistry`}
                  className="dashc-sublink"
                >
                  Chemistry
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DashContent;
