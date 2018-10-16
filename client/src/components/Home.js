import React from "react";
import axios from 'axios';
// import NavBar from "NavBar";
import HomeForm from "./HomeForm";

class Home extends React.Component {

  render () {
    return (
      <div className="homeContainer">
       <img src="" alt="Logo"/>
       <div>
         <p>Where do you want to have your perfect week?</p>
       </div>
       <HomeForm sayHello={this.props.sayHello}/>
      </div>
    )
  }
}

export default Home
