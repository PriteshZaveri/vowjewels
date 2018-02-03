import React, { Component } from 'react';

class Header extends Component {
  constructor(props){
    super(props)
    this.state = {
      headings : [
        {
          name: "Home"
        },
        {
          name: "Jewellery",
          subheads : ["Rings", "Pendants", "Tops"]
        },
        {
          name: "Gifting",
          subheads: ["Frames", "Coins", "Stands"]
        },
        {
          name: "About"
        },
        {
          name: "Contact"
        }
      ]
    }
  }

  showDropdown(id){
    let list = document.getElementById(id);
    list.classList.remove('hide')
    list.classList.add('show')
  }
  hideDropdown(id){
    let list = document.getElementById(id);
    list.classList.remove('show')
    list.classList.add('hide')
  }

  render() {
    let home_list = this.state.headings.map( heading => {
      return (
        heading.subheads ?
        (
          <li onMouseOver={() => this.showDropdown(heading.name)} onMouseOut={() => this.hideDropdown(heading.name)}><a href="#">{heading.name}</a>
            <ul id={heading.name} className="hide">
              {
                heading.subheads.map( list_item => {
                return <li><a href="#">{list_item}</a></li>
              })
            }
            </ul>
          </li>
        ):
        <li><a href="#">{heading.name}</a></li>

        )
      }
    )
    return (
      <div className="header">
        <header>
          <div id="nav">
            <p>Vow Jewels Collection</p>
            <ul>
              {home_list}
            </ul>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
