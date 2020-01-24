const initialState = {
    user: null,
    loading: false
};

export const SET_USER = "SET_USER";
export const LOGOUT_USER = "LOGOUT_USER";

export default function reducer(state = initialState, action) {
    const { type, payload } = action;
    switch(type) {
        case SET_USER:
            return {
                ...state,
                user: payload
            };
        case LOGOUT_USER:
            return {
                ...state,
                user: null
            }
        default:
            return state;
    };
};

export function setUser(user) {
    return {
        type: SET_USER,
        payload: user
    };
};

export function logOutUser() {
    return {
        type: LOGOUT_USER,
        payload: null
    }
}