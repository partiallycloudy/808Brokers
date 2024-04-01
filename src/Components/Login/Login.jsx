import React from "react";
import styles from "./Login.module.css";
import Image from "../../Images/phone.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
const Login = () => {
  const navigate = useNavigate()
  const { loginWithRedirect, user, isLoading } = useAuth0();
  if(isLoading) return <div>Loading</div>
  if(user) {
    navigate('/dashboard')
  }
  return (
    <div className={styles.loginMain}>
      <div className={styles.loginContainer}>
        <div className={styles.logininnerMain}>
          <div className={styles.loginLogoMain}>
            <img src={Image} alt="" className={styles.logoImg} />
          </div>
          <div className={styles.loginMainHeading}>Login</div>
          <div className={styles.loginText}>
            You will be directed to the homepage
          </div>
          {/* <div className={styles.loginInputMian}>
            <input
              type="text"
              name=""
              id=""
              placeholder="Email"
              className={styles.logininput}
            />
            <input
              type="password"
              name=""
              id=""
              placeholder="Password"
              className={styles.logininput}
            />
          </div> */}
          <div className={styles.loginButtonMain}>
            <button className={styles.loginbtn}  onClick={() => loginWithRedirect({
              connection: "google-oauth2"
            })}>Login</button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
