import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png';
import './Header.css'

const Header = () => {
    const {user, logOut} = useAuth()
    return (
        <div className="header">
            {/* this is header logo */}
           <img className="header-logo" src={logo} alt="" />
           {/* menu part  */}
           <nav>
               <Link to="/shop">Shop</Link>
               <Link to="/review">Order Review</Link>
               <Link to="/inventory">Manage Inventory</Link>
               {user.email && <span style={{color:"white"}}>Hello {user.displayName} </span>}
               
               {
                   user.email ?
                   <button onClick={logOut}>Log out</button>
                   :
                   <Link to="/login">Log In</Link>}
           </nav>
        </div>
    );
};

export default Header;