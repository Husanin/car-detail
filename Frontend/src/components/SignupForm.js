import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUpForm = () => {
  const navigate = useNavigate();
  let [inputdata, setInputdata] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputdata;
  const data = (e) => {
    setInputdata({ ...inputdata, [e.target.name]: e.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:8080/userdata", inputdata);
    navigate("/addcardetail");
  };
  return (
    <div>
      <section className="">
        {/* Jumbotron */}
        <div
          className="px-4 py-5 px-md-5 text-center text-lg-start"
          style={{ backgroundColor: "hsl(0, 0%, 96%)" }}
        >
          <div className="container">
            <div className="row gx-lg-5 align-items-center">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <div className="card">
                  <div className="card-body py-5 px-md-5">
                    <form onSubmit={(e) => handleSignUp(e)}>
                      {/* email input */}
                      <div className="form-outline mb-4">
                        <input
                          required
                          type="text"
                          name="email"
                          value={email}
                          onChange={(e) => data(e)}
                          className="form-control"
                        />
                        <label className="form-label" htmlFor="form3Example3">
                          Full name
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          required
                          type="password"
                          name="password"
                          value={password}
                          onChange={(e) => data(e)}
                          className="form-control"
                        />
                        <label className="form-label" htmlFor="form3Example3">
                          Email Address
                        </label>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary btn-block mb-4"
                      >
                        SignUp
                        <Link to="/addcardetail"></Link>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Jumbotron */}
      </section>
    </div>
  );
};

export default SignUpForm;
