import { dark } from '@material-ui/core/styles/createPalette';
import React, {component } from 'react';
import {link} from 'react-router-dom';

export default class Navbar extends component {
render(){


    return(
    <nav className = "navbar navbar-light bg-light navbar-expand-lg" >
        <link to ="/" className ="navbar-brand">Laundr</link>
            <div className = "collapse navbar-collapse">
                <ul className = "navbar-nav mr-auto">
                    <li className ="navbar-item">
                    <link to ="/CreateUser" className = "nav-link">createUser</link>
                    </li>
                    <li className = "navbar-item">
                    <link to ="/createOrder" className = "nav-link">createOrder</link>
                    </li>
                    <li className = "navbar-item">
                    <link to ="/user" className = "nav-link">editOrder</link>
                    </li> 
                    <li className = "navbar-item">
                    <link to ="/user" className = "nav-link">editUser</link>
                    </li>                  
                </ul>
            </div>
    </nav>
        );
    }
};