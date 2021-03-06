import React, { PropTypes } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';



const getCaret = direction => {
    if (direction === 'asc') {
        return (
            <span> <i className="fa fa-sort-asc" aria-hidden="true"/></span>
        );
    }

    if (direction === 'desc') {
        return (
            <span> <i className="fa fa-sort-desc" aria-hidden="true"/></span>
        );
    }

    return (
        <span> <i className="fa fa-sort" aria-hidden="true" /></span>
    );
};

const titleFormatter = (cell, row) => {
    
    return `<a href=/calc/${cell} target="_blank">${cell}</a>`;
  };

class EmployeeList extends React.Component {

    constructor(props) {
        super(props);

        this.options = {
            sortIndicator: true,
            noDataText: 'No data'
        };

        this.selectRowProp = {
            mode: 'radio',
            bgColor: '#c1f291',
            onSelect: props.handleRowSelect,
            clickToSelect: true, 
            hideSelectColumn: true            
        };
    }
    
    render() {


        return (
            <BootstrapTable data={this.props.employees}  selectRow={this.selectRowProp}  options={this.options} bordered={false} striped hover condensed>
                <TableHeaderColumn dataField="ID"  isKey hidden>Id</TableHeaderColumn>
                
                <TableHeaderColumn 
                    dataField="firstName"
                    
                    dataSort={true}
                    caretRender={getCaret}
                    filter={{type: 'TextFilter', delay: 0 }}
                    columnTitle
                >
                    First Name
                </TableHeaderColumn>

                <TableHeaderColumn 
                    dataField="lastName"
                    dataSort={true}
                    caretRender={getCaret}
                    filter={{type: 'TextFilter', delay: 0 }}
                    columnTitle
                >
                    Last Name
                </TableHeaderColumn>

                <TableHeaderColumn 
                    dataField="address"
                    dataSort={true}
                    caretRender={getCaret}
                    filter={{type: 'TextFilter', delay: 0 }}
                    columnTitle
                >
                    Address
                </TableHeaderColumn>  

                <TableHeaderColumn 
                    dataField="company" 
                    dataFormat={titleFormatter}

                    dataSort={true}
                    caretRender={getCaret}
                    filter={{type: 'TextFilter', delay: 0 }}
                    columnTitle
                >
                    Company
                </TableHeaderColumn>       
                
                <TableHeaderColumn 
                    dataField="salary"
                    dataSort={true}
                    caretRender={getCaret}
                    filter={{type: 'TextFilter', delay: 0 }}
                    columnTitle
                >
                    Salary
                </TableHeaderColumn>                          
            </BootstrapTable>
        );
    }

}

EmployeeList.propTypes = {
    employees: PropTypes.array.isRequired,
    handleRowSelect: PropTypes.func.isRequired
};


export default EmployeeList;
