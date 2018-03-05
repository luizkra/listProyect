import React, {Component} from 'react';
import './../App.css';
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
      return (
        <li key={i} className="collection-item">
          {' '}
          {list.name}
        </li>
      );
    });
    return (
      <div>
        <ul className="collection">{dataList}</ul>
      </div>
    );
  }
}

export default List;
