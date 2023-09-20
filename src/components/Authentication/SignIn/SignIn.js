import React, { useRef, useState } from "react";
import "./SignIn.css";
import { Container, Form } from "react-bootstrap";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useLocation, useNavigate } from "react-router-dom";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from "../../../firebase.init";
import {toast } from 'react-toastify';
import Loading from "../../Commons/Loading/Loading";

const SignIn = () => {
    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const navigate = useNavigate();
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [message, setMessage] = useState('');
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    let location = useLocation();
      let from = location.state?.from?.pathname || "/";
      if(loading ){
          return <Loading></Loading>
      }
      if(user){
        navigate(from, { replace: true });;
      }
      
    const handleSignIn =async event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await signInWithEmailAndPassword(email, password);
    }

    const handlePasswordReset = async event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        if(email){
            await sendPasswordResetEmail(email);
            toast("Password reset email sent!")
        }
        else{
            setMessage("Enter your email!");
        }

    }
    const handleSignInWithGoogle =()=>{
      signInWithGoogle();
  }
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
                  defaultChecked
                  onClick={()=>navigate('/signin')}
                />
                <Form.Check
                  inline
                  label="Create Account"
                  name="group1"
                  type="radio"
                  id={`inline-radio-2`}
                  
                  onClick={()=>navigate('/signup')}
                />
              </div>
            </Form>
            <div>
              <Form onSubmit={handleSignIn}>
                <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control ref={emailRef}  type="email" placeholder="Enter Email" required/>
                </Form.Group>

                <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control ref={passwordRef}  type="password" placeholder="Password" required/>
                </Form.Group>
                {error && <p className='text-start text-danger'>{error.message}</p> }
                                {message && <p className='text-start text-danger'>{message}</p> }
                <div className="d-flex justify-content-between align-items-center">
                    <div onClick={handlePasswordReset} className='mb-3 forgot-pass'>
                    Forgot Your Password
                    </div>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                </div>
                <button className="signin-btn" type="submit">
                  Sign In
                </button>
              </Form>
            </div>
            <SocialLogin handleSignInWithGoogle={handleSignInWithGoogle}></SocialLogin>
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

export default SignIn;
