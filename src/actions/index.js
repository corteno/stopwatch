import jwt from 'jsonwebtoken';

export const ADD_STOPWATCH = 'add_stopwatch';

export const addStopwatch = (stopwatch) => {
    const watch = localStorage.setItem('user', createToken(stopwatch));

    return {
        type: ADD_STOPWATCH,
        payload:  stopwatch
    }
};

const createToken = (watch) => {
    if(localStorage.getItem('watches')){

        return jwt.sign({
            watches: [
                watch
            ]
        }, 'secret');

    } else {

        let watches = localStorage.getItem('watches');
        console.log('watches', watches);

    }
    
    /*let token = jwt.sign({
        watches: [...watches, watch]
    })*/
};