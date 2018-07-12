import * as ActionType from './ActionType';
import EmployeeApi from '../api/EmployeeApi';
import { ApiCallBeginAction, ApiCallErrorAction } from './ApiAction';



export const getEmployeesResponse = employees => ({
    type: ActionType.GET_EMPLOYEES_RESPONSE,
    employees
});



export function getEmployeesAction() {
    
    /*return (dispatch) => {

        dispatch(ApiCallBeginAction());

        return EmployeeApi.getAllEmployees()
            .then(employees => {
                dispatch(getEmployeesResponse(employees));
            }).catch(error => {
                throw error;
            });
    };*/
    return (dispatch) => {

        dispatch(ApiCallBeginAction());
        fetch("/employees")
        .then(res=>res.json())
        .then(employees => {
            console.log(employees);
            dispatch(getEmployeesResponse(employees));
        }).catch(error => {
            throw error;
        });
    };


}


export const addNewEmployeeResponse = () => ({
    type: ActionType.ADD_NEW_EMPLOYEE_RESPONSE
});



export const updateExistingEmployeeResponse = () => ({
    type: ActionType.UPDATE_EXISTING_EMPLOYEE_RESPONSE
});



export function saveEmployeeAction(employeeBeingAddedOrEdited) {
    return function (dispatch) {

        dispatch(ApiCallBeginAction());            
        return fetch('/employees',{
                method: 'POST',
                body: JSON.stringify({
                  employeeBeingAddedOrEdited,
                }),
                headers: {"Content-Type": "application/json"}
        })
        .then(() => {
                if (employeeBeingAddedOrEdited.id) {
                    dispatch(updateExistingEmployeeResponse());
                } else {
                    dispatch(addNewEmployeeResponse());
                }
            }).then(() => {
                dispatch(getEmployeesAction());
            }).catch(error => {
                dispatch(ApiCallErrorAction());
                throw (error);
            });
             
    };
}



export const getEmployeeResponse = employeeFound => ({
    type: ActionType.GET_EMPLOYEE_RESPONSE,
    employee: employeeFound
});



export function getEmployeeAction(employeeId) {
    return (dispatch) => {

        dispatch(ApiCallBeginAction());

        return EmployeeApi.getEmployee(employeeId)
            .then(employee => {
                dispatch(getEmployeeResponse(employee));
            }).catch(error => {
                throw error;
            });
    };
}



export const deleteEmployeeResponse = () => ({
    type: ActionType.DELETE_EMPLOYEE_RESPONSE
});



export function deleteEmployeeAction(employeeId) {


    return (dispatch) => {

        dispatch(ApiCallBeginAction());        
        return fetch('/employees/' + employeeId,{
                method: 'DELETE',
                headers: {"Content-Type": "application/json"}
        })
        .then(() => {
            dispatch(deleteEmployeeResponse());
        }).then(() => {
            dispatch(getEmployeesAction());
        }).catch(error => {
            throw error;
        });
    }
}