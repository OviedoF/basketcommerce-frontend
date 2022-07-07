import {ADD_PRODUCT, DELETE_PRODUCT} from '../types/index';

const initialState = [];

export default function shoppingCartReducer(state = initialState, action){
    switch (action.type) {
        case ADD_PRODUCT:
            return [
                ...state, 
                action.payload
            ];
        
        case DELETE_PRODUCT: 
            const arrayFilter = state.filter(el => el._id !== action.payload._id);
            return arrayFilter;

        default: 
            return state;
    }
}