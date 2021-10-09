import React from "react";
import "./mobile.css";

function Mobile({ isOpen, setIsOpen }) {
  return (
    <div className="mobile">
          <div className="close-icon" onClick = {() => setIsOpen(!isOpen)}>
          <i class="fi-rr-cross-circle"></i>
      <div className="mobile-options">
              <div className="mobile-option">
                  <a href="#project">
                      <i class="fi fi-rr-edit-alt option-icon"></i>Projects
                  </a>
              </div>
              <div className="mobile-option">
                  <a href="#skills">
                      <i class="fi fi-rr-laptop option-icon"></i>Skills
                  </a>
              </div>
              <div className="mobile-option">
                  <a href="#work">
                      <i class="fi fi-rr-briefcase option-icon"></i>Work
                  </a>
              </div>
              <div className="mobile-option">
                  <a href="#Contact">
                      <i class="fi fi-rr-headset option-icon"></i>Contact
                  </a>
              </div>
          </div>
          </div>
    </div>
  );
}

export default Mobile;
