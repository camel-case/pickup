import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      locationInput: null
    }
  }

  onLocationEnter(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      console.log('do validate');
      var searchObj = { sport: 'basketball', location: this.state.locationInput };
      let data = this.props.searchGames(searchObj);
    }
  }

  onLocationInput(e) {
    this.setState({
      locationInput: e.target.value
    })
  }

  render() {
    console.log(this.state.locationInput)

    return(
    <div id="SearchBar">
      <form id="demo-2">
        <input onKeyPress={this.onLocationEnter.bind(this)} onChange={this.onLocationInput.bind(this)} type="search" placeholder="Search"/>
      </form>
    </div>
    )
  }
}

export default connect(null, actions)(SearchBar)
