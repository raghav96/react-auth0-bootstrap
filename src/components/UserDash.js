import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
//import { isLoggedIn } from '../utils/AuthService';
import { getUserLeads } from '../utils/medspace-api';
import { login, logout, isLoggedIn } from '../utils/AuthService';



class UserDash extends Component {

    constructor() {
        super();
        this.state = { leads: [] };
    }

    /*getLeads() {
        getUserLeads().then((leads) => {
            this.setState({ leads });
        });
    }*/

    componentDidMount() {
        //this.getLeads();
    }

    render() {

        //const { leads }  = this.state;

        return (
            <div>
                <Nav />
                <hr/>
                {/* isLoggedIn() ? (leads.map((lead, index) => (
                    <div className="col-sm-6" key={index}>
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h3 className="panel-title"> <span className="btn">#{ lead.id }</span></h3>
                            </div>
                            <div className="panel-body">
                                <p> { lead.name } </p>
                            </div>
                        </div>
                    </div>))) : ''
                */}

                <div className="container">
                    { isLoggedIn() ?
                        <div className="col-sm-12">
                            <div className="jumbotron text-center">
                                <h2>Click to view your leads!</h2>
                                <Link className="btn btn-lg btn-success" to='/leads'> Leads </Link>
                            </div>
                        </div> :
                        <div className="col-sm-12 background-image">
                            <div className="jumbotron text-center login-button">
                                <p>Please click the button to login</p><button className="btn btn-info log" onClick={() => login()}>Log In</button>
                            </div>
                        </div>
                    }
                </div>

                {
                    (isLoggedIn()) ? '' : (<div className="col-sm-12">
                        <div className="jumbotron text-center"><p>Created By Medspace</p></div>
                    </div>)
                }

            </div>
        );
    }
}

export default UserDash;