import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = ()=>{
    return(
        <nav className="navbar navbar-light bg-light ">
            <Link to="/" style={{fontSize:'2.0rem'}} className="nav-brand text-dark  font-weight-bold">Student-app</Link>
            <div class="d-flex justify-content-end">
            <ul style={{fontSize:'1.2rem'}} className="mt-2 mb-3 navbar-nav text-right">
                <li className="nav-item" >
                    Venugopal reddy
                </li>
                <li className="nav-item">
                    11812023
                </li>
            </ul>
            <img className="ml-2 mt-2 mb-3 " src="logo192.png" alt="profile pic" height="35px" weight="35px" />
            </div>
        </nav>
    )
}

export default Navbar;