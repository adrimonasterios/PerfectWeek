import './css/style.css';
import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Week from "./components/Week"
import axios from 'axios'
const router = require('react-router');



class App extends React.Component{
 constructor() {
   super();
   this.state = {
     queryData: [],
     queryDataActive:[],
     queryDataArts:[],
     queryDataPublicArts:[]
   }
   this.sayHello = this.sayHello.bind(this)
 }

 async sayHello(event) {
   let input = document.getElementById("foo").value
   let {data} = await axios.get(`/home?location=${input}`);
   let {data:dataActive} = await axios.get(`/home2?location=${input}`);
   let {data:dataArts} = await axios.get(`/home3?location=${input}`);
   let {data:dataPublicArts} = await axios.get(`/home4?location=${input}`);

   this.setState({
     queryData: data.businesses,
     queryDataActive: dataActive.businesses,
     queryDataArts: dataArts.businesses,
     queryDataArts: dataPublicArts.businesses
   })
 }

  render(){
    return(
      <Router>
        <div>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <Route path="/home" exact component={() => <Home sayHello={this.sayHello} />}/>
          <Route path="/week" exact render={() => <Week queryData={this.state.queryData} queryDataActive={this.state.queryDataActive} queryDataArts={this.state.queryDataArts} queryDataPublicArts={this.state.queryDataPublicArts}/>}/>
       </div>
     </Router>

    )
  }
}

render(<App />, document.getElementById('root'));
