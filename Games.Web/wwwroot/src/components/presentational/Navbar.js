import React from 'react';
//import your Navbar css file to define styles for Navbar.
import '../../styles/Navbar.css';

const Navbar = (props) => {
    return (
        <div className="navbar">
            {
                props.elements.map((link, i) => <div key={i} className="link" onClick={() => props.onClick(link.path)}>
                                                    {link.label}
                                                </div>)
            }
        </div>
    );
};

export default Navbar;