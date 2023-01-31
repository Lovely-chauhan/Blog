import "./register.css"

export default function register() {
  return (
    <div className="register">
    <span className="registerTitle">Register</span>
    <form className="registerform">
    <label>UserName</label>
    <input type="text" className="registerInput" placeholder="Enter username"></input>
        <label>Email</label>
        <input type="text" className="registerInput" placeholder="Enter Email"></input>
        <label>Password</label>
        <input type="password" className="registerInput" placeholder="Enter password">
        </input>
        <button className="registerButton"> Register</button>
    </form>
    <button className="loginButton">
    LogIn </button>
    
      
    </div>
  )
}
