import React from 'react';
import "../css/home.css";
import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <Link className="home-link" to="/store/decks">
        <div className="bg-img">
            <p className="disclaimer">Keep pushing!</p>
            <p className="enter">Enter Page</p>
        </div>
        </Link>
    );
}

export default Home;