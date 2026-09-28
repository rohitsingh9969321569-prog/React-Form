import { useState } from "react";
import '../index.css';
const Form = () => {
  const [username,setUsername]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");

    const [errorUsername,setErrorUsername]=useState("");
    const [errorEmail,setErrorEmail]=useState("");
    const [errorPassword,setErrorPassword]=useState("");
    const [errorConfirmPassword,setErrorConfirmPassword]=useState("");

  const validate = (event) => {
    event.preventDefault();

    setErrorUsername(username.trim().length >= 8 ? "" : "Username must be at least 8 characters long.");
    setErrorEmail(/^[^\s@]+@gmail\.com$/i.test(email) ? "" : "Enter a valid Gmail address.");
    setErrorPassword(password.length >= 8 ? "" : "Password must be at least 8 characters long.");
    setErrorConfirmPassword(confirmPassword === password ? "" : "Passwords do not match.");
  };
    
  return ( 
    <div>
        <form className="form" onSubmit={validate} action={"app.com/login"} >
          <div className="form-field">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" value={username} placeholder="Name" onChange={(e)=>setUsername(e.target.value)}/>
            {errorUsername && <p className="form-error">{errorUsername}</p>}
          </div>

          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" value={email} placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
            {errorEmail && <p className="form-error">{errorEmail}</p>}
          </div>

          <div className="form-field">
            <label htmlFor="password">Password</label>
            <input type="text" name="password" id="password" value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
            {errorPassword && <p className="form-error">{errorPassword}</p>}
          </div>

          <div className="form-field">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="text" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} />
            {errorConfirmPassword && <p className="form-error">{errorConfirmPassword}</p>}
          </div>
    
          <button type="submit">LOGIN</button>

        </form>
    </div>
  )
}

export default Form