import { CHANGE_NAV_STATE } from "../types";

export const change_icon_nav = (page) => ({
    type: CHANGE_NAV_STATE,
    payload: page
});