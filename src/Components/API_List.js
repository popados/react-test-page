import React, {Component} from 'react';
import ListedKey from './API_Item.js';

class restKeys extends Component {
  deleteKey(id_key){
    this.props.onDelete(id_key);
  }

  render() {
    let API_Item;
    if(this.props.keys) {
      API_Item = this.props.keys.map(key => {
        return(
          <ListedKey onDelete={this.deleteKey.bind(this)} key={key.api_key} project={key}/>
        );
      });
    }
    return (
      <div className="Keys" >
      {API_Item}
      </div>
    );
  }
}
export default restKeys;
