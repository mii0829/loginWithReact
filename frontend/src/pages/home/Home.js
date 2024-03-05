import React from "react";
import "./Home.scss";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import loginImg from "../../assets/home.jpg";
import HomeImg from "../../assets/heart.jpg";

import { Link } from "react-router-dom";
import { ShowOnLogin, ShowOnLogout } from "../../components/protect/hiddenLink";


const Home = () => {
  return (
    <div>
      <ShowOnLogout>
      <section className="container hero">
        <div className="hero-text">
          <h2>Login</h2>
          <p>
            please register with name/email/password.
          </p>
          <p>
            After registered to the page, you can get a email from us. Please verify your account by the link in the email. After verifying the account you can login anytme.
          </p>
          <div className="hero-buttons --flex-start">
            <button className="--btn --btn-danger">
              <Link to="/register">Register</Link>
            </button>
            <button className="--btn --btn-primary">
              <Link to="/login">Login</Link>
            </button>
          </div>
        </div>
        <div className="hero-image">
          <img src={loginImg} alt="Auth" />
        </div>
      </section>
      </ShowOnLogout>
      <ShowOnLogin>
      <section className="container hero">
        <div className="home-image">
            <img src={HomeImg} alt="Auth" />
          </div>
      </section>
      </ShowOnLogin>
    </div>
  );
};

export default Home;
