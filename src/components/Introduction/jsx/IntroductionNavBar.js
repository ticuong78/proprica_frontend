import { useEffect, useState } from "react";
import Links from "../../nav/jsx/Links";
import { Link } from "react-router-dom";

const IntroductionNavBar = () => {

  return (
    <nav className='nav-bar' >
      <section className="links">
        <Links/>
        <span className="navigation-links" >
          <Link to="/plan" style={{ textDecoration: "none", color: "#f5f4f3" }}>
            Pricing
          </Link>
        </span>
      </section>
      <section className="login-buttons">
        <button className="authenticate sign-in">
          <Link style={{ textDecoration: "none", color: "rgb(25, 25, 25)"}}> 
            Sign in
          </Link>
        </button>
        <button className="authenticate sign-up">
          <Link style={{ textDecoration: "none", color: "rgb(25, 25, 25)"}}>
            Sign up
          </Link>
        </button>
      </section>
    </nav>
  )
}

export default IntroductionNavBar