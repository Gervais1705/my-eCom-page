import React from "react";
import "./SocialLogin.css";
import facebook from '../../../images/social/Facebook.png';
import google from '../../../images/social/Google.png';
import linkedin from '../../../images/social/Linkedin.png';
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
const SocialLogin = ({handleSignInWithGoogle}) => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  let location = useLocation();
      let from = location.state?.from?.pathname || "/";

      if(user){
        navigate(from, { replace: true });;
      }
  return (
    <div>
      <div>
        <div className="d-flex mt-3 align-items-center justify-content-center mb-1">
          <div className="line-style"></div>
          <div className="ms-1 me-1 fw-bold">or</div>
          <div className="line-style"></div>
        </div>
        <p>Sign in with</p>
        <div className="d-flex justify-content-around">
          <div className="social-btn">
            <img onClick={handleSignInWithGoogle} src={google} alt="" />
          </div>
          <div className="social-btn">
            <img src={facebook} alt="" />
          </div>
          <div className="social-btn">
            <img src={linkedin} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
