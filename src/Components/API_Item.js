//popados

import React, {Component} from 'react';

class ListedKey extends Component {
  deleteKey(id_key){
    this.props.onDelete(id_key);
  }
  render(){
    return (
      <li className="Key">
      <strong>{this.props.key.api_key}</strong>: - {this.props.key.queue} <a href="#" onClick={this.deleteKey.bind(this, this.props.key.id_key)}> X </a>
      </li>
    );
  }
}

export default ListedKey;
