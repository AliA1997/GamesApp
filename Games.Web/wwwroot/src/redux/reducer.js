//Define your initialState
const initialState = {
    list: [],
    currentGame: {},
    createGameForm: {}
}

//Define the actionType that is getting data.
const ASSIGN_LIST = 'ASSIGN_LIST';
//Define a actionType for changes in the createGame form
const CHANGE_CREATE_GAME_FORM = 'CHANGE_CREATE_GAME_FORM';
//Define a actionType for resetting your createGame form after your game is successfully created.
const GAME_CREATED = 'GAME_CREATED';
//Define a actionType for getting a specific game.
const ASSIGN_CURRENT_GAME = 'ASSIGN_CURRENT_GAME';
//Define a actionType for when we are directed out of the currentGame page.
const RESET_CURRENT_GAME = 'RESET_CURRENT_GAME';

//Define your reducer which would be responsible for changing your initialState.
const reducer = (state=initialState, action) => {
    //Based on the action type manipulate your state.
    switch(action.type) {
        case ASSIGN_LIST:
            //Treat data as immutable, which means return a new object.
            return Object.assign({}, state, {
                list: action.games
            });
        case ASSIGN_CURRENT_GAME:
            //Now assign your currentGame to your currentGame state.
            return Object.assign({}, state, {
                currentGame: action.game
            });
        case RESET_CURRENT_GAME:
            //When your currentGame is directed to different page will reset your currentGame to initialSTate.
            return Object.assign({}, state, {
                currentGame: initialState.currentGame
            });
        case CHANGE_CREATE_GAME_FORM:
            //Now assign your form to your createGameForm initialState.
            return Object.assign({}, state, {
                createGameForm: action.form
            });
        case GAME_CREATED: 
            //Now assign your form to your initialState.
            return Object.assign({}, state, {
                createGameForm: initialState.createGameForm,
                currentGame: action.game
            });
        //By default return the state.
        default:
            return state;
    }
}

//Define your action that will responsible for returning a type 
export const getGames = games => {
    return {
        type: ASSIGN_LIST,
        games
    }
}

//Define an action that will assign your game to your currentGame initialState.
export const getGame = game => {
    return {
        type: ASSIGN_CURRENT_GAME,
        game
    }
}

//Define an action that will reset the currentGame in initialState when directed out of currentGame page.
export const resetGame = () => {
    return {
        type: RESET_CURRENT_GAME
    }
}

//Define your action that will be responsible for handling changes in your createGameForm 
export const changeCreateGame = form => {
    return {
        type: CHANGE_CREATE_GAME_FORM,
        form
    }
}

//Define an action that will be responsible for resetting your createGameForm when game is created.
export const gameCreated = game => {
    return {
        type: GAME_CREATED, 
        game
    }
}

//Now export your reducer.
export default reducer;