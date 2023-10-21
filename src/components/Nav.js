import React from "react";
import { Link } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
    return (
        <div className="main-nav">
            <Link className='links'
                to="/home"
            > Home
            </Link>

            <Link className='links'
                to="/characters/page/1"
            > Characters
            </Link>

            <Link className='links'
                to="/houses/page/1"
            > Houses
            </Link>

        </div>

    )
}

export default Nav;