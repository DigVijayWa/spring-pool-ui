import React, { Component } from 'react';
import {PostData} from '../service/PostData';
import {Redirect} from 'react-router-dom';

class LoginPage extends Component {
	constructor(props) {
		super(props);
		this.state = {formLegend : props.formLegend ? props.formLegend : "Default"};
		this.onChange = this.onChange.bind(this);
		this.fetchData = this.fetchData.bind(this);
		this.state = {
			"loginStatus" : false, 
			"loginAttempt" : 3, 
			"loginRequest" : '',
			"accessToken" : '',
			"tokenType" : '',
			"userName":'',
			"password":'',
			"redirectToReferrer" : false
		};
	}

	fetchData() {

    	PostData("signin",{"userName": this.state.userName, "password": this.state.password}).then(result=>{

    		if(result.status === 401) {

    		}
    		else {
    			this.setState({"redirectToReferrer" : true});
    			let jsonData = {
    				"userName" : this.state.userName,
    				"accessToken" : result.accessToken,
    				"tokenType" : result.tokenType
    			};
    			sessionStorage.setItem('userData',JSON.stringify(jsonData));
    			this.props.history.push('/home-page');
    		}
    	});
	}



	/*fetchPoolData(myJson) {
		fetch("http://localhost:8080/api/pool-table/get-all-available/9", {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
       	headers : JSON.stringify({'Content-Type' : 'application/json', 'Authorization' : 'Bearer '+myJson})
     })
    .then(function(response) {
    	return response.json();
    }).then(myJson => {
    	//console.log(myJson);
    	this.fetchPoolData(myJson);
    });
	}**/

	onChange(e) {
		this.setState({[e.target.name] : e.target.value});
		console.log(e.target.value);
	}

	render() {
    	if(sessionStorage.getItem('userData')){
     	     return (<Redirect to={'/home-page'}/>)
    	}
		return(
			<div class="form-login">
				
					<div>
						
						<input placeholder="Enter Employee ID" id="input-1" class="input-1" onChange={this.onChange} name="userName"/> 
					
						<input placeholder="Password" id="input-2" type="password" class="input-1" onChange ={this.onChange} name="password"/> 
						
						<button onClick={this.fetchData}> Fetch Data</button>
					</div>
			</div>
		);
	}
}
export default LoginPage;
/*

<!--
						<div>
							<input placeholder="Enter user Name" name="userName"/>
							<input placeholder="Enter user Email Id" name="userEmail"/>
							<input placeholder="Enter userId" name="userId"/>
							<input placeholder="Enter password" name="password"/>
							<button>Submit</button>
						</div>
						!>

*/