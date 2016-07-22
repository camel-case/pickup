import React, { Component } from 'react';
import CancelIcon from 'material-ui/svg-icons/navigation/close';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import $ from 'jquery';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/index.js'
import RaisedButton from 'material-ui/RaisedButton';


export default class GameCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      animation: this.props.animation
    }
    this.handleCancelClick = this.handleCancelClick.bind(this);
    this.handleJoinClick = this.handleJoinClick.bind(this);
}


  handleCancelClick(){
    this.props.handleCancelClick();
  }

  handleJoinClick(name) {
    this.props.handleCancelClick();
  }

  render() {

    var playerCount = 0;
    var players = [];
    var name = '';
    if(this.props.game.joinedPlayers){
      players = JSON.parse(this.props.game.joinedPlayers).join(',');
      playerCount = JSON.parse(this.props.game.joinedPlayers).length;
    }
    // if(this.props.userData.data){
    //   name = this.props.userData.data.displayName
    // }

    return(
      <div id="GameCard" className={this.props.animation}>
        <button type="button" id="HideGameCardButton" onClick={this.handleCancelClick}>
          <MuiThemeProvider>
            <CancelIcon color={'white'} backgroundColor={'transparent'}/>
          </MuiThemeProvider>
        </button>
         <MuiThemeProvider>
          <RaisedButton onClick={()=>this.handleJoinClick(name)} label="Join Game" id="JoinGame" style={{'left':'50%','transform':'translateX(-50%)','position':'absolute','bottom':'15px'}}/>
        </MuiThemeProvider>
        <h1 id="GameCardTitle">{this.props.game.sport}</h1>
        <p id="GameCardAuthor"><span className="g-card-title">Creator:</span> {this.props.game.created_by}</p>
        <p id="GameCardPlayerCount"><span className="g-card-title">Players:</span> {playerCount} out of {this.props.game.playersNeeded}</p>
        <p id="GameRules"><span className="g-card-title">Rules:</span> {this.props.game.rules}</p>
        <p id="GameLocation"><span className="g-card-title">Location:</span> {this.props.game.address}</p>
      </div>
    )
  }
}
//
// function mapStateToProps(state) {
//   return {
//     userData: state.userAuth,
//   }
// }
//
// export default connect(actions, mapStateToProps)(GameCard)
