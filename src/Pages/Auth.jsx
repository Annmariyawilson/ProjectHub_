import React, { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { loginApi, registerApi } from '../services/allApi';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Auth() {
  const [authStatus, setAuthStatus] = useState(false);
  const [user, setUser] = useState({
    email: "", username: "", password: ""
  });
const nav=useNavigate()
  const changeAuth = () => {
    setAuthStatus(!authStatus);
  };

  const handleRegister = async () => {
    console.log(user);
    const { email, username, password } = user;

    if (!email || !password || !username) { 
      toast.warning("Enter Valid Data!!");
      return;
    }

    try {
      const res = await registerApi(user);
      console.log(res);
      if (res && res.status === 200) {
        toast.success("Registration Successful!!");
        setUser({
          email: "", username: "", password: ""
        });
        changeAuth();
      } else {
        toast.error("Registration failed");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      toast.error("Failed to register. Please try again later.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleLog = async () => {
    const { email, password } = user
    if (!email || !password) {
      toast.warning("enter valid input")
    }
    else {
      const res = await loginApi(user)
      console.log(res);
      if (res.status == 200) {
        toast.success("Login Successful")
        setUser({
          email: "", username: "", password: ""
        });
        sessionStorage.setItem("token",res.data.token)
        sessionStorage.setItem("username",res.data.username)
        nav('/dash')
      }
      else {
        toast.error(res.response.data);
      }
    }
  }

  return (
    <>
      <div className='container-fluid d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
        <div className='w-75 border shadow p-4 row'>
          <div className='col'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlMvWrD_eKNKC0muMoE5OA3Z7051JiF552tw&s" alt="" />
          </div>
          <div className='col'>
            {authStatus ? <h2>User Registration</h2> : <h3>Login</h3>}
            <div className='my-3'>
              <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                <Form.Control
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleInputChange}
                  placeholder="name@example.com"
                />
              </FloatingLabel>
              {authStatus && (
                <FloatingLabel controlId="floatingInputUsr" label="Username" className='mb-3'>
                  <Form.Control
                    type='text'
                    name="username"
                    value={user.username}
                    onChange={handleInputChange}
                    placeholder='Username'
                  />
                </FloatingLabel>
              )}
              <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control
                  type='password'
                  name="password"
                  value={user.password}
                  onChange={handleInputChange}
                  placeholder='Password'
                />
              </FloatingLabel>

              <div className='mt-5 d-flex justify-content-between'>
                {authStatus ? (
                  <button className='btn btn-danger' onClick={handleRegister}>Register</button>
                ) : (
                  <button className='btn btn-primary' onClick={handleLog}>Login</button>
                )}
                <button className='btn btn-link' onClick={changeAuth}>
                  {authStatus ? <>Already a User</> : <>New user?</>}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Auth;
