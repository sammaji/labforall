import React from "react";
import "../assets/css/Contact.css";

export default function Contact() {
  const letter = "username";
  return (
    <div className="contact">
      <div className="form-control">
        <input type="value" />
        <label>
          {[...letter].map((item, index) => {
            return (
              <span key={index}
                style={{
                  transitionDelay: 50 * index,
                }}
              >
                {item}
              </span>
            );
          })}
          {/* <span style={{transitionDelay: 0}}>U</span>
          <span style="transition-delay:50ms">s</span>
          <span style="transition-delay:100ms">e</span>
          <span style="transition-delay:150ms">r</span>
          <span style="transition-delay:200ms">n</span>
          <span style="transition-delay:250ms">a</span>
          <span style="transition-delay:300ms">m</span>
          <span style="transition-delay:350ms">e</span> */}
        </label>
      </div>

      <input />
      <h2>Hello</h2>
    </div>
  );
}
