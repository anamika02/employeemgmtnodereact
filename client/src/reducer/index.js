import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import employeesReducer from './employeesReducer';
import selectedEmployeeReducer from './selectedEmployeeReducer';
import selectedCompanyCalcReducer from './selectedCompanyCalcReducer';
//import authorReducer from './authorReducer';
import apiReducer from './apiReducer';

export default combineReducers({
    employeesReducer,
    selectedEmployeeReducer,
    selectedCompanyCalcReducer,
    apiReducer,
    form: formReducer    
});


