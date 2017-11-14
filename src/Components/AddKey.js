//Popados

import React, {Component} from 'react';
import uuid from 'uuid';

class API_call extends Component {
  constructor(){
    super();
    this.state ={
      newKey:{}
    }
  }

  static defaultProps = {
    queue: ['master', 'challenger', 'diamond']
  }

  handleSubmitLeague(e){
    if(this.refs.api_key.value === ''){
      alert("Need to enter key");
    }else {
      id:uuid.v4(),
      this.setState({newKey: {
        api_key: this.refs.api_key.value,
        queue: this.refs.queue.value
      }},function(){
        this.props.addKey(this.state.newKey);
      });
    }
    e.preventDefault();
  }
  render() {
    let queueOptions = this.props.queue.map(queue => {
      return <option key={queue} value={queue}> {queue} </option>
    })
    return (
      <div className="api">
      <h3> API KEY</h3>
      <form onSubmit={this.handleSubmitLeague.bind(this)}>
      <div>
      <label> Enter Key Here </label>
      <input type="text" ref="api_key" />
      </div>
      <div>
      <label> Queue Type </label>
      <select ref="queue">
      {queueOptions}
      </select>
      </div>
      <input type="submit" value="Add Key" />
      </form>
      </div>
    );
  }

}
export default API_call;
