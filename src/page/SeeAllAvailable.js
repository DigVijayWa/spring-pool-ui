import React, { Component } from 'react';
class SeeAllAvailable extends Component {
	
	render() {
		return(
			<div>
				 Select time slot : 
			   <select name="time-slots">
				    <option value="1">9-10</option>
				    <option value="2">10-11</option>
				    <option value="3">11-12</option>
				    <option value="4">12-1</option>
				    <option value="5">1-2</option>
				    <option value="6">2-3</option>
				    <option value="7">3-4</option>
				    <option value="8">4-5</option>
			  </select> 
  			<button>check</button>
  			<h1>List of Available Tables</h1>
			</div>
		);
	}
}
export default SeeAllAvailable;