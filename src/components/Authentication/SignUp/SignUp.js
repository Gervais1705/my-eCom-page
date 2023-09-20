import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Commons/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./SignUp.css";
const SignUp = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [updateProfile, updating] = useUpdateProfile(auth);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  if (loading || updating) {
    return <Loading></Loading>;
  }
  if (user) {
    navigate("/");
  }
  const handleCreateUser = async (event) => {
    event.preventDefault();
    const firstName = event.target.formBasicFirstName.value;
    const lastName = event.target.formBasicLastName.value;
    const email = event.target.formBasicEmail.value;
    const password = event.target.formBasicPassword.value;
    const confirmPassword = event.target.formBasicConfirmPassword.value;
    const userName = firstName + lastName;
    console.log(userName);
    if (password.length < 8) {
      setMessage("Password's length must be 8");
    } else {
      if (password === confirmPassword) {
        if (!user) {
          await createUserWithEmailAndPassword(email, password);
          await updateProfile({ displayName: userName });
        }
      } else {
        setMessage("Passwords didn't match");
      }
    }
  };
  const handleSignInWithGoogle = () => {
    signInWithGoogle();
  };
  return (
    <div>
      <Container>
        <div className="d-flex justify-content-center align-items-center ">
          <div className="signin-style">
            <h2 className="fw-bolder">WELCOME</h2>
            <h2 className="fw-bolder"> PLEASE SIGN IN!</h2>
            <Form>
              <div key={`inline-radio`} className="mb-3">
                <Form.Check
                  inline
                  label="Sign In"
                  name="group1"
                  type="radio"
                  id={`inline-radio-1`}
                  onClick={() => navigate("/signin")}
                />
                <Form.Check
                  inline
                  label="Create Account"
                  name="group1"
                  type="radio"
                  id={`inline-radio-2`}
                  defaultChecked
                  onClick={() => navigate("/signup")}
                />
              </div>
            </Form>
            <div>
              <Form onSubmit={handleCreateUser}>
                <Form.Group
                  className="mb-3 text-start"
                  controlId="formBasicFirstName"
                >
                  <Form.Label>
                    First Name <span className="required-style">*</span>
                  </Form.Label>
                  <Form.Control type="text" placeholder="Enter First Name" required/>
                </Form.Group>
                <Form.Group
                  className="mb-3 text-start"
                  controlId="formBasicLastName"
                >
                  <Form.Label>
                    Last Name <span className="required-style">*</span>
                  </Form.Label>
                  <Form.Control type="text" placeholder="Enter Last Name" required/>
                </Form.Group>
                <Form.Group
                  className="mb-3 text-start"
                  controlId="formBasicEmail"
                >
                  <Form.Label>
                    Email address <span className="required-style">*</span>
                  </Form.Label>
                  <Form.Control type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group
                  className="mb-3 text-start"
                  controlId="formBasicPassword"
                >
                  <Form.Label>
                    Password <span className="required-style">*</span>
                  </Form.Label>
                  <Form.Control type="password" placeholder="Password" required/>
                  <Form.Text className="text-muted">
                    Password Must be 8-10 Charecters
                  </Form.Text>
                </Form.Group>
                {message && (
                  <p className="text-start text-danger mb-0 mt-1">{message}</p>
                )}
                <Form.Group
                  className="mb-3 text-start"
                  controlId="formBasicConfirmPassword"
                >
                  <Form.Label>
                    Password <span className="required-style">*</span>
                  </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    required
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 text-start"
                  controlId="formBasicAddress"
                >
                  <Form.Label>
                    Address <span className="mb-1">*</span>
                  </Form.Label>
                  <Form.Control type="text" placeholder="Enter Your Address" required/>
                </Form.Group>
                <Form.Group
                  className="mb-3 text-start"
                  controlId="formBasicPhone"
                >
                  <Form.Label>
                    Phone <span className="required-style">*</span>
                  </Form.Label>
                  <Form.Control type="text" placeholder="Enter Your Phone" required/>
                </Form.Group>
                {error && (
                  <p className="text-start text-danger mb-0 mt-1">
                    {error.message}
                  </p>
                )}
                
                <button className="signin-btn" type="submit">
                  Sign Up
                </button>
              </Form>
            </div>
            <SocialLogin
              handleSignInWithGoogle={handleSignInWithGoogle}
            ></SocialLogin>
            <div className="d-flex justify-content-evenly align-items-center mt-3">
              <p className="login-footer-para">Privacy Policy and Cookies</p>
              <div className="login-para-div"></div>
              <p className="login-footer-para">Terms of Sale and Us</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SignUp;
