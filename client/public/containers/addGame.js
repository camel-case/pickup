import React, { Component } from 'react';
import $ from 'jquery';
import moment from 'moment';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { submitGame, clearPossibleLocations } from '../actions/index';

class Add extends Component { 
  constructor(props) {
	super(props)

	this.state = {
	  sport: '',
	  rules: '',
	  time: '',
	  location: '',
	  players: '',
	  original_players: '',
	  needed_players: ''
	}

  }

  componentDidMount() {
	$("#errorMessage").hide();
  }

  componentDidUpdate() {
	if(this.props.possibleLocations.length > 1) {
	  $('.modal').show();
	}
  }

  onInputChange(input, event) {
	const myObj = {
	}
	myObj[input] = event.target.value
	this.setState(myObj)
  }

  listOfPossibleLocations() {
	return this.props.possibleLocations.map((location) =>{
	   return(
		<div  className="listOfPossibleLocations" onClick={ this.onSubmit.bind(this, location.formatted_address) }>{ location.formatted_address }</div>
	  )
	})
  }

  onSubmit() {
	let address;
	console.log(arguments, 'arguments inside submit')
	if(typeof arguments[0] !== 'string') {
	  address = this.state.location
	} else {
	  address = arguments[0]
	}
  
	if(this.validate.call(this)) {
	  let arrStringified = JSON.stringify([]);
	  this.props.submitGame( { sport: this.state.sport, rules: this.state.rules, time: this.state.time, location: address, originalPlayers: this.state.original_players, joinedPlayers: arrStringified, playersNeeded: this.state.needed_players } )
	  this.props.clearPossibleLocations();
	}
  }

	validate() {
		let wasThereAnError = 0

		let sport = this.state.sport.toLowerCase(),
			rules = this.state.rules.toLowerCase(),
			time = this.state.time,
			needed_players = this.state.needed_players,
			original_players = this.state.original_players;

		let listOfSports = ['football', 'baseball', 'basketball', 'tennis', 'soccer'];

		$("input").removeClass("fieldError");
		$("#errorMessage").hide();

		if (listOfSports.indexOf(sport) === -1) {
		  wasThereAnError ++;
		  $('#sport').addClass('fieldError')
		}
		if (new Date(time) <= new Date() || time === '') {
		  wasThereAnError ++;
		  $('#time').addClass('fieldError')
		}
		const reOriginal_players = /[^0-9]/;
		if (reOriginal_players.test(original_players)) {
		  wasThereAnError ++;
		  $('#original_players').addClass('fieldError')
		}
		const reNeeded_players = /[^0-9]/;
		if (needed_players <= 0 || reNeeded_players.test(needed_players)) {
		  wasThereAnError ++;
		  $('#needed_players').addClass('fieldError')
		}
		if (wasThereAnError > 0) {
		  $('#errorMessage').show()
		  return false;
		} else {
		  return true;
		}
	}

	render() {

		return (
    		<div id="container">
    			<div id="modal1" className="modal">
        			<div className="modal-content">
          				<h4>Confirm Location</h4>
	          			<div>
	          				{ this.listOfPossibleLocations() }
	          			</div>
        			</div>
      			</div>

		        <div className="row">
		        	
	        		<table>
	        			<thead>
	        				<tr>
	                  			<th>
	                    			<p id="errorMessage" style={{color: 'red'}}>Please fix incorect input fields</p>
	                  			</th>
	                		</tr>
	              		</thead>

	                  	<tr>
		                    <input
		                    	id="sport"
		                    	className="resetError"
		                    	onChange={ this.onInputChange.bind(this, 'sport') }
		                    	value={ this.state.sport }
		                    	placeholder='Sport'
		                    	type="text"
		                    	className="form-control"
		                    />
	                 	</tr>

	                  	<tr>
		                    <input
		                    	id="rules"
		                    	className="resetError"
		                    	onChange={ this.onInputChange.bind(this, 'rules') }
		                    	value={ this.state.rules }
		                    	placeholder='Rules'
		                    	type="text"
		                    	className="form-control"
		                    />
	                  	</tr>

		                <tr>
		                	<input
			                	id="time"
			                	className="resetError"
			                	onChange={ this.onInputChange.bind(this, 'time') }
			                	value={ this.state.time }
			                	placeholder='Time'
			                	type="datetime-local"
			                	className="form-control"
		                	/>
		                </tr>

	                	<tr>
	                    	<input
		                    	id="location"
		                    	className="resetError"
		                    	onChange={ this.onInputChange.bind(this, 'location') }
		                    	value={ this.state.location }
		                    	placeholder='Location'
		                    	type="text"
		                    	className="form-control"
	                    	/>
	                	</tr>

	                  	<tr>
	                    	<input
	                    		id="original_players"
	                    		className="resetError"
	                    		onChange={ this.onInputChange.bind(this, 'original_players') }
	                    		value={ this.state.original_players }
	                    		placeholder='Current Players'
	                    		type="text"
	                    		className="form-control"
	                    	/>
	                  	</tr>

	                  	<tr>
	                    	<input
	                    		id="needed_players"
	                    		className="resetError"
	                    		onChange={ this.onInputChange.bind(this, 'needed_players') }
	                    		value={ this.state.needed_players }
	                    		placeholder='Needed Players' 
	                    		type="text"
	                    		className="form-control"
	                    	/>
	                  	</tr>
	                  	
      					<div>
		              		<button
		              			onClick={ this.onSubmit.bind(this) }
		              			id="addFormSubmit"
		              			className="btn red waves-effect waves-light btn"
		              			type="submit">
		              				submit
		              		</button>

		              		<button
		              			id="addFormCancel"
		              			className="btn red waves-effect waves-light btn"
		              			type="submit">
		              				cancel
		              		</button>
		              	</div>
		              	

	            	</table>
		        </div> 
		    </div>
		)

	}
}


function mapDispatchToProps(dispatch){
  return bindActionCreators({ submitGame, clearPossibleLocations }, dispatch);
}

function mapStateToProps(state) {
  return {
	possibleLocations: state.possibleLocations
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Add)
