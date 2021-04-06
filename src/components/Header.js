import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
    return (<div style={{backgroundColor: 'blue', height: 50, width: 1800, overflow: 'hidden'}} >  
        <div style={{marginLeft: 600, marginTop: 5}}>
            <Link to="/" className="ui primary button"> React Forms </Link>
            <Link to="/Service" className="ui secondary button"> React Routing </Link>
            <Link to="/About" className="ui primary button"> About </Link>
        </div>
    </div>);
};

export default Header;