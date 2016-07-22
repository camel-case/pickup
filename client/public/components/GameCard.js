import React, { Component } from 'react';
import CancelIcon from 'material-ui/svg-icons/navigation/close';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import $ from 'jquery';
import RaisedButton from 'material-ui/RaisedButton';


export default class GameCard extends Component {
  constructor(props) {
    super(props)
}

  handleCancelClick(){
    $("#GameCard").removeClass("SlideDown");
    $("#GameCard").addClass("SlideUp");

  }

  render() {
    //This is the game data
    this.props.game

    
    return(
      <div id="GameCard">
        <button type="button" id="HideGameCardButton" onClick={this.handleCancelClick}>
          <MuiThemeProvider>
            <CancelIcon color={'white'} backgroundColor={'transparent'}/>
          </MuiThemeProvider>
        </button>
         <MuiThemeProvider>
          <RaisedButton label="Join Game" id="JoinGame" style={{'left':'50%','transform':'translateX(-50%)','position':'absolute','bottom':'10px'}}/>
        </MuiThemeProvider>
      </div> 
    )
  }
}