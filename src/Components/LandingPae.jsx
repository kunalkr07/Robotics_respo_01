import React, { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars ,faTimes} from '@fortawesome/free-solid-svg-icons';
import "./LandingPage.scss";

export default function LandingPae() {
  const [open, setOpen] = useState(false);

  const change = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="landing-container">
        <header>
          <BrowserRouter>
            <div className="landingPage-logo">
              <Link to="/">
                <h2>Brorobo</h2>
              </Link>
            </div>
            <ul
              style={{ background: "none", border: "none" }}
              className={`list  ${open ? "active" :  <FontAwesomeIcon icon={faTimes} size="1x" />}`}
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
              <li>
                <Link to="/">Login</Link>
              </li>
            </ul>
            <div className={`icon`} onClick={change}>
            <FontAwesomeIcon icon={open ? faTimes : faBars} size="1x" />
            </div>
          </BrowserRouter>
        </header>

        {/* text-container starts here */}

        <div className="form-container-box">
          <div className="form-container">
            <p className="form-text1">Revolutionize Robotics with</p>

            <h1 className="form-head">Innovative Robotic Solutions</h1>

            <p className="form-text2">
              Experience cutting-edge industrial automation with our expertise
              in AI and robotics
              <br /> delivering efficient systems that redefine manufacturing
              processes.
            </p>

            <button className="form-btn">
              <BrowserRouter>
                <Link to="/">Explore Solution</Link>
              </BrowserRouter>
            </button>
          </div>
        </div>
        {/* text-container ends here */}
      </div>
    </>
  );
}
{
  /* <i className={`barIcon fa-solid fa-bars  ${open ? 'active' : ''}`} */
}
