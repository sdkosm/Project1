import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { signUp } from "../../services/user-service";
import { Form, Input } from "reactstrap";
import { myAxios } from "../../services/helper";

const USignup = () => {
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
    <>
      <div>
        <section className="section">
          <div className="container">
            <div className="card shadow">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6 ">
                    <h4>Join Practo</h4>
                    <label className="mb-1">Are you a Doctor? </label>
                    <Link to="/register">Register Here</Link>

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
                      src="https://img.freepik.com/free-vector/cartoon-character-filling-form-survey-checklist-man-writing-test-signing-business-medical-document-flat-illustration_74855-20483.jpg?w=740&t=st=1659980056~exp=1659980656~hmac=95288ee978ea14c3337ad522edc98dc1c7898e6e432fc6f9c9218a0d1a7729b2"
                      width={500}
                      height={350}
                      alt=""
                    />
                  </div>

                  <div>
                    <p className="small mt-3">
                      By signing up, you are indicating that you have read and
                      agree to the Terms of Use and Privacy Policy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default USignup;
 