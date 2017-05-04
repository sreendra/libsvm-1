import React, {Component} from 'react';
import {updateStyleBreakpoint} from '../actions/index';
import throttle from 'lodash.throttle';
import {connect} from 'react-redux';
import SVC from '../components/SVC';
import Home from '../components/Home';
import SVR from '../components/SVR';
import Navigation from '../components/Navigation';
import {Route, HashRouter as Router} from 'react-router-dom';
import Benchmarks from './Benchmarks';

class App extends Component {
    componentWillMount() {
        const onResize = () => {
            const breakpoint = window.getComputedStyle(document.querySelector('body'), ':before').getPropertyValue('content').replace(/\"/g, '');
            this.props.updateStyleBreakpoint(breakpoint);
        };

        window.addEventListener('resize', throttle(onResize, 150));
        onResize();
    }

    render() {
        return (
            <Router>
                <div className="container">
                    <Navigation />
                    <Route exact path="/benchmarks" component={Benchmarks} />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/SVC" component={SVC} />
                    <Route exact path="/SVR" component={SVR} />
                </div>
            </Router>
        );
    }
}


export default connect(null, {updateStyleBreakpoint})(App);