import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';
import * as employeeAction from '../../action/EmployeeAction';
//import * as authorAction from '../../action/AuthorAction';
import EmployeeForm from './EmployeeForm'; // eslint-disable-line import/no-named-as-default
//import { authorsFormattedForDropdown } from '../../selectors/selectors'; // eslint-disable-line import/no-named-as-default


export class AddOrEditEmployeeContainer extends React.Component {


    constructor() {
        super();
        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }



    componentDidMount() {
        this.props.action.getEmployeeAction(this.props.match.params.id)
            .catch(error => {
                toastr.error(error);
            });
    }



    handleSave(values) {
        const employee = {
            firstName: values.firstName,
            lastName: values.lastName,
            address: values.address,
            company: values.company,
            salary: values.salary
        };

        this.props.action.saveEmployeeAction(employee)
            .then(() => {
                toastr.success('Employee saved');
                this.props.history.push('/employees');
            }).catch(error => {
                toastr.error(error);
            });
    }



    handleCancel(event) {
        event.preventDefault();
        this.props.history.replace('/employees');
    }



    render() {
        const { initialValues } = this.props;
        const heading = initialValues && initialValues.id ? 'Edit' : 'Add';

        return (
            <div className="container">
                <EmployeeForm
                    heading={heading}
                    //authors={this.props.authors}
                    handleSave={this.handleSave}
                    handleCancel={this.handleCancel}
                    initialValues={this.props.initialValues}
                />
            </div>
        );
    }
}



const mapStateToProps = (state, ownProps) => {
    const employeeId = ownProps.match.params.id; //from the path '/employee/:id'

    //alert(employeeId);

    if (employeeId && state.selectedEmployeeReducer.employee && employeeId === state.selectedEmployeeReducer.employee.id) {
        return {
            initialValues: state.selectedEmployeeReducer.employee,
            
        };
    } 
};



const mapDispatchToProps = dispatch => ({
    //action: bindActionCreators({ ...authorAction, ...employeeAction }, dispatch)
    action: bindActionCreators({ ...employeeAction }, dispatch)
});



AddOrEditEmployeeContainer.propTypes = {
    action: PropTypes.object.isRequired,
    history: PropTypes.object,
    //authors: PropTypes.array,
    initialValues: PropTypes.object,
    match: PropTypes.object.isRequired
};



export default connect(mapStateToProps, mapDispatchToProps)(AddOrEditEmployeeContainer);
