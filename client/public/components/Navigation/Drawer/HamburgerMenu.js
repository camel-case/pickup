import React, { Component } from 'react';
import HamburgerIcon from 'material-ui/svg-icons/navigation/menu';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {List, ListItem} from 'material-ui/List';
import SvgIcon from 'material-ui/svg-icons/navigation/menu';
import * as actions from '../../../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'underscore';


class HamburgerMenu extends Component {

  render() {
    return(
    <div id = "HamMenu">
    	<MuiThemeProvider>
    		<HamburgerIcon style={{'width':'45px','height':'45px', 'marginTop':'5px'}} />
    	</MuiThemeProvider>
    </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    games: state.searchGames,
  }
}

export default connect(mapStateToProps, actions)(HamburgerMenu)
