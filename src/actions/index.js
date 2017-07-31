import jwt from 'jsonwebtoken';

export const ADD_STOPWATCH = 'add_stopwatch';
export const GET_STOPWATCHES = 'get_stopwatches';
export const SAVE_STOPWATCHES = 'save_stopwatches';
export const UPDATE_STOPWATCH = 'update_stopwatch';

export const addStopwatch = (stopwatch) => {
    if (localStorage.getItem('watches') !== null) {
        addToToken(localStorage.getItem('watches'), stopwatch);
    } else {
        localStorage.setItem('watches', createToken(stopwatch));
    }

    return {
        type: ADD_STOPWATCH,
        payload: stopwatch
    }
};

export const getStopwatches = () => {
    if (localStorage.getItem('watches') !== null) {
        return {
            type: GET_STOPWATCHES,
            payload: decrypt(localStorage.getItem('watches'))
        }
    } else {
        return {
            type: GET_STOPWATCHES,
            payload: []
        }
    }
};

export const updateWatch = (watch) => {
    return {
        type: UPDATE_STOPWATCH,
        payload: watch
    }
};

export const saveStopwatches = (stopwatches) => {
    localStorage.setItem(encrypt(stopwatches));

    return {
        type: SAVE_STOPWATCHES,
        payload: stopwatches
    }
};


const createToken = (watch) => {
    return jwt.sign({watches: [watch]}, 'secret');
};

const addToToken = (token, watch) => {
    let t = decrypt(token);
    t.watches.push(watch);
    localStorage.setItem('watches', encrypt(t));
};

const encrypt = (token) => {
    return jwt.sign(token, 'secret');
};

const decrypt = (token) => {
    return jwt.decode(token);
};