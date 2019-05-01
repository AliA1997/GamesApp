import { createStore, applyMiddleware } from 'redux';
//import your createBrowserHistory which would be where your history would be defined for web.
import { createBrowserHistory } from 'history';
//import your routerMIddleware which would be where your router middleware would be defined.
import { routerMiddleware } from 'connected-react-router';
//import a general reducer
import reducer from './reducer';

//Have your history which would createBrowserHistory invoked
//Export it to set it your ConnectedRouter history prop.
export const history = createBrowserHistory();

//0Assign a variable to a routerMiddleware instance with your createBrowserHistory created.
const reactRouterMiddleware = routerMiddleware(history);

//Assign your store with your reducer, and middleware as an argument.
const store = createStore(reducer, applyMiddleware(reactRouterMiddleware));

//export your store.
export default store;