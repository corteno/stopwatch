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
            id: shortid.generate(),
            name: 'Stopper',
            time: 0
        });
    };

    renderStopwatches = () => {
        if(this.props.watches.length > 0) {
            return this.props.watches.map((watch) => {
                return (
                    <StopwatchListItem
                        key={watch.id}
                        id={watch.id}
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
                        {this.renderStopwatches()}
                    </ul>
                </section>
            </div>
        );
    }
}


//This way it doesn't rerender
const mapStateToProps = ({watches}, ownProps) => {
    return {watches: watches}
};

export default connect(mapStateToProps, {addStopwatch})(App);
