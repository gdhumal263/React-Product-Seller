import { CLEAR_CURRENT_USER, SET_CURRENT_USER } from '../types';

// set user details in (user) object and return type and payload.
export const setCurrentUser = (user) => {
    return {
        type: SET_CURRENT_USER,
        payload: user,
    };
};

export const clearCurrentUser = () => {
    return {
        type: CLEAR_CURRENT_USER,
    };
};
