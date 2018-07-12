import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import FieldInput from '../common/FieldInput';



export const EmployeeForm = ({ handleSubmit, pristine, reset, submitting, heading, handleSave, handleCancel }) => {
    return (
        <form onSubmit={handleSubmit(handleSave)}>
            <h1>{heading}</h1>

            <Field
                type="text"
                name="firstName"
                label="First Name"
                placeholder="First  name of the employee"
                component={FieldInput}
            />
              <Field
                type="text"
                name="lastName"
                label="Last Name"
                placeholder="Last name of the employee"
                component={FieldInput}
            />       


            <Field
                type="text"
                name="address"
                label="Address"
                placeholder="Address of the employee"
                component={FieldInput}
            />

            <Field
                type="text"
                name="company"
                label="Company"
                placeholder="Name of the company"
                component={FieldInput}
            />

            <Field
                type="text"
                name="salary"
                label="Salary"
                placeholder="Salary of the employee"
                component={FieldInput}
            />
            <div>
                <button type="submit" disabled={submitting} className="btn btn-primary"><i className="fa fa-paper-plane-o" aria-hidden="true" /> Submit</button>

                {heading === 'Add' && <button type="button" disabled={pristine || submitting} onClick={reset} className="btn btn-default btn-space">Clear Values</button>}

                <button type="button" className="btn btn-default btn-space" onClick={handleCancel}>Cancel</button>
            </div>
        </form>
    );
};




const validate = values => {
    const errors = {};

    if (!values.firstName) {
        errors.firstName = 'Required';
    }

    if (!values.lastName) {
        errors.lastName = 'Required';
    }

    if (!values.address) {
        errors.address = 'Required';
    }

    if (!values.company){
        errors.company = 'Required';
    }

    if (!values.salary){
        errors.salary = 'Required';
    }

    return errors;
};



EmployeeForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    reset: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
    heading: PropTypes.string.isRequired,
    handleSave: PropTypes.func.isRequired,
    handleCancel: PropTypes.func.isRequired
};



export default reduxForm({
    form: 'EmployeeForm',
    validate
})(EmployeeForm);
