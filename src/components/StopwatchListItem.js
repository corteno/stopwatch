import React, {Component} from 'react';

class StopwatchListItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            time: 0,
            displayTime: '00:00'
        };

        this.interval = null;
    }

    componentDidMount() {
        this.setState({
            name: this.props.name,
            time: this.props.time
        });

    }

    startTimer = () => {
        this.interval = setInterval(() => {
            this.setState({time: parseInt(this.state.time) + 1}, () => {
                this.calculateTime(this.state.time);
            });
        }, 1000)

    };

    stopTimer = () => {
        clearInterval(this.interval);
    };

    calculateTime = () => {
        let minutes = Math.floor(this.state.time / 60);
        let seconds = this.state.time;



        if (seconds <= 9) {
            this.setState({displayTime: `0${minutes}:0${seconds}`});
        } else if (seconds < 60) {
            this.setState({displayTime: `0${minutes}:${seconds}`});

        } else if (this.state.time >= 60 && this.state.time < 600){
            if(seconds % 60 < 10){
                this.setState({displayTime: `0${minutes}:0${seconds % 60}`});
            } else {
                this.setState({displayTime: `0${minutes}:${seconds % 60}`});
            }

        } else if(minutes >= 10){
            if(seconds % 60 < 10){
                this.setState({displayTime: `${minutes}:0${seconds % 60}`});
            } else {
                this.setState({displayTime: `${minutes}:${seconds % 60}`});
            }
        }

    };

    render() {

        return (
            <li className="stopwatch-list-item">
                <div className="stopwatch-title">{this.state.name}</div>
                <div className="stopwatch-timer">{this.state.displayTime}</div>
                <div className="stopwatch-start stopwatch-button"
                     onClick={() => {
                         this.startTimer()
                     }}>
                    Start
                </div>
                <div className="stopwatch-stop stopwatch-button"
                     onClick={() => {
                         this.stopTimer()
                     }}> Stop</div>
                <div className="stopwatch-delete">&#10006;</div>
            </li>
        )
    }


}

export default StopwatchListItem;