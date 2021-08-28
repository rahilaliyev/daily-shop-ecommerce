import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./Register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="register-container container">
        <Formik
          initialValues={{
            lat: "",
            long: "",
            city: "",
            street: "",
            number: "",
            zipcode: "",
            email: "",
            username: "",
            password: "",
            firstname: "",
            lastname: "",
            phone: "",
          }}
          validationSchema={Yup.object({
            username: Yup.string().required("Username can not be empty"),
            password: Yup.string().required("Password can not be empty"),
            email: Yup.string().required("Email can not be empty"),
            firstname: Yup.string().required("First name can not be empty"),
            // lastname: Yup.string().required("Last name can not be empty"),
            phone: Yup.number().required("Please add your phone number"),
          })}
          onSubmit={(values) => {
            axios
              .post("https://fakestoreapi.com/users", {
                email: values.email,
                username: values.username,
                name: {
                  firstname: values.firstname,
                  lastname: values.lastname,
                },
                adress: {
                  city: values.city,
                  street: values.street,
                  number: values.number,
                  zipcode: values.zipcode,
                  geolocation: {
                    lat: values.lat,
                    long: values.long,
                  },
                },
                phone: values.phone,
              })
              .then((res) => console.log(res.data))
              .catch((err) => console.log(err));
          }}
        >
          {({ values, errors, handleChange, touched }) => (
            <Form>
              <span> * -required</span>
              <div className="inputAllcards">
                <div className="input-rows">
                  <div className="input-cards">
                    <h3>Name *</h3>
                    <div className="inputLabel">
                      <label htmlFor="firstname">First name</label>
                      <input
                        type="text"
                        id="firstname"
                        value={values.firstname}
                        onChange={handleChange}
                      />
                      {errors.firstname && touched.firstname ? (
                        <div className="input-errors">{errors.firstname}</div>
                      ) : null}
                    </div>
                    <div className="inputLabel">
                      <label htmlFor="lastname">Last name</label>
                      <input
                        type="text"
                        id="last"
                        value={values.lastname}
                        onChange={handleChange}
                      />
                      {errors.lastname && touched.lastname ? (
                        <div className="input-errors">{errors.lastname}</div>
                      ) : null}
                    </div>
                  </div>

                  <div className="input-cards">
                    <h3>Account information *</h3>
                    <div className="inputLabel">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        value={values.email}
                        onChange={handleChange}
                      />
                      {errors.email && touched.email ? (
                        <div className="input-errors">{errors.email}</div>
                      ) : null}
                    </div>
                    <div className="inputLabel">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        id="password"
                        value={values.password}
                        onChange={handleChange}
                      />
                      {errors.password && touched.password ? (
                        <div className="input-errors">{errors.password}</div>
                      ) : null}
                    </div>
                    <div className="inputLabel">
                      <label htmlFor="username">Username</label>
                      <input
                        type="text"
                        id="username"
                        value={values.username}
                        onChange={handleChange}
                      />
                      {errors.username && touched.username ? (
                        <div className="input-errors">{errors.username}</div>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="input-rows">
                  <div className="input-cards">
                    <h3>Adress</h3>
                    <div className="inputLabel">
                      <label htmlFor="phone">Phone number</label>
                      <input
                        type="tel"
                        id="phone"
                        value={values.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="inputLabel">
                      <label htmlFor="city">City</label>
                      <input
                        type="text"
                        id="city"
                        value={values.city}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="inputLabel">
                      <label htmlFor="street">Street</label>
                      <input
                        type="text"
                        id="street"
                        value={values.street}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="inputLabel">
                      <label htmlFor="number">Number</label>
                      <input
                        type="text"
                        id="number"
                        value={values.number}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="inputLabel">
                      <label htmlFor="zipcode">ZIP code</label>
                      <input
                        type="text"
                        id="zipcode"
                        value={values.zipcode}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="input-cards">
                    <h3>Geolocation</h3>
                    <div className="inputLabel">
                      <label htmlFor="lat">Lat</label>
                      <input
                        type="text"
                        id="lat"
                        value={values.lat}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="inputLabel">
                      <label htmlFor="long">Long</label>
                      <input
                        type="text"
                        id="long"
                        value={values.long}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Register;
