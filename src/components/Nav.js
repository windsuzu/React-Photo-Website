import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <h1>React Photo Website</h1>
            <ul>
                <li>
                    <Link to="/React-Photo-Website/">Home</Link>
                </li>
                <li>
                    <Link to="/React-Photo-Website/about">About</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
