import React, {useState} from "react";
import './LoginSignup.css'

import user_icon from '../Assets/person.png'
import mobile_icon from '../Assets/phone-68-24.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

const LoginSignup = () => {

    const [action,setAction] = useState("Sign Up");

  return (
    <div className='container'>
    <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
    </div>

        <div className="inputs">
        {action==="Login"?<div></div>:<div className="inputs">
         <div className="input"><img src={user_icon} alt="" />
         <input type="text" placeholder="Name" /></div>
         <div className="input">
            <img src={mobile_icon} alt="" />
            <input type="mobile" placeholder="Mobile No" />
            
        </div>
        <div className="input">
        <select>

       <option value="Gujarat">Gujarat</option>

       <option value="Baroda">Baroda</option>

       <option value="vapi">vapi</option>

     </select>
        </div>
        </div>

        }
        <div className="input">
         <img src={email_icon} alt="" />
         <input type="email" placeholder="Email Id"/>
        </div>
        <div className="input">
         <img src={password_icon} alt="" />
         <input type="password" placeholder="Password"/>
        </div>    
        </div>
        {action==="Sign Up"?<div></div>:<div className="forgot-password">Forgot-Password?<span>Click-Here</span></div>}
        <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>
    </div>
  );
};

export default LoginSignup
