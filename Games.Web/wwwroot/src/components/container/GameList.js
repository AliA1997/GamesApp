import React, { Component } from 'react';
///import bindActionCreators to bind your action creators to your dispatch variable and assign it to your actions property
import { bindActionCreators } from 'redux';
//import the connect method that will connect your GameList component to redux.
import { connect } from 'react-redux';
//import your getGames action that will assign the response returned to your list in your initialState.
import { getGames } from '../../redux/reducer';
//import your GameList from rendering each individual game.
import GameItem from '../presentational/GameItem';
//import your PropTypes from prop-types to indicate what props will component can accept.
import PropTypes from 'prop-types';
//import your Games css file
import '../../styles/Games.css';

class GameList extends Component {
    //Now define your constructor which will be where we will initialize our state.
    constructor() {
        super();
        this.state = {
            //THis will contain all of our games 
            list: []
        }
    }
    // //For side effects(ajax calls will be in componentDidMount and componentWillMount)
    // //componentDidMount method that initiates right after the component mounts.
    componentDidMount() {
        fetch(new Request('https://localhost:44383/api/games', {
            method: "GET",
            type: "application/json",
            mode: 'cors'
        }))
        //We will chain .then a way of handling promises synchronously
        .then(res => res.json())
        .then(gamesReturned => {
            //Now set the list of the games in your reducer.
            this.props.actions.getGames(gamesReturned);
        })
        .catch(err => err);
    }
    render() {
        //Destruct your list from your props.
        const { list } = this.props;
        return (
            <div>
                <h1>List of Games</h1>
                {/*If the list has data render the list else return nothing or null */}
                {
                    list.length ? 
                    //Use the spread operator to pass all game properties to your GameItem component.
                    list.map((game, i) => <GameItem key={i} {...game} />)
                    : null
                }
            </div>
        );
    }
}

//Map your redux state to your props of your GameList component.
const mapStateToProps = state => {
    return {
        list: state.list
    };
}

//Map to your dispatchers to your props of your GameList component.
const mapDispatchToProps =  dispatch => {
    //Combine your actions to a new object, and then bind it to your dispatcher.
    const combinedActions = Object.assign({
        getGames
    }, {});
    //Return your actions
    return {
        actions: bindActionCreators(combinedActions, dispatch)
    };
}

//Define the propTypes of your component, or the props you will be using.
GameList.propTypes = {
    list: PropTypes.array.isRequired,
    history: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
}
//Export the component connected to your Router props, and your redux props.
export default connect(mapStateToProps, mapDispatchToProps)(GameList);