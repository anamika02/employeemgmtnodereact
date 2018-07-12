import * as ActionType from '../action/ActionType';
import initialState from './initialState';
import _ from 'lodash';


const selectedCompanyCalcReducer= (state = initialState.selectedCompanyCalcReducer, action) => {
    switch(action.type) {

        case ActionType.GET_EMPLOYEE_RESPONSE: {
            return {
                ...state,
                company: _.assign(action.company)
            };
        }


        default: { return state; }
    }
};


export default selectedCompanyCalcReducer;