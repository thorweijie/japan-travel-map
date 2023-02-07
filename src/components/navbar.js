import React from 'react';
import './navbar.css';

export default function Navbar(){
    return (
        <div className="heading">
            <h1>{`This is my map App ${process.env.REACT_APP_MAPTILER_API_KEY}`}</h1>
        </div>
    );
}