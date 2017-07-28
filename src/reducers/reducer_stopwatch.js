import {ADD_STOPWATCH} from "../actions/index";

export default (state = {}, action) => {
    switch (action.type) {
        case ADD_STOPWATCH:
            return [...state, action.payload];

        default:
            return state;
    }
}