import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import './Nav.css'



const Nav = () => {
    
    return (
        <div className="main-nav">
            <Link className='links'
                to="/capstoneofthrones/home"
            > Home
            </Link>
            
            <Link className='links'
                to="/capstoneofthrones/characters/page/1"
            > Characters
            </Link>
           
          

            <Link className='links'
                to="/capstoneofthrones/houses/page/1"
            > Houses
            </Link>

        </div>

    )
}

export default Nav;