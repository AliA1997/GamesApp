import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getGame , resetGame} from '../../redux/reducer';

class Game extends Component {
    componentDidMount() {
        // Have a fetch call, with chained .then's used to handle asynchronous operations.
        // Pass the props from the url via the this.props from connected router
        fetch(new Request(`https://localhost:44383/api/games/${this.props.match.params.id}`, {
            method: 'GET',
            type: 'application/json',    
            mode: 'cors'
        }))
        //Have your response be converted to json
        .then(res => res.json())
        //Then set your global state currentGame to the gameReturned from the response.
        .then(gameReturned => this.props.actions.getGame(gameReturned))
        //Catch errors, and log into the console.
        .catch(err => console.log("Get Game Error---------", err))
    }

    componentWillUnmount() {
        this.props.actions.resetGame();
    }

    render() {
        //Destruct the game from the props.
        const { game } = this.props;
        return (
            <div>
                <h2>{game.title}</h2>
                <h2>Genre: {game.genre}</h2>
                <h2>Release Year: {game.releaseYear}</h2>
                <h2>Company: {game.company}</h2>
            </div>
        );
    }
}

//Map your getGame action or dispatch to your this.props which would be used to set your currentGame state to the argument passed to action.
const mapDispatchToProps = dispatch => {
    //Create a new object and pass it to your bind action creators to bind your actions to your dispatcher.
    const combinedActions = Object.assign({
        getGame, 
        resetGame
    }, {});
    //Then return your actions.
    return {
        actions: bindActionCreators(combinedActions, dispatch)
    };
}

//Will map the currentGame state to your this.props.game since it is the object returned from the function.
//Will be used to display data from your redux state.
const mapStateToProps = state => {
    return {
        game: state.currentGame
    }
}

//Export your COmponent connect redux actions and state to your Game component.
export default connect(mapStateToProps, mapDispatchToProps)(Game);
