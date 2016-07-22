import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ProfileAvatar from './Profile/ProfileAvatar'
import HamburgerMenu from './Drawer/HamburgerMenu'
import AddButton from './addButton'
import SearchBar from './SearchBar'

export default class NavBar extends Component {
  constructor(props) {
    super(props)
}
  nav(){
    return(

      <div id="Navigation">
       <ProfileAvatar/>
       <HamburgerMenu/>
       <h1 id="title" className = "text-center">PickUpz</h1>
       <AddButton/>
       <SearchBar/>
      </div>

      )
  }

  render() {
    return(
    <div>
        {this.nav()}
    </div>
    )
  }
}
