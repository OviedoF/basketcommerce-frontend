import { combineReducers } from "redux";
import authReducer from "./authReducer";
import handleNavReducer from "./handleNavReducer";
import shoppingCartReducer from "./shoppingCartReducer";

const reducer = combineReducers({
    shoppingCart: shoppingCartReducer,
    handleNavActive: handleNavReducer,
    auth: authReducer
});

export default reducer;