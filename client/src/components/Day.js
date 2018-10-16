import React from 'react';

class Day extends React.Component{
  render(){
    return(
      <div>
      <div>{this.props.name}</div>
      <div>{this.props.name1}</div>
      </div>
    )
  }
}

export default Day
