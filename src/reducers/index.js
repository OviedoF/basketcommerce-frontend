import { combineReducers } from "redux";
import handleNavReducer from "./handleNavReducer";
import shoppingCartReducer from "./shoppingCartReducer";

const reducer = combineReducers({
    shoppingCart: shoppingCartReducer,
    handleNavActive: handleNavReducer 
});

export default reducer;