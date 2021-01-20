import { ADD_USER, REMOVE_USER,FETCH_USER } from '../actions/types';

const initialState = {
    user: [],    
}

export default function(state=initialState, action) {
    switch(action.type){
        case FETCH_USER:
            return {
                ...state,
                user:action.payload
            }
        case ADD_USER:
            return {
                ...state,
                user: [action.payload, ...state.user]                
            }       
        case REMOVE_USER:
            return {
                ...state,
                user: []
            }
        default:
            return state
    }
}