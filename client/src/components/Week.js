import React from "react";
import Day from "./Day";


class Week extends React.Component {
  // sevenRes (){
  //   let otherArr = this.props.queryData;
  //   let elementArr = otherArr.filter((element)=> element.review_count>1000);
  //   elementArr.sort((a,b) => {
  //     return b.rating-a.rating
  //     // return ((((a.rating/a.review_count)*10000)-((b.rating/b.review_count)*10000)))
  //   })
  //   return elementArr.filter((element, index) => index < 7 )
  // }
  //
  // sevenActive(){
  //   let activeArr = this.props.queryDataActive;
  //   let artsArr = this.props.queryDataArts;
  //   let publicArr = this.props.queryDataPublicArts;
  //   let arr1 = activeArr.concat(artsArr);
  //   let otherArr = arr1.concat(publicArr);
  //   let elementArr = otherArr.filter((element)=> element.review_count>600);
  //   elementArr.sort((a,b) => {
  //     return b.rating-a.rating
  //     // return ((((a.rating/a.review_count)*10000)-((b.rating/b.review_count)*10000)))
  //   })
  //   return elementArr.filter((element, index) => index < 7 )
  // }
  // componentDidMount(){
  //   let res = this.props.sevenRes()
  //   let active = this.props.sevenActive()
  //   this.props.update(res, active)
  // }

  render(){
    let res = this.props.sevenRes()
    let active = this.props.sevenActive()

    return(
    <div className="week_image_world">
      <div className="week_container">
        <div className="week_restaurant"><p>Restaurants!</p>
          {res.map((element, index)=>{
            return <Day currentDay={this.props.currentDay} restaurants={element.name} className={`${index}, pair_${index}`} key={`key_${index}`}/>
          })}
        </div>
        <div className="week_entertainment"><p>Entertainment!</p>
          {active.map((element, index)=>{
            return <Day currentDay={this.props.currentDay} entertainment={element.name} className={index} key={`key_${index}`}/>
          })}
        </div>
      </div>
    </div>
    )
  }
}
export default Week
