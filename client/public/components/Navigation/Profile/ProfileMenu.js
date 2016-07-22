import React, { Component } from 'react';
import CancelIcon from 'material-ui/svg-icons/navigation/close';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import $ from 'jquery';
import RaisedButton from 'material-ui/RaisedButton';


export default class ProfileMenu extends Component {
  constructor(props) {
    super(props)
}

  handleCancelClick(){
    $("#ProfileMenu").removeClass("SlideIn");
    $("#ProfileMenu").addClass("SlideOut");

  }

  render() {


    
    return(
      <div id="ProfileMenu">
        <button type="button" id="HideProfileButton" onClick={this.handleCancelClick}>
          <MuiThemeProvider>
            <CancelIcon color={'white'} backgroundColor={'transparent'}/>
          </MuiThemeProvider>
        </button>
        <h id="ProfileMenuTitle">Player Card</h>
        <h id="ProfileName">Name: Maximillian Einstein</h>
        <h id="ProfileHomeTown">HomeTown: Santa Monica, CA</h>
        <h id="ProfileBio">Bio:</h>
        <MuiThemeProvider>
          <RaisedButton label="Edit" id="Edit" style={{'left':'30px','position':'absolute','bottom':'10px'}}/>
        </MuiThemeProvider>
         <MuiThemeProvider>
          <RaisedButton label="Log Out" id="LogOut" style={{'right':'30px','position':'absolute','bottom':'10px'}}/>
        </MuiThemeProvider>
      </div> 
    )
  }
}
