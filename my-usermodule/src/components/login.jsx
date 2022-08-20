import React,{useState} from 'react';
import "../App.css";


const Login = () => {

  const [userLogin, setUserLogin] = useState({
    username: "",
    password: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserLogin({ ...userLogin, [name]: value });
  };
  
  return (
    <div className='main'>
    <form className='Login-main'>
    <center><h3>Sign In</h3></center>

    <div className="mb-3">
      <label>Email address</label>
      <input
        type="email"
        className="form-control"
        placeholder="Enter email"
        value={userLogin.username}
        onChange={handleInput}
      />
    </div>

    <div className="mb-3">
      <label>Password</label>
      <input
        type="password"
        className="form-control"
        placeholder="Enter password"
        value={userLogin.password}
        onChange={handleInput}
      />
    </div>

    <div className="mb-3">
      <div className="custom-control custom-checkbox">
        <input
          type="checkbox"
          className="custom-control-input"
          id="customCheck1"
        />
        <label className="custom-control-label" htmlFor="customCheck1">
          Remember me
        </label>
      </div>
    </div>

    <div className="d-grid">
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </div>
    <p className="forgot-password text-right">
      Forgot <a href="#">password?</a>
    </p>
  </form>
  </div>
  )
}

export default Login