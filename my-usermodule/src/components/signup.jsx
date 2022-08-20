import React,{useState} from 'react';
import useHistory from 'use-history';
import '../App.css';

const Signup = () => {
  const history = useHistory();
  const [userRegister, setUserRegister] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserRegister({ ...userRegister, [name]: value });
  };


  const PostData = async (e) => {
     e.preventDefault();

     const { fname , lname , email , password } = userRegister;

    const res = await fetch("/register",{
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body:JSON.stringify({
        fname , lname , email , password
      })

    }); 
    const data = await res.json();
    if(res.status === 201 || !data){
         window.alert("Invalid Registration");
         console.log("Invalid Registration");
    }else{
      window.alert("Registration Succesfull");
      console.log("Registration Succesfull");

      history.push('/login');
    }
   
     
  }


  return ( 
    <div>
    <form className='signup-main' >
   <center><h3>Sign Up</h3></center>

    <div className="mb-3">
      <label>First name</label>
      <input
        type="text"
        className="form-control"
        placeholder="First name"
        value={userRegister.fname}
        onChange={handleInput}
      />
    </div>

    <div className="mb-3">
      <label>Last name</label>
      <input type="text"
        className="form-control"
        placeholder="Last name"
        value={userRegister.lname}
        onChange={handleInput} />
    </div>

    <div className="mb-3">
      <label>Email address</label>
      <input
        type="email"
        className="form-control"
        placeholder="Enter email"
        value={userRegister.email}
        onChange={handleInput}
      />
    </div>

    <div className="mb-3">
      <label>Password</label>
      <input
        type="password"
        className="form-control"
        placeholder="Enter password"
        value={userRegister.password}
        onChange={handleInput}

      />
    </div>

    <div className="d-grid">
      <input name='Sign Up' type="submit" className="btn btn-primary" value = "register" onClick={PostData}/>
       
      
    </div>
    <p className="forgot-password text-right">
      Already registered <a href="/sign-in">sign in?</a>
    </p>
  </form>
  </div>

  )
}

export default Signup