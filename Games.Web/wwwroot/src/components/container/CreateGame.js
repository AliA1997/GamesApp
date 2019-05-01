import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { changeCreateGame, gameCreated } from '../../redux/reducer';

class CreateGame extends Component {
    constructor() {
        super();
        //bind all your functions to your CreateGame class.
        this.handleChange = this.handleChange.bind(this);
        this.createGame = this.createGame.bind(this);
    }
    
    handleChange(e, type) {
        const form = Object.assign({}, this.props.form);
        form[type] = e.target.value;
        this.props.actions.changeCreateGame(form);
        return;
    }
    createGame (e) {
        e.preventDefault();
        this.props.form.releaseYear = parseInt(this.props.form.releaseYear);
        const form = Object.assign({}, this.props.form);
        form.id = '08d65b36-eb11-1099-9db1-e92442e94e17';
        fetch(new Request('https://localhost:44383/api/games', {
            method: "POST",
            type: "application/json",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form),
            mode: 'cors'
        }))
        .then(res => {

            this.props.actions.gameCreated(res);
            
            this.props.actions.changeCreateGame({});
            
            this.props.history.push('/games');

            return;
        })
        .catch(error => console.log('error-----------', error));
    }
    render() {
        console.log('this.props-----------', this.props);

        return (
            <form className="form-container" onSubmit={this.createGame}>
                <h1>Create Game</h1>
                <label>Title</label>
                <input type='text' onChange={e => this.handleChange(e, 'title')} placeholder="Title..." value={this.props.form['title'] || ''} />
                <label>Genre</label>
                <input type='text' onChange={e => this.handleChange(e, 'genre')} placeholder="Genre..." value={this.props.form['genre'] || ''} />
                <label>Release Year</label>
                <input type='text' onChange={e => this.handleChange(e, 'releaseYear')} placeholder="Release Year..." value={this.props.form['releaseYear'] || ''} />
                <label>Company</label>
                <input type='text' onChange={e => this.handleChange(e, 'company')} placeholder="Company..." value={this.props.form['company'] || ''}/>
                <button type="submit" className="submit-button">
                    Submit
                </button>
            </form>
        );
    }

}

const mapStateToProps = state => ({
    form: state.createGameForm,
    currentGame: state.currentGame
});


const mapDispatchToProps = dispatch =>  {
    //Create a new object and pass it to your bind action creators to bind your actions to your dispatcher.
    const combinedActions = Object.assign(
        {
            changeCreateGame,
            gameCreated
        },
        {});
    //Return your actions property that will contain the action creators.
    return {
        actions: bindActionCreators(combinedActions, dispatch)
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateGame));