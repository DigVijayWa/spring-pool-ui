import React, { Component } from 'react';
import {PostData} from '../service/PostData';
import {Redirect} from 'react-router-dom';


class BookSpecificPoolTable extends Component {
  
  constructor(props) {

      super(props);

      this.state = {
        "isLoading" : true,
        "userId" : '',
      "userName": '',
      "accessToken" : '',
      "tokenType" : ''
    };

    this.addSessionData = this.addSessionData.bind(this);
    this.logout = this.logout.bind(this);
    this.fetchBuildingList = this.fetchBuildingList.bind(this);
    this.fetchBuildingFloorCount = this.fetchBuildingFloorCount.bind(this);
    this.displayBuildingList = this.displayBuildingList.bind(this);
  }

  logout() {

    sessionStorage.setItem("userData",'');
    sessionStorage.clear();
    this.setState({"redirection": "login"});
  }

   componentWillMount() {
    console.log('hello from Book');

     if(sessionStorage.getItem("userData")){
      this.addSessionData();
     }
    
     else{
      this.setState({"redirection": "login"});
     }
  }

  displayBuildingList() {
       this.state.buildingList.map((e,i)=> {
              return(
                 <option key={i} value={e.buildingName}>{e.buildingName}</option>
             );
        });
  }

  addSessionData() {
    let data = JSON.parse(sessionStorage.getItem("userData"));
    console.log(data);
    console.log('LOOK : '+data.accessToken+'   '+data.tokenType+'  '+data.userId);
    this.setState({
      "userId" : data.userId,
      "userName" : data.userName,
      "accessToken" : data.accessToken,
      "tokenType" : data.tokenType
    },()=> {
         this.fetchBuildingList();
    });
  }

  fetchBuildingList() {
      console.log(this.state.accessToken);
      console.log(this.state.tokenType);

      let data = {
          "accessToken" : this.state.accessToken,
          "tokenType" : this.state.tokenType
      };

      PostData('building',data,'building-list/').then(result=>{
        this.setState({
          "isLoading" : false,
          "buildingList" : result
        });
      });
  }

  fetchBuildingFloorCount() {

  }

  render() {
    if(!this.state.isLoading) {
      return (
      
            <div>
                   <select name="buildingList">
                      {this.displayBuildingList}  
                  </select> 
            </div>
          );
      }
      else {
        return <p> Loading Result </p>;
      }
  }

}
export default BookSpecificPoolTable;
