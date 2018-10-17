import './css/style.css';
import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./components/Home";
import Week from "./components/Week"
import CurrentDay from "./components/CurrentDay"
import axios from 'axios'
const router = require('react-router');



class App extends React.Component{
 constructor() {
   super();
   this.state = {
     queryData: [],
     queryDataActive:[],
     queryDataArts:[],
     queryDataPublicArts:[],
     current: '',
   }
   this.sayHello = this.sayHello.bind(this);
   this.currentDay = this.currentDay.bind(this);
   this.sevenRes = this.sevenRes.bind(this);
   this.sevenActive = this.sevenActive.bind(this);
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
     queryDataPublicArts: dataPublicArts.businesses,

   })
 }

 async currentDay(classId){
   let clicked = classId;
   await this.setState({current: clicked})
 }

 sevenRes (){
   let otherArr = this.state.queryData;
   let elementArr = otherArr.filter((element)=> element.review_count>1000);
   elementArr.sort((a,b) => {
     return b.rating-a.rating
     // return ((((a.rating/a.review_count)*10000)-((b.rating/b.review_count)*10000)))
   })
   let arrSeven1 = elementArr.filter((element, index) => index < 7 ).filter((element) => element.categories != "restaurants")
   // this.setState({sevenRes: arrSeven1})
   return arrSeven1
 }

 sevenActive(){
   let activeArr = this.state.queryDataActive;
   let artsArr = this.state.queryDataArts;
   let publicArr = this.state.queryDataPublicArts;
   let arr1 = activeArr.concat(artsArr);
   let otherArr = arr1.concat(publicArr);
   let elementArr = otherArr.filter((element)=> element.review_count>600);
   elementArr.sort((a,b) => {
     return b.rating-a.rating
     // return ((((a.rating/a.review_count)*10000)-((b.rating/b.review_count)*10000)))
   })
   let arrSeven2 = elementArr.filter((element, index) => index < 7 )
   // this.setState({sevenActive: arrSeven2})
   return arrSeven2
 }

  render(){
    return(
      <Router>
        <div>
            <ul className="navBar">
              <div className="first"><li><Link to="/home">Home</Link></li></div>
              <div className="second"><li><Link to="/about">About</Link></li></div>
              <div className="third"><li><Link to="/contact">Contact</Link></li></div>
            </ul>
          <Route exact path="/home" component={() => <Home sayHello={this.sayHello} />}/>
          <Route exact path="/week" component={() => <Week current={this.state.current} currentDay={this.currentDay} sevenRes={this.sevenRes} sevenActive={this.sevenActive} queryData={this.state.queryData} queryDataActive={this.state.queryDataActive} queryDataArts={this.state.queryDataArts} queryDataPublicArts={this.state.queryDataPublicArts}/>}/>
          <Route path="/week/currentday" component={()=> <CurrentDay current={this.state.current} sevenRes={this.sevenRes} sevenActive={this.sevenActive}/>}/>
       </div>
     </Router>

    )
  }
}

render(<App />, document.getElementById('root'));
