import React from 'react';
import { Link } from "react-router-dom";
import "../css/navigation.css"

const Navigation = () => {
    return (
    <nav className="navigation">
        <ul className="nav-list">
            <li className="nav-list-elements">
                <Link className="nav-link" to="/store/decks"><span className="nav-link-text">Decks</span></Link>
            </li>
            <li>
                <Link className="nav-link" to="/store/axles"><span className="nav-link-text">Axels</span></Link>
            </li>
        </ul>
    </nav>
    )
    
}

export default Navigation;
