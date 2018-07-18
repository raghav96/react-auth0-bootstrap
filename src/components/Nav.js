import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { login, logout, isLoggedIn } from '../utils/AuthService';
import '../App.css';
import logo from '../images.png'

class Nav extends Component {

    render() {
        return (
            <nav className="navbar navbar-default">
                    {
                        ( isLoggedIn() ) ? <ul className="nav navbar-nav"><li>
                            <Link to="/">Home</Link>
                        </li><li><Link to="/leads">Leads</Link></li></ul> :  <div className="navbar-header">
                            <Link className="navbar-brand" to="/">Chuck Norris Manager</Link>
                        </div>
                    }

                <ul className="nav navbar-nav navbar-right">
                    <li>
                        {
                            (isLoggedIn()) ? ( <button className="btn btn-danger log" onClick={() => logout()}>Log out </button> ) : ( <button className="btn btn-info log" onClick={() => login()}>Log In</button> )
                        }
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Nav;