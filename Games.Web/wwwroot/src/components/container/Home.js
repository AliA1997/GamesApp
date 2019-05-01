import React, { Component } from 'react';
//import your App.css for styling.
import '../../styles/App.css';

export default class Home extends Component {
    render() {
        return (
            <div className='home-div'>
                <h1>Games Sample App</h1>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_m4sG0Flrvl2NErtcfG-aZ0peX6gey7NINW_CwNy7vN0IdA19Cg" style={{height: '400px', width: '400px'}}/>
            </div>
        );
    }
}