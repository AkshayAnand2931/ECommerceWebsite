import React from "react";
import logo from "./logo.png";
import profile from "./profile.png";
import bag from "./bag.png";
import "./Navbar.css";

const Navbar = () => {
  function changeBackground(e) {
    e.target.style.background = "rgba(232, 28, 101, 0.83)";
  }
  function changeBack(e) {
    e.target.style.background = "rgba(241, 229, 229, 1)";
  }

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{ background: "white" }}
      >
        <a className="navbar-brand" href="/home">
          <img src={logo} alt="Apparel" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto item">
            <li className="nav-item">
              <a
                className="nav-link"
                style={{
                  color: "black",
                  paddingRight: "30px",
                  fontWeight: "600",
                }}
                href="/men"
              >
                Men
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                style={{
                  color: "black",
                  paddingRight: "30px",
                  fontWeight: "600",
                }}
                href="/women"
              >
                Women
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                style={{
                  color: "black",
                  paddingRight: "30px",
                  fontWeight: "600",
                }}
                href="/kids"
              >
                Kids
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                style={{
                  color: "black",
                  paddingRight: "30px",
                  fontWeight: "600",
                }}
                href="/shoes"
              >
                Shoes
              </a>
            </li>
            <div
              className="input-group mb-3"
              style={{ paddingLeft: "250px"}}
            >
              <input
                style={{ marginRight: "5px",borderRadius:"5px"}}
                type="text"
                className="form-control"
                placeholder="Search for products"
                aria-label="Search"
                aria-describedby="basic-addon2"
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary"
                  onMouseEnter={changeBackground}
                  onMouseLeave={changeBack}
                  style={{ background: "rgba(241, 229, 229, 1)"}}
                  type="button"
                >
                  Search
                </button>
              </div>
              <a className="navbar-brand" style={{ paddingLeft: "430px"}} href="/profile">
                <img src={profile} width={30} height={25} alt="profile" />
              </a>
              <a className="navbar-brand" href="/bag">
                <img src={bag} width={30} height={25} alt="bag" />
              </a>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
