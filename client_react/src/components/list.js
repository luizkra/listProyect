import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './../App.css';
import ListItem from './listItem';

const api = 'http://localhost:3000/api/lists';
class List extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
    };
  }
  componentDidMount() {
    this.getList();
  }
  getList() {
    console.log('get list');
    fetch(api)
      .then(response => {
        response.json().then(json => {
          console.log(json);
          this.setState({
            list: json,
          });
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    const dataList = this.state.list.map((list, i) => {
      return <ListItem key={list.id} item={list} />;
    });
    return (
      <div>
        <div class="row">
          <div class="col s12">
            <h4>Lista general </h4>
          </div>
          <div class="col s12">
            <ul className="collection hoverable">{dataList}</ul>
          </div>
        </div>

        <div className="fixed-action-btn">
          <Link to="#" className="btn-floating btn-large teal accent-4 pulse">
            <i className="fa fa-plus" />
          </Link>
        </div>
      </div>
    );
  }
}

export default List;
