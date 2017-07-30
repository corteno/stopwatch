import jwt from 'jsonwebtoken';

export const ADD_STOPWATCH = 'add_stopwatch';

export const addStopwatch = (stopwatch) => {
    localStorage.getItem('watches') === null
        ? console.log(createToken(stopwatch))
        : addToToken(localStorage.getItem('watches'), stopwatch);

    localStorage.setItem('watches', createToken(stopwatch));

    return {
        type: ADD_STOPWATCH,
        payload: stopwatch
    }
};

const createToken = (watch) => {
    return jwt.sign({
        watches: [
            watch
        ]
    }, 'secret');

};

const addToToken = (token, watch) => {
    let t = jwt.decode(token);
    console.log('token', t);

    t.watches.push(watch);
    localStorage.removeItem('watches');
    localStorage.setItem('watches', jwt.sign(t, 'secret'));
    console.log(localStorage.getItem('watches'));
};