import { MdOutlineMail } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { TbPasswordUser } from "react-icons/tb";

import "./form.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function LoginForm() {
  const [action, setAction] = useState("Login");
  return (
    <>
      <div className="form-parent">
        <div className="form flex flex-dir align justify gap  ">
          <div className="form-title flex flex-dir justify align">
            <h2>{action}</h2>
            <div className="underline"></div>
          </div>
          <div className="input flex gap align">
            <div>
              <FaRegUser className="icon" />
            </div>
            <div>
              <input type="text" placeholder="Name" />
            </div>
          </div>
          <div className="input flex gap align">
            <div>
              <MdOutlineMail className="icon" />
            </div>
            <div>
              <input type="email" placeholder="Email" />
            </div>
          </div>
          <div className="input flex gap align">
            <div>
              <TbPasswordUser className="icon" />
            </div>
            <div>
              <input type="password" placeholder="your password" />
            </div>
          </div>
          {action == "Sign Up" ? (
            <div className="hidden-div-signup"></div>
          ) : (
            <div className="lost-password">
              Lost your Password?{" "}
              <Link to={"/forgot-password"}>Click here!</Link>
            </div>
          )}

          <div className="submit-contaner flex justify align gap ">
            <div
              onClick={() => setAction("Sign Up")}
              className={action == "Sign Up" ? "submit new-color " : "submit"}
            >
              Sign Up
            </div>
            <div
              onClick={() => setAction("Login")}
              className={action == "Login" ? "submit new-color " : "submit"}
            >
              Login
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
