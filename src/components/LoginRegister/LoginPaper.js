import React, { useEffect, useState } from "react";
import "./LoginPaper.scss";
import axios from "axios";
import { useDispatch } from "react-redux";
import { allUser, logInOut } from "../../redux/actions/actions";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import { Spinner } from "react-bootstrap";

const LoginPaper = (props) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/users")
      .then((res) => dispatch(allUser(res.data)))
      .catch((err) => console.log(err));
  }, [dispatch]);
  return (
    <div className="loginPaper">
      {loading ? (
        <div className="spinner">
          <Spinner animation="border" />
        </div>
      ) : (
        <Formik
          initialValues={{ username: "", password: "" }}
          validationSchema={Yup.object({
            username: Yup.string().required("Username can not be empty"),
            password: Yup.string().required("Password can not be empty"),
          })}
          onSubmit={async (values) => {
            try {
              setLoading(true);
              await axios
                .post("https://fakestoreapi.com/auth/login", {
                  username: values.username,
                  password: values.password,
                })
                .then((res) => dispatch(logInOut(res.data)));
              setLoading(false);
              props.setModalOpenFunc();
            } catch (error) {
              setLoading(false);
              setErrorMessage(true);
              console.log(error);
            }
          }}
        >
          {({ values, errors, handleChange, touched }) => (
            <Form>
              {errorMessage && (
                <p className="error-message">
                  User wasn't found or email, password aren't correct
                </p>
              )}
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                className="username-input"
                value={values.username}
                onChange={handleChange}
              />
              {errors.username && touched.username ? (
                <div className="input-errors">{errors.username}</div>
              ) : null}

              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="username-input"
                value={values.password}
                onChange={handleChange}
              />
              {errors.password && touched.password ? (
                <div className="input-errors">{errors.password}</div>
              ) : null}

              <p>
                If you don't have a account,{" "}
                <span>
                  <Link to="/register" onClick={props.setModalOpenFunc}>
                    register here
                  </Link>
                </span>
              </p>
              <button type="submit" className="submit">
                Submit
              </button>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default LoginPaper;
