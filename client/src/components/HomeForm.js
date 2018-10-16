import React from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Link, Route, Switch, withRouter} from 'react-router-dom';
import Week from "./Week.js";


class HomeForm extends React.Component{

  toWeek = (ev)=>{
    // ev.preventDefault()
    this.props.history.push('/week')
  }

  render() {
    return (
      <Router>
        <form>
          <input id="foo" type='text'/>
          <input type="submit" onClick={(ev)=>{ev.preventDefault();
                                                this.props.sayHello();
                                                this.toWeek();
                                              }}/>
        </form>
      </Router>
    )
  }
}

export default withRouter(HomeForm)
