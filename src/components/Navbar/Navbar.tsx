import React from 'react';
import './Navbar.css'
import { BrowserRouter as Router, Route, NavLink, Link } from 'react-router-dom';
import Logoimg from '../../assets/Todo.png'
import { useAuth0 } from "@auth0/auth0-react";
const Navbar: React.FC = () => {
  // const { loginWithRedirect } = useAuth0();
  // const { logout } = useAuth0();
  // const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <>
      <nav>
        <div >
          <img className="logo" src={Logoimg} alt="Logo" />
        </div>
        <ul style={{ display: 'flex' }}>

          <li><Link to="/">Home</Link></li>
          <li className='width' ><Link to="/aboutus">About Us</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>
          <li><Link to="/blogs">Blogs</Link></li>
          <li className='dividerStyles'> | </li>
          <li><Link to="/chart">Chart</Link></li>
          {/* <li><Link to="/logIn">LogIn</Link></li> */}
          {/* {
            isAuthenticated ? (<button className='btn' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
              Log Out
            </button>) : (<button className='btn' onClick={() => loginWithRedirect()}>Log In</button>)
          } */}
          <button className='SignUp'><Link to="/signUp">SignUp</Link></button>

        </ul>
      </nav>
      <div>

      </div>
    </>


  );
};

export default Navbar;