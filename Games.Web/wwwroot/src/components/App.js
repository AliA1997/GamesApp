import React, { Component } from 'react';
//import your withRouter to connect your app to routes.
import { withRouter } from 'react-router';
//import your connect method from react-redux to connect to your app to redux.
import { connect } from 'react-redux';
//import your Navbar since it will be existant in every route.
import Navbar from './presentational/Navbar';
//Import your css file from your styles folder for styles for your APp component.
import '../styles/App.css';
//import your routes to have your routes rendered.
import routes from './routes';

const elements = [
    {
        label: 'Home',
        path: '/'
    },
    {
        label: 'Games',
        path: '/games'
    },
    {
        label: 'Create Game',
        path: '/create-game'
    }
];


class App extends Component {
    constructor() {
        super();
        //Bind your goToROute to your APp Component since it is being passed down to your navbar component.
        this.goToRoute = this.goToRoute.bind(this);
    }
    goToRoute(path){
        this.props.history.push(path);
    }
    render() {
        return (
            <div className="container">
                <Navbar elements={elements} onClick={this.goToRoute} />
                {/*Import your routes. */}
                {routes}
            </div>
        );
    }
}

//Export your app with it connected to router and redux via the withROuter, and connect hoc's.
export default withRouter(App);