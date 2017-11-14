//Popados Nik Khandwala
import React, {Component} from 'react';
import uuid from 'uuid';

class AddProject extends Component {
  constructor(){
    super();
    this.state ={
      newProject:{}
    }
  }
  static defaultProps = {
    categories: ['Web Design','Business Website','league of legends']
  }
  handleSubmit(e){
    if(this.refs.title.value === ''){
      alert("Title is required");
    }else {
      id:uuid.v4(),
      this.setState({newProject: {
        title: this.refs.title.value,
        category: this.refs.category.value
      }}, function(){
        //console.log(this.state);
        this.props.addProject(this.state.newProject);
      });
    }
    //console.log(this.refs.title.value);
    e.preventDefault();
  }

  render() {
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value={category}> {category} </option>
    })
    return (
      <div>
        <h3>Basic Start</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
            <div>
              <label> Project Name (Title) </label> <br />
              <input type="text" ref="title" />
      </div>
      <div>
        <label>Category</label> <br />
        <select ref="category">
          {categoryOptions}
        </select>
      </div>
      <input type="submit" value="Submit" />
    </form>
  </div>
    );
  }
}

export default AddProject;
