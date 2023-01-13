import React from "react";
import footer_json from "../data/footer.json";
import "../assets/css/Footer.css";

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <ul>
          <li>{footer_json.data[0].heading}</li>
          {footer_json.data[0].list.map((item, index) => {
            return <li key={index}>{item.title}</li>;
          })}
        </ul>
        <ul>
          <li>{footer_json.data[1].heading}</li>
          {footer_json.data[1].list.map((item, index) => {
            return <li key={index}>{item.title}</li>;
          })}
        </ul>
        <ul>
          <li>{footer_json.data[2].heading}</li>
          {footer_json.data[2].list.map((item, index) => {
            return <li key={index}>{item.title}</li>;
          })}
        </ul>
      </footer>
    </>
  );
};

export default Footer;
