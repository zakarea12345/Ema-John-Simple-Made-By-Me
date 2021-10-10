import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {
    return (
        <div>
            <div className="register-form">
                <h2>Create Account</h2>
                <form onSubmit="">
                    <input type="email" placeholder="Your Email" />
                    <br />
                    <input type="password" name="" id="" placeholder="Password"/>
                    <br />
                    <input type="password" name="" id="" placeholder="Re-enter Password"/>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already have an account? <Link to="/login">Log in</Link> </p>
                <div>--------or---------</div>
                <button className="btn-regular">
                    Google Sign In
                </button>
            </div>
        </div>
    );
};

export default Register;