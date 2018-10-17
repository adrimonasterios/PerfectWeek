import React from 'react';

class CurrentDay extends React.Component{
  render(){
    return(
      <div>
        <p>Your Restaurant today:</p>
        {this.props.sevenRes()[this.props.current] &&
          <h1>{this.props.sevenRes()[this.props.current].name}</h1>}
        {this.props.sevenRes()[this.props.current] &&
          <img src={`${this.props.sevenRes()[this.props.current].image_url}`} alt={`Photo of restaurant`}/>}
        {this.props.sevenRes()[this.props.current] &&
          <p><span>Address: </span>{this.props.sevenRes()[this.props.current].location.display_address[0]},</p>}
        {this.props.sevenRes()[this.props.current] &&
          <p> {this.props.sevenRes()[this.props.current].location.display_address[1]}</p>}
        {this.props.sevenRes()[this.props.current] &&
          <p><span>Phone: </span>{this.props.sevenRes()[this.props.current].display_phone}</p>}
        {this.props.sevenRes()[this.props.current] &&
          <p><a href={`${this.props.sevenRes()[this.props.current].url}`}><span>Yelp Reviews</span></a></p>}
        <p>Entertainment for today:</p>
        {this.props.sevenActive()[this.props.current] &&
          <h1>{this.props.sevenActive()[this.props.current].name}</h1>}
        {this.props.sevenActive()[this.props.current] &&
          <img src={`${this.props.sevenActive()[this.props.current].image_url}`} alt={`Photo of entertainment`}/>}
        {this.props.sevenActive()[this.props.current] &&
          <p><span>Address: </span>{this.props.sevenActive()[this.props.current].location.display_address[0]},</p>}
        {this.props.sevenActive()[this.props.current] &&
          <p> {this.props.sevenActive()[this.props.current].location.display_address[1]}</p>}
        {this.props.sevenActive()[this.props.current] &&
          <p><span>Phone: </span>{this.props.sevenRes()[this.props.current].display_phone}</p>}
        {this.props.sevenActive()[this.props.current] &&
          <p><a href={`${this.props.sevenActive()[this.props.current].url}`}><span>Yelp Reviews</span></a></p>}
      </div>
    )
  }
}

export default CurrentDay
