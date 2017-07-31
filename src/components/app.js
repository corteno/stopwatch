import React, {Component} from 'react';
import {connect} from 'react-redux';
import shortid from 'shortid';

import {addStopwatch, getStopwatches, saveStopwatches, updateWatch} from '../actions';
import StopwatchListItem from './StopwatchListItem';

class App extends Component {

    componentWillMount() {
        document.title = 'Stopper';
        this.props.getStopwatches();
    }

    addStopwatch = () => {
        this.props.addStopwatch({
            id: shortid.generate(),
            name: 'Stopper',
            time: 0
        });
    };

    renderStopwatches = () => {
        if (this.props.watches.length > 0) {
            return this.props.watches.map((watch) => {
                return (
                    <StopwatchListItem
                        key={shortid.generate()}
                        id={watch.id}
                        name={watch.name}
                        time={watch.time}
                        updateWatch={this.updateWatch}
                    />
                );
            });
        }

    };

    updateWatch = (watch) => {
        this.props.updateWatch(watch);
    };

    saveStopwatches = () => {
        this.updateWatch();
        //console.log('saveStopwatches', this.props.watches);
        // this.props.saveStopwatches(this.props.watches);
    };

    currentDay = () => {
        var days = ['Vasárnap', 'Hétfő', 'Kedd', 'Szerda', 'Csütörtök', 'Péntek', 'Szombat'];
        return days[new Date().getDay()];
    };

    currentMonth = () => {
        var months = ['December', 'Január', 'Február', 'Március', 'Április', 'Június', 'Július', 'Augusztus', 'Szeptember', 'Október', 'November'];

        return months[new Date().getMonth()];
    };

    currentDate = () => {
        return new Date().getDate();
    };

    render() {
        return (
            <div className="app-wrapper col">
                <header>
                    <div className="title-wrapper col">
                        <h1 className="app-title">{this.currentDay()}</h1>
                        <h2 className="app-subtitle">{this.currentMonth() + ' ' + this.currentDate()}</h2>
                    </div>

                    <button className="add-button" onClick={() => this.addStopwatch()}>+</button>
                </header>

                <section className="stopwatch-wrapper">
                    <ul className="stopwatch-list col">
                        {this.renderStopwatches()}
                    </ul>
                </section>
            </div>
        );
    }
}


//This way it doesn't re-render
const mapStateToProps = ({watches}, ownProps) => {
    return {watches: watches}
};

export default connect(mapStateToProps, {addStopwatch, getStopwatches, saveStopwatches, updateWatch})(App);
