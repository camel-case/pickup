import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar/Avatar';
import ProfileMenu from './ProfileMenu';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ListItem from 'material-ui/List/ListItem';
import List from 'material-ui/List/List';
import $ from 'jquery';

export default class ProfileAvatar extends Component {
  constructor(props) {
    super(props)
}


  handleAvatarClick(){
    console.log('handle avatar click');
    $("#ProfileMenu").removeClass("SlideOut");
    $("#ProfileMenu").addClass("SlideIn");
  }

  render() {
    return(
      <div id="ProfileAvatar">
        <MuiThemeProvider>
         <Avatar
           style={{'width':'45px','height':'45px'}}
           src="https://avatars0.githubusercontent.com/u/13908543?v=3&s=400"
           onClick={this.handleAvatarClick}
          />
        </MuiThemeProvider>
        <ProfileMenu/>
      </div> 
    )
  }
}

