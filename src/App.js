//Popados Nik Khandwala
import React, { Component } from 'react';
import './App.css';
import uuid from 'uuid';
import ReactDOM from 'react-dom';
import Projects from './Components/Projects.js';
import AddProject from './Components/AddProject.js'

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
    ]
  }
}

componentWillMount(){
  this.setState({projects:
    [{
      id:uuid.v4(),
      title: 'BusinessWebsite',
      category:'WebDesign'
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
  render() {

    return (
      <div className="App">
      <AddProject addProject={this.handleAddProject.bind(this)}/>
      <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />

      </div>

    );
  }
}

export default App;
