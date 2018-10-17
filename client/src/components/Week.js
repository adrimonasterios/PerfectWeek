import React from "react";
import Day from "./Day";


class Week extends React.Component {
  render(){
    let res = this.props.sevenRes()
    let active = this.props.sevenActive()

    return(
      <div>
        <div>
          {res.map((element, index)=>{
            return <Day currentDay={this.props.currentDay} restaurants={element.name} className={index} key={`key_${index}`}/>
          })}
          {active.map((element, index)=>{
            return <Day currentDay={this.props.currentDay} entertainment={element.name} className={index} key={`key_${index}`}/>
          })}
        </div>
      </div>
    )
  }
}
export default Week
