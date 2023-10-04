import React from "react";
import './Header.css';
import AMLogo from "../assets/AMLogo.svg";
import aboutImg from "../assets/about50.png";
import projectsImg from "../assets/projects50.png";
import skillsImg from "../assets/skills50.png";
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <header className="header">
            <Link to="/" className="App-logo">
                <img src={AMLogo} className="App-logo" alt="logo" />
            </Link>
        </header>
    )
}

export default Header;