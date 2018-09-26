import { SET_SEARCH_TERM } from "./actions";

const DEFAULT_STATE = {
    searhTerm: ''
}

// this must always return a new state
const setSearchTerm = (state, action) => Object.assign({}, state, { searhTerm: action.payload });

const rootReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case SET_SEARCH_TERM:
            return setSearchTerm(state, action);
        default:
            return state;
    }
};

export default rootReducer;