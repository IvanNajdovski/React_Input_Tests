import * as actionTypes from '../Actions/actionTypes';

const initialState = {
    results: []
};

export default (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ADD_ITEM:
            return {...state, results: state.results.concat(action.payload.item)}
        case actionTypes.REMOVE_ITEM:
            const newResults =  state.results.filter((val, index) => index !== action.payload.id);
            return {...state, results: newResults};
        default:
            return state
    }
}