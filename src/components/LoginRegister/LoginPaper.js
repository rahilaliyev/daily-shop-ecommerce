import React, { useEffect } from "react";
import "./LoginPaper.scss";
import axios from "axios";
import { useDispatch } from "react-redux";
import { allUser, logInOut } from "../../redux/actions/actions";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const LoginPaper = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/users")
      .then((res) => dispatch(allUser(res.data)))
      .catch((err) => console.log(err));
  }, [dispatch]);
  return (
    <div className="loginPaper">
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={Yup.object({
          username: Yup.string().required("Username can not be empty"),
          password: Yup.string().required("Password can not be empty"),
        })}
        onSubmit={(values) => {
          axios
            .post("https://fakestoreapi.com/auth/login", {
              username: values.username,
              password: values.password,
            })
            .then((res) => dispatch(logInOut(res.data)))
            .catch((err) => console.log(err));
          props.setModalOpenFunc();
        }}
      >
        {({ values, errors, handleChange, touched }) => (
          <Form>
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
              If you don't have a account,
              <Link to="/register" onClick={props.setModalOpenFunc}>
                register here
              </Link>
            </p>
            <button type="submit" className="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginPaper;
