import {ADMIN_LOGIN, ADMIN_LOGOUT} from '../types/index';

const initialAuth = false;

export default function authReducer(state = initialAuth, action){
    switch (action.type) {
        case ADMIN_LOGIN:
            return true;
        
        case ADMIN_LOGOUT: 
            return false;
    
        default:
            return state
    }
}