import React from 'react'
import { Link } from 'react-router-dom'

import './header.css'

const Header = (props) => (
    <header className="App-header">
        <h1 className="App-title">
            <div>{props.name}</div>
        </h1>
        <div className="Summary">
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/veille-technologique">Veille technologique</Link></li>
                    <li><Link to="/competenceE6">Compétences E6</Link></li>
                </ul>
            </nav>
        </div>
    </header>
);
export default Header