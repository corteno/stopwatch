import React, {Component} from 'react';
import {connect} from 'react-redux';
import shortid from 'shortid';

import {addStopwatch} from '../actions';
import StopwatchListItem from './StopwatchListItem';

class App extends Component {

    componentWillMount(){

    }

    addStopwatch = () => {
        this.props.addStopwatch({
            name: 'Stopper',
            time: 0
        });
    };

    renderStopWatches = () => {
        if(this.props.watches.length > 0) {
            return this.props.watches.map((watch) => {
                let id = shortid.generate();
                return (
                    <StopwatchListItem
                        key={id}
                        id={id}
                        name={watch.name}
                        time={watch.time}
                    />
                );
            });
        }

    };

    render() {
        return (
            <div className="app-wrapper col">
                <header>
                    <h1 className="app-title">Stopper</h1>
                    <button className="add-button" onClick={() => this.addStopwatch()}>+</button>
                </header>

                <section className="stopwatch-wrapper">
                    <ul className="stopwatch-list col">
                        {this.renderStopWatches()}
                    </ul>
                </section>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {watches: state.watches}
};

export default connect(mapStateToProps, {addStopwatch})(App);
