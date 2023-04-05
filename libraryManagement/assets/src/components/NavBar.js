import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const NavigationBar = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navheader">    
        <div className="collapse navbar-collapse" >    
          <ul className="navbar-nav">    
            <li className="nav-item">    
              <Link className="nav-link" to="/">Home</Link>    
            </li>    
            <li className="nav-item">    
              <Link className="nav-link" to="/booklist">All Books</Link>   
            </li>
            {/* <li className="nav-item go-right">    
              <NavLink to={'/Logout'} activeClassName="active">Log Out</NavLink>    
            </li>    */}
          </ul>    
        </div>    
      </nav>
    </div>
  );
}

export default NavigationBar;