import { createStore } from 'redux';

const initialState = {
    name: "",
    address: "",
    city: "",
    state: "",
    zip: 0,
    imageURL: "",
    desiredMortage: 0,
    desiredRent: 0
}

function reducer(state = initialState, action) {
    switch(type) {
        default:
            return state;
    }
}

export default createStore(reducer);