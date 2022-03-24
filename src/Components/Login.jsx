import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import menu from "../img/menu.png";
import * as yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const initialValues = {
  email: "",
  password: "",
};
const validationSchema = yup.object({
  email: yup
    .string()
    .email("Invalid Email Format")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

function Login() {
  const navigate = useNavigate();
  const onSubmit = async (value, reset) => {
    try {
      const response = await axios.post("http://localhost:8000/login", value);
      if (response.data) {
        toast.success("Logged in Successfully");
        await localStorage.setItem("user-token", response.data);
        navigate("/userhome");
      }
    } catch (e) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid Credentials",
      });
    }

    reset.resetForm();
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
            <h1 className="text-center m-5">Login</h1>
            <div className="form-group mb-2">
              <label htmlFor="email">Email address:</label>
              <Field
                type="email"
                className="form-control"
                name="email"
                style={{ width: "20rem" }}
              />
              <span style={{ color: "red" }}>
                <ErrorMessage name="email" />
              </span>
            </div>
            <div className="form-group mb-2">
              <label htmlFor="pwd">Password:</label>
              <Field type="password" className="form-control" name="password" />
              <span style={{ color: "red" }}>
                <ErrorMessage name="password" />
              </span>
            </div>
            <div className="m-4 text-center">
              <button type="submit" className="btn btn-success">
                Login
              </button>
            </div>
            <p>
              Don't have account?
              <Link style={{ marginLeft: 5 }} to="/register">
                Register
              </Link>
            </p>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Login;
