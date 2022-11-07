import React, { Component } from 'react';
import { Table } from 'reactstrap';

class R054_ReactstrapTable extends Component{
    render(){
        return(
            // <Table dark bordered>
            // <Table>
                // <Table striped hover>
                <Table borderless size="sm" dark bordered striped hover>
                <thead>
                    <tr>
                        <th>number</th>
                        <td>Book Name</td>
                        <td>Price</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>React 100</td>
                        <td>1000$</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>React 200</td>
                        <td>2000$</td>
                    </tr>
                </tbody>
            </Table>
        )
    }
}

export default R054_ReactstrapTable;