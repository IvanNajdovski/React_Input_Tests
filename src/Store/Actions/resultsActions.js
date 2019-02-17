import * as actionTypes from './actionTypes';

export const addItem = (item) => {
    return{
        type: actionTypes.ADD_ITEM,
        payload: {
            item
        }
    }
};
const removeItem = (id) => {
    return{
        type: actionTypes.REMOVE_ITEM,
        payload: {
            id
        }
    }
};
export const removeItemInit = (id) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(removeItem(id))
        }, 2000)
    }
};