import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [form, setForm] = React.useState({
        username: 'hamza',
        email: '',
        password: ''
    });
    const HandleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:5000/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        }).then( res =>  {
            return res.json()
            navigate('/login')
        })
        .then(data => console.log(data));
    }
   const HandleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    return (
        <StyledWrapper>
            <div className="form-container">
                <p className="title">Register to your account</p>
                <form className="form" onSubmit={HandleSubmit}>
                    <input type="text" className="input" placeholder="username" onChange={HandleChange} name='username' />
                    <input type="email" className="input" placeholder="Email" onChange={HandleChange} name='email' />
                    <input type="password" className="input" placeholder="Password" onChange={HandleChange} name='password' />
                    <button className="form-btn" type='submit'>Register</button>
                </form>
                <Link to="/Login" className="sign-up-label">
                    Don't have an account?<span className="sign-up-link">Login</span>
                </Link>
            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .form-container {
    width: 350px;
    height: 500px;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 20px 30px;
  }

  .title {
    text-align: center;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
          "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    margin: 10px 0 30px 0;
    font-size: 28px;
    font-weight: 800;
  }

  .form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 18px;
    margin-bottom: 15px;
  }

  .input {
    border-radius: 20px;
    border: 1px solid #c0c0c0;
    outline: 0 !important;
    box-sizing: border-box;
    padding: 12px 15px;
  }

  .page-link {
    text-decoration: underline;
    margin: 0;
    text-align: end;
    color: #747474;
    text-decoration-color: #747474;
  }

  .page-link-label {
    cursor: pointer;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
          "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    font-size: 9px;
    font-weight: 700;
  }

  .page-link-label:hover {
    color: #000;
  }

  .form-btn {
    padding: 10px 15px;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
          "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    border-radius: 20px;
    border: 0 !important;
    outline: 0 !important;
    background: import Login from './Auth/Login';
teal;import Register from './Auth/Register';
import { Message } from './../../node_modules/styled-components/node_modules/postcss/lib/result.d';

    color: white;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  .form-btn:active {
    box-shadow: none;
  }

  .sign-up-label {
    margin: 0;
    font-size: 10px;
    color: #747474;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
          "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  }

  .sign-up-link {
    margin-left: 1px;
    font-size: 11px;
    text-decoration: underline;
    text-decoration-color: teal;
    color: teal;
    cursor: pointer;
    font-weight: 800;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
          "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  }

  .buttons-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 20px;
    gap: 15px;
  }`;

export default Register;
