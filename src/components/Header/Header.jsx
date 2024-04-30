/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link } from "react-router-dom";
import reactLogo from "../../assets/react-spring.svg";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <div className="navbar bg-white ">
        <div className="flex-1">
          <Link className="btn btn-ghost text-xl font-bold font-sans text-black">
            <img src={reactLogo} alt="Brand Logo" className="h-10 w-10"/>
            ROUTIFY
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 font-bold text-black">
            <li>
              <Link to="">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            {isLoggedIn && (
              <li>
                <details>
                  <summary>Profile</summary>
                  <ul className="p-2 bg-base-100 rounded-t-none">
                    <li>
                      <a>Settings</a>
                    </li>
                    <li>
                      <a>Logout</a>
                    </li>
                  </ul>
                </details>
              </li>
            )}
            <li>
              <a>Login</a>
            </li>
            <li>
              <button className="mx-2 btn btn-sm btn-accent text-black ">
                <a>Get Started</a>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
