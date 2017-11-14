//Popados Nik Khandwala
import React, { Component } from 'react';
import './App.css';
import uuid from 'uuid';
import ReactDOM from 'react-dom';
import Projects from './Components/Projects.js';
import AddProject from './Components/AddProject.js'
import API_call from './Components/AddKey.js'
import restKeys from './Components/API_List.js'


class App extends Component {
  constructor() {
    super();
    this.state= {
      projects: [
      //   {
      //     title: 'BusinessWebsite',
      //     category: 'WebDesign'
      // },{
      //   title: 'Social App',
      //   category: 'Mobile development'
      // },
      // {
      //   title: 'eCommerece Cart',
      //   category: 'Web Development'
      // },
      // {
      //   title: 'website two',
      //   category: 'league of legends'
      //
      // },
      // {
      //   title: 'website three',
      //   category: 'bigdata'
      //
      // }
    ],
    keys: []

  }
}

componentWillMount(){
  this.setState({projects:
    [{
      id:uuid.v4(),
      title: 'BusinessWebsite',
      category:'Web Design'
    },
    {
      id:uuid.v4(),
      title: 'eCommerece Cart',
      category: 'Web Development'
    },
    {
      id:uuid.v4(),
      title: 'website two',
      category: 'league of legends'
    }]
});
  this.setState({keys:
    [{
      key_id:uuid.v4(),
      api_key: 'first key',
      queue: 'master'},

      {key_id:uuid.v4(),
      api_key: 'second key',
      queue: 'diamond'}
  ]
});
}


handleAddProject(project){
  //console.log(project);
  let projects = this.state.projects;
  projects.push(project);
  this.setState({projects:projects});
}
handleDeleteProject(id){
  let projects = this.state.projects;
  let index = projects.findIndex(x=> x.id === id);
  projects.splice(index, 1);
  this.setState({projects:projects});
}
newKeyAdded(key){
  let keys = this.state.keys;
  keys.push(key);
  this.setState({keys:keys});
}
deleteKey(id_key){
  let keys = this.state.keys;
  let index_keys = keys.findIndex(x=> x.id_key === id_key);
  keys.splice(index_keys, 1);
  this.setState({keys:keys});
}

  render() {

    return (
      <div className="App">
      <AddProject addProject={this.handleAddProject.bind(this)}/> <br />
      <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />
      <API_call addKey={this.newKeyAdded.bind(this)}/> <br />
      <restKey keys={this.state.keys} onDelete={this.deleteKey.bind(this)} />
      </div>

    );
  }
}

export default App;
