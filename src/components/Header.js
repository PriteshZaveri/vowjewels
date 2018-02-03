import React, { Component } from 'react';

class Header extends Component {
  constructor(props){
    super(props)
    this.state = {
      subheadings : []
    }
  }

  showDropdown(){

  }

  render() {
    return (
      <div className="header">
        <header>
          <div id="nav">
            <p>Vow Jewels Collection</p>
            <ul>
              <li className="active"><a href="#">Home</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Gallery</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </header>
        <div>
        </div>
      </div>
    );
  }
}

export default Header;
