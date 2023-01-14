import React from "react";
import footer_json from "../data/footer.json";

import "../assets/css/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer id="footer">
        {/* socials */}
        <ul>
          <li>{footer_json.data[0].heading}</li>
          {footer_json.data[0].list.map((item, index) => {
            return (
              <li key={index}>
                <a
                  htef={item.url}
                  target={"_blank"}
                  rel={"noreferrer noopener"}
                >
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        {/* products */}
        <ul>
          <li>{footer_json.data[1].heading}</li>
          {footer_json.data[1].list.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  to={item.url}
                  target={"_blank"}
                  rel={"noreferrer noopener"}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
        {/* company */}
        <ul>
          <li>{footer_json.data[2].heading}</li>
          {footer_json.data[2].list.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  to={item.url}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </footer>
    </>
  );
};

export default Footer;
