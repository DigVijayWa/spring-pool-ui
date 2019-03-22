import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import {PostData} from '../service/PostData';

class HomePage extends Component {


  constructor(props) {
    super(props);

    this.state = {
      "userId" : '',
      "userName" : '',
      "redirectToReferrer" : '',
      "redirection" : '',
      "accessToken" : '',
      "tokenType" : ''
    };

    this.addSessionData = this.addSessionData.bind(this);
    this.logout = this.logout.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onClick(redirection) {
      sessionStorage.setItem('userData',JSON.stringify(this.state));
      console.log('LOOK : '+this.state.accessToken+'   '+this.state.tokenType+'  '+this.state.userId);
      this.setState({'redirection' : redirection.target.name});
  }

  componentWillMount() {
    console.log('hello from Homepage');

   if(sessionStorage.getItem("userData")){
    this.addSessionData();
   }
  
   else{
    this.setState({"redirection": "login"});
   }
  }

  logout() {
    sessionStorage.setItem("userData",'');
    sessionStorage.clear();
    this.setState({"redirection": "login"});
  }

  addSessionData() {

     let data = JSON.parse(sessionStorage.getItem("userData"));

     let dataBody =  { 
        "userName" : data.userName,
        "accessToken" : data.accessToken,
        "tokenType" : data.tokenType
     };
     
     PostData('user',dataBody,'by-user-name/').then(result => {
        this.setState({});
     });

    this.setState({
      "userName": data.userName,
      "userId" : data.userId,
      "accessToken" : data.accessToken,
      "tokenType" : data.tokenType
    });
  }

  render() {
  
    switch(this.state.redirection) {
        case "login"  : return (<Redirect to={'/'}/>);
    
        case "book-specific" : return (<Redirect to={'/home-page/book-specific-table'}/>);
                     
        case "see-all" : return (<Redirect to={'/home-page/see-all-table'}/>);
  
       default       : return (
      <div id='MainApp'>
        <ul class="cb-slideshow">
              <li><span>Image 01</span><div><h3>PROJECT-POOL</h3></div></li>
              <li><span>Image 02</span><div><h3>Developed By</h3></div></li>
              <li><span>Image 03</span><div><h3>Digvijay and</h3></div></li>
              <li><span>Image 04</span><div><h3>Krishna</h3></div></li>
              <li><span>Image 05</span><div><h3>On React</h3></div></li>
              <li><span>Image 06</span><div><h3>With Spring</h3></div></li>
          </ul>
          <button onClick={this.onClick} name="see-all">See all available Pool tables</button>

          <button onClick={this.onClick} name="book-specific">Book specific pool Table</button>

          <button onClick={this.logout}>Logout</button>
          
        </div>
    );
                      
    }
    
  }
}
export default HomePage;