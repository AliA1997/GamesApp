import React from 'react';
//import your connect from redux.
import { connect } from 'react-redux';
//import withRouter to use history to redirect a user to the gamepage component.
import { withRouter } from 'react-router';
//import your Games css file for defining styles for your GameItem.
import '../../styles/Games.css';


//Have your game item render a h1 tag with the title of your game.
//With it's genre, releaseYear, company, and id.
//Now destruct history from your props to redirect each gameItem to that corresponding gamepage.
const GameItem = ({id, title, genre, releaseYear, company, history}) => {
    return (
        <div className='game-item' key={id} onClick={() => history.push(`games/${id}`)}>
            <h1>Title: {title}</h1>
            <h3>Genre: {genre}</h3>
            <h3>Release Year: {releaseYear}</h3>
            <h3>Company: {company}</h3>
            <p>Id: {id}</p>
        </div>
    );
};



export default withRouter(GameItem);