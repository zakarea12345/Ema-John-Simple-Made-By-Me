import React from 'react';
import { Link, useLocation, useHistory} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const {user, signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/shop' ;
    const handleGoogleLogIn = () => {
           signInUsingGoogle()
           .then(result => {
               history.push(redirect_url)
           })
    }
    return (
        <div>
            <div className="login-form">
                <h2>Login</h2>
                <form>
                    <input type="email" name="" id="" placeholder="Your Email"/>
                    <br />
                    <input type="password" name="" id="" placeholder="password" />
                    <br />
                    <input type="submit" value="Submit" />
                 </form>
                 <p>new to ema-john <Link to="/register">Create to account</Link></p>
                 <div>------------or------------</div>
                 <button
                 onClick={handleGoogleLogIn}
                 className="btn-regular">Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;