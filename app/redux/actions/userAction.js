import { FETCH_USER,ADD_USER,REMOVE_USER } from './types';
import { getProducts } from '../../data';

export const fetchUser = () => dispatch => {
	const user = getProducts();
     dispatch({
        type: FETCH_USER,
        payload: user
    })
}

export const addUser = (item) => dispatch => {
    dispatch({
        type: ADD_USER,
        payload: item
    })
}

export const removeUser = () => dispatch => {
    dispatch({
        type: REMOVE_USER        
    })
}