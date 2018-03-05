import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './../App.css';

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: props.item,
    };
  }
  render() {
    return (
      <li className="collection-item list">
        {/* <a href={`/list/${this.state.item.id}`}>{this.state.item.name} <span class="secondary-content"> <i class="material-icons">send</i> </span></a> */}
        <div>
          {this.state.item.name}
          <a href={`/list/${this.state.item.id}`} class="secondary-content">
            <i class="material-icons">send</i>
          </a>
        </div>
      </li>
    );
  }
}

export default ListItem;
