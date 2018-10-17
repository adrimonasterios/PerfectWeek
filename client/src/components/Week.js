import React from "react";
import Day from "./Day";


class Week extends React.Component {
  render(){
    let res = this.props.sevenRes()
    let active = this.props.sevenActive()

    return(
    <div className="week_image_world">
      <div className="week_container">
        <div className="week_min_container">
          <div className="week_rest_top">
            <p className="week_name_assort">Restaurants</p>
            {res.map((element, index)=>{
              return <Day currentDay={this.props.currentDay} restaurants={element.name} className={`pair_${index}`} joined={index} key={`key_${index}`}/>
            })}
          </div>
          <div className="week_ent_botton">
            <p className="week_name_assort">Entertainment</p>
            {active.map((element, index)=>{
              return <Day currentDay={this.props.currentDay} entertainment={element.name} className={`pair_${index}`} joined={index} key={`key_${index}`}/>
            })}
          </div>
        </div>
      </div>
    </div>
    )
  }
}
export default Week
