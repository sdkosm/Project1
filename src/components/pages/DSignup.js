import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { toast } from "react-toastify";
import { signUp } from "../../services/user-service";
import { Form, Input } from "reactstrap";

const DSignup = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    error: {},
    isError: false,
  });

  //handle change
  const handleChange = (event, property) => {
    //dynamic setting the values
    setData({ ...data, [property]: event.target.value });
  };


  //submit the form
  const submitForm = (event) => {
    event.preventDefault();

    // if(error.isError){
    //   toast.error("Form data is invalid , correct all details then submit. ");
    //   setError({...error,isError:false})
    //   return;
    // }

    console.log(data);
    //data validate

    //call server api for sending data
    signUp(data)
      .then((resp) => {
        console.log(resp);
        console.log("success log");
        toast.success("Registartion - Done!!");
        setData({
          name: "",
          email: "",
          password: "",
        });
      })
      .catch((error) => {
        console.log(error);
        console.log("Error log");
        //handle errors in proper way
        setError({
          errors: error,
          isError: true,
        });
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
                  <h4>Join 12500+ doctor</h4>
                  <label className="mb-1"> </label>
                  <Link to="/signup">Not a Doctor?</Link>
                  <hr />

                  <div>
                    <Link to="/login">Login</Link>
                  </div>
                  <hr />

                  <div className="formmain">
                    <Form onSubmit={submitForm}>
                      <div className="form-group">
                        <label className="mb-1">Name</label>
                        <Input
                          placeholder="Name"
                          className="form-control"
                          type="text"
                          name="name"
                          id="name"
                          autoComplete="off"
                          onChange={(e) => handleChange(e, "name")}
                          value={data.name}
                          invalid={
                            error.errors?.response?.data?.name ? true : false
                          }
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label className="mb-1">Email</label>
                        <Input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          autoComplete="off"
                          value={data.email}
                          onChange={(e) => handleChange(e, "email")}
                          placeholder="Your Email"
                          invalid={
                            error.errors?.response?.data?.name ? true : false
                          }
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
                          value={data.password}
                          onChange={(e) => handleChange(e, "password")}
                          placeholder="Your password "
                          invalid={
                            error.errors?.response?.data?.contact_detail
                              ? true
                              : false
                          }
                          required
                        />
                      </div>

                      <div className="form-group py-3">
                        <button type="button" className="btn btn-light w-50 ">
                          SignUp
                        </button>
                      </div>
                    </Form>
                  </div>
                </div>

                <div className="col-md-6 border-start">
                  <img
                    src="https://img.freepik.com/premium-vector/healthcare-workers-are-front-lines-public-health-system_1150-50284.jpg?w=740"
                    width={500}
                    height={350}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DSignup;
