import React from "react";

import { Button } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <div className="vh-100 gray-bg ">
        <div
          className="about-section paddingTB60 "
          style={{ textAlign: "left" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-6">
                <div className="about-title clearfix">
                  <h1>
                    About <span>Us</span>
                  </h1>
                  Hi this is Saran Ramalingam, To me, the greatest invention of
                  my lifetime is the laptop computer and the fact that I can be
                  working on a book and be in an airport lounge, in a hotel
                  room, and continue working; I fire up my laptop, and I'm in
                  exactly the same place I was when I left home - that, to me,
                  is a miracle.
                  <h3></h3>
                  <div className="about-icons">
                    <ul>
                      <li>
                        <a href="https://www.facebook.com/">
                          <i
                            id="social-fb"
                            className="fa fa-facebook-square fa-3x social"
                          >
                            <FacebookIcon></FacebookIcon>
                          </i>
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a href="https://plus.google.com/">
                          <i
                            id="social-gp"
                            className="fa fa-google-plus-square fa-3x social"
                          >
                            <GoogleIcon></GoogleIcon>
                          </i>
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a href="https://www.linkedin.com/home">
                          <i
                            id="social-em"
                            className="fa fa-envelope-square fa-3x social"
                          >
                            <LinkedInIcon></LinkedInIcon>
                          </i>
                        </a>{" "}
                      </li>
                      <li>
                        <a href="https://twitter.com/">
                          <i
                            id="social-tw"
                            className="fa fa-twitter-square fa-3x social"
                          ></i>
                          <TwitterIcon></TwitterIcon>
                        </a>{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link to="/login">
          <Button variant="contained">See more Product</Button>
        </Link>
      </div>
    </div>
  );
}
