import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <div>
        <ul>
            <li>
        <Link to="/average">Average</Link>
            </li>
            <li>
        <Link to ="/counter">Counter</Link>
            </li>
            <li>
        <Link to ="/lists">List</Link>
            </li>
        </ul>
        </div>
    )
}

export default Landing;