import {ADD_STOPWATCH, GET_STOPWATCHES, UPDATE_STOPWATCH} from "../actions/index";

export default (state = {}, action) => {
    switch (action.type) {
        case ADD_STOPWATCH:
            return [...state, action.payload];

        case GET_STOPWATCHES:
            return action.payload.watches ? action.payload.watches : state;

        case UPDATE_STOPWATCH:
            let array = state;
            array.map((watch) => {
                if(action.payload.id === watch.id){
                    watch = action.payload;
                }
            });

            return array;

        default:
            return state;
    }
}