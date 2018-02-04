import React, { Component } from 'react';
import thumb from '../images/p001.JPG'

class SmallCard extends Component {
  constructor(props){
    super(props)
  }
  render(){

    return(
      <div className="smallcard">
        <div className="thumbnail">
          <img src={thumb}/>
        </div>
        <p className="sc_code"><b>Code:</b> P 001</p>
        <p className="sc_category">Pendant</p>
        <div className="sc_details">

        </div>
        <div>
          <button></button>
        </div>
      </div>
    )
  }
}

export default SmallCard
