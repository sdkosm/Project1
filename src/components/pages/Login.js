import React, { Component } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { toast } from "react-toastify";
import { Form, Input, Button } from "reactstrap";
import { loginUser } from "../../services/user-service";
import { doLogin } from "../../auth";

const Login = () => {
  const navigate = useNavigate();

  const [loginDetail, setLoginDetail] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event, field) => {
    let actualValue = event.target.value;
    setLoginDetail({
      ...loginDetail,
      [field]: actualValue,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(loginDetail);
    //validation
    if (
      loginDetail.username.trim() == "" ||
      loginDetail.password.trim() == ""
    ) {
      toast.error("Username/Password can not be null !!");
      return;
    }

    //submit the data to server to generate token
    loginUser(loginDetail)
      .then((data) => {
        console.log(data);

        //save the data to localstorage
        doLogin(data, () => {
          console.log("login detail is saved to localstorage");
          //redirect to user dashboard page
          navigate("/Home");
        });

        //yaha dekhana padega ki kidhar route karana h

        toast.success("Login Successfully !!");
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status == 400 || error.response.status == 404) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Something went wrong on Server !!");
        }
      });
  };

  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="card shadow">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6 ">
                  <h4>Login (User/Doctor)</h4>
                  <hr />

                  <div className="formmain">
                    <Form onSubmit={handleFormSubmit}>
                      <div className="form-group">
                        <label className="mb-1">Email</label>
                        <Input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          autoComplete="off"
                          value={loginDetail.username}
                          onChange={(e) => handleChange(e, "username")}
                          placeholder="Your Email"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label className="mb-1">Password</label>
                        <Input
                          type="password"
                          className="form-control"
                          name="password"
                          id="password"
                          autoComplete="off"
                          value={loginDetail.password}
                          onChange={(e) => handleChange(e, "password")}
                          placeholder="Your password "
                          required
                        />
                      </div>

                      <div className="form-group py-3">
                        <Button color="black">Login</Button>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
