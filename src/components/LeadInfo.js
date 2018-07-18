import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import { getLeadInfo } from "../utils/medspace-api";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter, numberFilter } from 'react-bootstrap-table2-filter';

class LeadInfo extends Component {

    constructor() {
        super();
        this.state = {
            info : []
        };
    }

    getInfo() {
        getLeadInfo().then((info)=> {
            this.setState({ info });
        });
    }

    componentDidMount(){
        this.getInfo();
    }

    render() {
        const { info }  = this.state;

        const columns = [{
            dataField: 'id',
            text: 'ID',
            sort: true
        }, {
            dataField: 'name',
            text: 'Name',
            filter: textFilter(),
            sort: true
        },{
            dataField: 'content',
            text: 'Content',
            filter: textFilter(),
            sort: true
        },{
                dataField: 'score',
                text: 'Score',
                filter: numberFilter(),
                sort: true
        }];

        const selectRow = {
            mode: 'checkbox',
            clickToSelect: true,
            style: { backgroundColor: '#c8e6c9' }
        };


        return(
            <div>
                <Nav/>
                <hr/>
                <div className="container col-sm-12">
                    <BootstrapTable keyField='id' data={ info } columns={ columns } selectRow={ selectRow } pagination={ paginationFactory() } filter = { filterFactory() } striped hover condensed/>
                </div>
                <div className="col-sm-12">

                    <div className="jumbotron text-center">
                        <p>Back to Dashboard</p>
                        <Link className="btn btn-lg btn-success" to='/'> Home Page </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default LeadInfo;