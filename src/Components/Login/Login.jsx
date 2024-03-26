import React from "react";
import styles from "./Login.module.css";
import Image from "../../Images/phone.png";
import { Link } from "react-router-dom";
const Login = () => {
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
          <div className={styles.loginInputMian}>
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
          </div>
          <div className={styles.loginButtonMain}>
            <Link to="/dashboard">
            <button className={styles.loginbtn}>Login</button>
            
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
