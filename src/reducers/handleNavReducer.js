import { CHANGE_NAV_STATE } from "../types";

const initialState = {
    active: ''
};

export default function handleNavReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_NAV_STATE:
            return { active: action.payload };
        default:
            return state;
    }
}