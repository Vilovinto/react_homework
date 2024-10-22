import React from 'react';
import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to={'users'}> users </Link></li>
            </ul>
            <ul>
                <li><Link to={'posts'}> posts </Link></li>
            </ul>
            <ul>
                <li><Link to={'comments'}> comments </Link></li>
            </ul>
        </div>
    );
};

export default Menu;