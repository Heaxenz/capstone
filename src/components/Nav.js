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
                to="/characters/page/1"
            > Characters
            </Link>

            <Link
                to="/houses/page/1"
            > Houses
            </Link>

        </div>

    )
}

export default Nav;