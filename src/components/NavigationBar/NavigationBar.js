import React from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.css";

const NavigationBar = () => {
    return (
        <header className="NavigationBar">
          <nav>
            <ul>
              <Link to="/">  
                <li>Home</li>
              </Link>
              <Link to="/diet-form">
                <li>Diet Form</li>
              </Link>
              <Link to="/user-results">
                <li>Results</li>
              </Link>
              <Link to="/log-in">
                <li>Log In</li>
              </Link>
            </ul>
          </nav>
        </header>
    )
}

export default NavigationBar;