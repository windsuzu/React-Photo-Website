import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <h1>React Photo Website</h1>
            <ul>
                <li>
                    <Link to="/react-gallery/">Home</Link>
                </li>
                <li>
                    <Link to="/react-gallery/about">About</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
