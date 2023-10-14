import React from "react";
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <Link
                to="/home"
            > Home
            </Link>

            <Link
                to="/characters/page/:num"
            > Characters
            </Link>

            <Link
                to="/houses"
            > Houses
            </Link>

        </div>

    )
}

export default Nav;