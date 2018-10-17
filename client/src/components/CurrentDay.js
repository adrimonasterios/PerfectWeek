import React from 'react';

class CurrentDay extends React.Component{
  render(){
    return(
  <div className="travel_image">
    <div className="daily">
      <h2>Your Restaurant today:</h2>
        <div className="block1">
          <div className="container1">
            <div className="picture1">
              {this.props.sevenRes()[this.props.current] &&
              <img className="rest_pic"src={`${this.props.sevenRes()[this.props.current].image_url}`} alt={`Photo of restaurant`}/>}
            </div>
          <div classNam="restaurant">
            <div class="overlay1">
                  {this.props.sevenRes()[this.props.current] &&
                  <h1 className="name">{this.props.sevenRes()[this.props.current].name}</h1>}
               <div className="restaurant_result">
                  {this.props.sevenRes()[this.props.current] &&
                    <p><span>Address: </span>{this.props.sevenRes()[this.props.current].location.display_address[0]},</p>}
                  {this.props.sevenRes()[this.props.current] &&
                    <p> {this.props.sevenRes()[this.props.current].location.display_address[1]}</p>}
                  {this.props.sevenRes()[this.props.current] &&
                    <p><span>Phone: </span>{this.props.sevenRes()[this.props.current].display_phone}</p>}
                  {this.props.sevenRes()[this.props.current] &&
                    <p><a href={`${this.props.sevenRes()[this.props.current].url}`}><span>Yelp Reviews</span></a></p>}
               </div>
             </div>
           </div>
         </div>
       </div>

    <h2>Entertainment for today:</h2>

      <div className="block2">
        <div className="container2">
            <div class="picture2">
                {this.props.sevenActive()[this.props.current] &&
                <img class="ent_pic"src={`${this.props.sevenActive()[this.props.current].image_url}`} alt={`Photo of entertainment`}/>}
            </div>
             <div classNam="entertainment">
               <div className="overlay2">
                   {this.props.sevenActive()[this.props.current] &&
                   <h1 className="name">{this.props.sevenActive()[this.props.current].name}</h1>}
                 <div className="entertainment_result">
                    {this.props.sevenActive()[this.props.current] &&
                      <p><span>Address: </span>{this.props.sevenActive()[this.props.current].location.display_address[0]},</p>}
                    {this.props.sevenActive()[this.props.current] &&
                      <p> {this.props.sevenActive()[this.props.current].location.display_address[1]}</p>}
                    {this.props.sevenActive()[this.props.current] &&
                      <p><span>Phone: </span>{this.props.sevenRes()[this.props.current].display_phone}</p>}
                    {this.props.sevenActive()[this.props.current] &&
                      <p><a href={`${this.props.sevenActive()[this.props.current].url}`}><span>Yelp Reviews</span></a></p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   )
  }
}

export default CurrentDay
