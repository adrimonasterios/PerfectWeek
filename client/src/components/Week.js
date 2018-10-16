import React from "react";
import Day from "./Day";


class Week extends React.Component {
  sevenRes (){
    let otherArr = this.props.queryData;
    let elementArr = otherArr.filter((element)=> element.review_count>1000);
    elementArr.sort((a,b) => {
      return b.rating-a.rating
      // return ((((a.rating/a.review_count)*10000)-((b.rating/b.review_count)*10000)))
    })
    return elementArr.filter((element, index) => index < 7 )
  }

  sevenActive(){
    let activeArr = this.props.queryDataActive;
    let artsArr = this.props.queryDataArts;
    let publicArr = this.props.queryDataPublicArts;
    let arr1 = activeArr.concat(artsArr);
    let otherArr = arr1.concat(publicArr);
    let elementArr = otherArr.filter((element)=> element.review_count>600);
    elementArr.sort((a,b) => {
      return b.rating-a.rating
      // return ((((a.rating/a.review_count)*10000)-((b.rating/b.review_count)*10000)))
    })
    console.log(elementArr)
    return elementArr.filter((element, index) => index < 7 )
  }

  render(){
    return(
      <div>
        <div><p>Restaurants!</p>
          {this.sevenRes().map((element, index)=>{
            return <Day name={element.name} key={`key_${index}`}/>
          })}
        </div>
        <div><p>Entertainment!</p>
          {this.sevenActive().map((element, index)=>{
            return <Day name1={element.name} key={`key_${index}`}/>
          })}
        </div>
      </div>
    )
  }
}
export default Week
