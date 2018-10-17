import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom'

class Day extends React.Component{
  render(){
    return(
      <div className="day_table">
        <p>Day {this.props.joined +1}</p>
        <div onClick={(ev)=>{ev.preventDefault(); this.props.currentDay(this.props.joined)}}>
          <Link to={`/week/currentday`}>{this.props.restaurants}</Link>
        </div>
        <div onClick={(ev)=>{ev.preventDefault(); this.props.currentDay(this.props.joined)}}>
          <Link to={`/week/currentday`}>{this.props.entertainment}</Link>
        </div>
      </div>
    )
  }
}

export default Day
