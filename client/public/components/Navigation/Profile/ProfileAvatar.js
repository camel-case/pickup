import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar/Avatar';
import ProfileMenu from './ProfileMenu';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ListItem from 'material-ui/List/ListItem';
import List from 'material-ui/List/List';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ProfileAvatar extends Component {

  handleAvatarClick(){
    console.log('handle avatar click');
    $("#ProfileMenu").removeClass("SlideOut");
    $("#ProfileMenu").addClass("SlideIn");
  }

  render() {

    let img = this.props.userData.data ? this.props.userData.data.photoURL : ''

    return(
      <div id="ProfileAvatar">
        <MuiThemeProvider>
         <Avatar
           style={{'width':'45px','height':'45px'}}
           src={img}
          />
        </MuiThemeProvider>
        <ProfileMenu/>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    userData: state.userAuth,
  }
}

export default connect(mapStateToProps)(ProfileAvatar)
