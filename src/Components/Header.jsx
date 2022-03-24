import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import menu from "../img/menu.png";
import shopping_cart from "../img/shopping-cart.png";
import { decodeToken } from "react-jwt";
function Header(props) {
  const navigate = useNavigate();
  const { cartVal, handleCartBox } = props;
  const token = localStorage.getItem("user-token");
  const userData = decodeToken(token);

  const handleLogout = () => {
    localStorage.removeItem("user-token");
    navigate("/");
  };
  return (
    <div className="bg-light fixed-top">
      <div className="container">
        <header>
          <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
              <p className="my-auto fs-5 head-title">
                <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                  Item Catalog
                </Link>
              </p>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#nav-con"
              >
                <span>
                  <img className="menu-icon" src={menu} alt="" />
                </span>
              </button>
              <div className="collapse navbar-collapse" id="nav-con">
                <div className="d-flex justify-content-sm-start justify-content-lg-end w-100 ">
                  <div
                    style={{
                      marginLeft: "3rem",
                      marginTop: "0rem",
                      marginRight: "1rem",
                      textAlign: "center",
                    }}
                  >
                    Welcome <strong>{userData.name}</strong>
                  </div>
                  <Link to="/cart">
                    <div
                      onClick={handleCartBox}
                      className="card-pro ms-sm-4  ms-md-4 me-3 px-2 btn btn-outline-dark  fw-bold"
                    >
                      <img src={shopping_cart} alt="" className="card-icon " />
                      Cart
                      <span className="badge bg-dark ms-2">{cartVal}</span>
                    </div>
                  </Link>
                  <div style={{ marginTop: "0.1rem", margin: 5 }}>
                    <button
                      onClick={handleLogout}
                      className="ms-sm-1  ms-md-4 me-3 px-2 btn"
                      style={{ height: "42px", backgroundColor: "grey" }}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
}

export default Header;
