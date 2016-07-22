import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ProfileAvatar from './Profile/ProfileAvatar'
import SearchBar from './SearchBar'
import AddGame from '../../containers/addGame'
import AddIcon from 'material-ui/svg-icons/content/add';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class NavBar extends Component {
	constructor(props) {
		super(props)
		this.state = {
			addForm: ''
		}
	}

	handleAddFormClick() {
		console.log(this.state.addForm);
		this.setState({ addForm: 'FadeIn' })
	}

  	nav(){
		return (

			<div>

				<div id="Navigation">
			   		<ProfileAvatar />
			   		<h1 id="title" className = "text-center">PickUpz</h1>
				   		<div
				   			id="addButton"
				   			onClick={this.handleAddFormClick.bind(this)}
				   		>
			   				<MuiThemeProvider>
    							<AddIcon style={{'width':'50px','height':'50px', 'fill': 'white'}}/>
    						</MuiThemeProvider>
			   			</div>
			   		<SearchBar />
			  	</div>

			  	<div
					id="addFormWrapper"
					className={this.state.addForm}>

					<AddGame id="addFormWrapper"/>

				</div>

			</div>
		)
	}

  	render() {
		return (
			<div>
				{this.nav()}
			</div>
		)
  	}
}
