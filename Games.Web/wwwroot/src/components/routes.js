//import react since your components use React.
import React from 'react';
//import your Home component.
import Home from './container/Home';
//Import your GameList component
import GameList from './container/GameList';
//import your GamePage component for each Game
import GamePage from './container/GamePage';
//import your CreateGame component for creating each Game.
import CreateGame from './container/CreateGame';
//import your Route and Switch component to define your routes.
import { Route, Switch } from 'react-router';

export default (
    //Switch component will go to the first route that matches to it's path. 
    <Switch>
        {/*The exact keyword for your initialRoute since every route will have a slash. */}
        <Route exact path='/' component={Home} />
        <Route exact path='/games' component={GameList} />
        <Route path='/games/:id' component={GamePage} />
        <Route path='/create-game' component={CreateGame} />
    </Switch>
)