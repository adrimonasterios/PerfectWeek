import React from 'react';

class CurrentDay extends React.Component{
  render(){
    return(
      <div>
        <h1>{`${this.props.sevenRes()[this.props.current]}`}</h1>
      </div>
    )
  }
}

export default CurrentDay
