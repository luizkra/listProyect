import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const api = 'http://localhost:3000/api/lists';

class ListToList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listTo: '',
    };
  }

  componentWillMount() {
    this.getItemList();
  }

  getItemList() {
    let listId = this.props.match.params.id;

    fetch(api + `/${listId}`)
      .then(response => {
        response.json().then(json => {
          console.log(json);
          this.setState({
            listTo: json,
          });
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  // onDelete() {
  //   let meetupId = this.state.listTo.id;
  //   axios
  //     .delete(`http://localhost:3000/api/meetups/${meetupId}`)
  //     .then(response => {
  //       this.props.history.push('/');
  //     })
  //     .catch(err => console.log(err));
  // }

  render() {
    return (
      <div>
        <br />
        <div className="fixed-action-btn left-float">
          <Link className="btn-floating btn-large teal accent-4" to="/">
            <i className="material-icons left">keyboard_backspace</i>
          </Link>
        </div>
        <h4>{this.state.listTo.name}</h4>
        <ul className="collection">
          <li className="collection-item">{this.state.listTo.description}</li>
        </ul>

        <div className="fixed-action-btn vertical">
          <a className="btn-floating btn-large  teal accent-4">
            <i className="large material-icons">mode_edit</i>
          </a>
          <ul>
            <li>
              <a className="btn-floating red">
                <i className="material-icons">insert_chart</i>
              </a>
            </li>
            <li>
              <a className="btn-floating yellow darken-1">
                <i className="material-icons">format_quote</i>
              </a>
            </li>
            <li>
              <a className="btn-floating green">
                <i className="material-icons">publish</i>
              </a>
            </li>
            <li>
              <a className="btn-floating blue">
                <i className="material-icons">attach_file</i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ListToList;
