import React, { Component } from 'react'
import ProfileAvatar from './Profile/ProfileAvatar'
import HamburgerMenu from './Drawer/HamburgerMenu'
import SearchBar from './SearchBar'
import AddGame from '../../containers/addGame'
import AddIcon from 'material-ui/svg-icons/content/add';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import $ from 'jquery';

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

	handleCancelClick() {
		this.setState({ addForm: 'FadeOut' })
		$("#errorMessage").hide();
		console.log(this.state.addForm);
	}

  	nav(){
		return (

			<div>

				<div id="Navigation">
			   		<ProfileAvatar />
			   		<HamburgerMenu />
			   		<h1 id="title" className = "text-center">PickUpz</h1>
				   		<div
				   			id="addButton"
				   			onClick={this.handleAddFormClick.bind(this)}
				   		>
			   				<MuiThemeProvider>
    							<AddIcon style={{'width':'50px','height':'50px'}}/>
    						</MuiThemeProvider>
			   			</div>
			   		<SearchBar />
			  	</div>

			  	<div
					id="addFormWrapper"
					className={this.state.addForm}>

					<AddGame 
						id="addFormWrapper"
						classChange={this.handleCancelClick.bind(this)}

					/>

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