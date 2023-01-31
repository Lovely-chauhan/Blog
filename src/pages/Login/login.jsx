import "./login.css"

export default function login() {
  return (
    <div className="login">
    <span className="loginTitle">LogIn</span>
    <form className="loginform">
        <label>Email</label>
        <input type="text" className="loginInput" placeholder="Enter Emial"></input>
        <label>Password</label>
        <input type="password" className="loginInput" placeholder="Enter password">
        </input>
        <button className="loginButton"> LogIn</button>
    </form>
    <button className="loginRegisterButton">
    Register </button>
    
      
    </div>
  )
}
