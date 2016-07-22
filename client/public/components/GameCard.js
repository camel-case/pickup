import React, { Component } from 'react';
import CancelIcon from 'material-ui/svg-icons/navigation/close';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import $ from 'jquery';
import RaisedButton from 'material-ui/RaisedButton';


export default class GameCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      animation: this.props.animation
    }
    this.handleCancelClick = this.handleCancelClick.bind(this);
}



  handleCancelClick(){
    console.log('handle cancel click inside game card');
    this.props.handleCancelClick();
  }

  render() {
    var playerCount = 0;
    var players = []
    if(this.props.game.joinedPlayers){
      players = JSON.parse(this.props.game.joinedPlayers).join(',');
      playerCount = JSON.parse(this.props.game.joinedPlayers).length;
    }

    

    return(
      <div id="GameCard" className={this.props.animation}>
        <button type="button" id="HideGameCardButton" onClick={this.handleCancelClick}>
          <MuiThemeProvider>
            <CancelIcon color={'white'} backgroundColor={'transparent'}/>
          </MuiThemeProvider>
        </button>
         <MuiThemeProvider>
          <RaisedButton label="Join Game" id="JoinGame" style={{'left':'50%','transform':'translateX(-50%)','position':'absolute','bottom':'10px'}}/>
        </MuiThemeProvider>
        <h id="GameCardTitle">{this.props.game.sport}</h>
        <h id="GameCardAuthor">Creator: {this.props.game.created_by}</h>
        <h id="GameCardPlayerCount">Players: {playerCount}/{this.props.game.playersNeeded}</h>
        <h id="GameCardPlayers">{players}</h>
        <p id="GameRules">Rules: {this.props.game.rules}</p>
        <p id="GameLocation">Location: {this.props.game.address}</p>
      </div> 
    )
  }
}