import React, { Component } from 'react';

import Routes from './Routes';
import Header from './page/component/Header';
import Footer from './page/component/Footer';



class App extends Component {

  constructor(){
    super();
    this.state={
      appName: "POOL_PROJECT",
      home: false
    }
  }

  render() {
    return (
      <div className="off-canvas-wrapper">
      <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>

     

        <div className="off-canvas-content" data-off-canvas-content>
          <Header name={this.state.appName}/>
          <Routes name={this.state.appName}/>
          <hr/>
         <Footer/>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
