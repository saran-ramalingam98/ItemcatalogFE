import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import menu from "../img/menu.png";
import * as yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";
const initialValues = {
  name: "",
  email: "",
  password: "",
  cpassword: "",
};
const validationSchema = yup.object({
  name: yup.string().required("Name is Required"),
  email: yup
    .string()
    .email("Invalid Email Format")
    .required("Email is Required"),
  password: yup.string().required("Password is Required"),
  cpassword: yup
    .string()
    .required("Confirm Password is Required")
    .oneOf([yup.ref("password")], "Passwords does not match"),
});
function Register() {
  const onSubmit = async (value, reset) => {
    try {
      await axios.post("http://localhost:8000/register", {
        name: value.name,
        email: value.email,
        password: value.password,
      });
      reset.resetForm();
      Swal.fire("Good!", "Registered Successfully!", "success");
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Already Registered",
      });
    }
  };
  return (
    <div className="container-fluid">
      <div className="bg-light">
        <header>
          <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
              <p className="my-auto fs-5 head-title">
                <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                  <h1>Item Catalog</h1>
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
            </div>
          </nav>
        </header>
      </div>
      <div className="w-100 d-flex justify-content-center mt-5">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form>
            <h1 className="text-center m-5">Register</h1>
            <div className="form-group mb-2">
              <label htmlFor="name">Name :</label>
              <Field
                type="text"
                name="name"
                className="form-control"
                style={{ width: "20rem" }}
              />
              <span style={{ color: "red" }}>
                <ErrorMessage name="name" />{" "}
              </span>
            </div>
            <div className="form-group mb-2">
              <label htmlFor="email">Email address:</label>
              <Field
                type="email"
                name="email"
                className="form-control"
                style={{ width: "20rem" }}
              />
              <span style={{ color: "red" }}>
                <ErrorMessage name="email" />{" "}
              </span>
            </div>
            <div className="form-group mb-2">
              <label htmlFor="pwd">Password:</label>
              <Field type="password" name="password" className="form-control" />
              <span style={{ color: "red" }}>
                <ErrorMessage name="password" />{" "}
              </span>
            </div>
            <div className="form-group mb-2">
              <label htmlFor="cpwd">Confirm Password:</label>
              <Field
                type="password"
                name="cpassword"
                className="form-control"
              />
              <span style={{ color: "red" }}>
                <ErrorMessage name="cpassword" />{" "}
              </span>
            </div>
            <div className="m-4 text-center">
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </div>
            <p>
              Already have account?
              <Link style={{ marginLeft: 5 }} to="/login">
                Login
              </Link>
            </p>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Register;
