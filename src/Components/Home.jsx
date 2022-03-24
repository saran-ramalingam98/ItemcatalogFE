import React from "react";
import { Link } from "react-router-dom";
import About from "./About";
import Stepper from "./Stepper";
function Home() {
  return (
    <>
      <div className="container">
        <span
          style={{
            marginLeft: "1rem",
            fontWeight: "600",
            fontSize: "24px",
          }}
        >
          <br></br>

          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <span style={{ fontSize: "3.5em" }}>ITEM CATALOG</span>
          </Link>
        </span>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="row">
          <div className="col-md-6">
            <About />
          </div>
          <div className="col-md-6">
            <Stepper></Stepper>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
