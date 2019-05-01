import React from 'react';
import { render } from 'react-dom';
//import your Provider from react-redux to connect your app to redux.
import { Provider } from 'react-redux';
//import your store to be used to your store prop of your Provider component.
//import your history to define the history of your Router.
import store, { history } from './redux/store';
//import your ConnectedRouter to connect your routes to redux.
import { Router } from 'react-router';
//import your App component
import App from './components/App';

//Have your nest your router with your redux provider.
render(<Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
       </Provider>, document.getElementById('root'));
