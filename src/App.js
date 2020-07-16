import React, { Component } from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField:''
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>response.json())
    .then(users => this.setState({ monsters: users }))
  }
  handleChange = e =>{
    this.setState({searchField:e.target.value})
  }
  render() {
    const {monsters,searchField}=this.state;
    const filteredMonsters = monsters.filter(monster=> monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
      <h1> Monsters Rolodex </h1>
      <SearchBox placeholder={'searchMonsters'} handleChange={this.handleChange}/>
      
      <CardList monsters={filteredMonsters}/>
        
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <p>{this.state.name}</p>
          <button onClick={() => this.setState({ name: 'Harsh' })}>Change Name</button>
        </header> */}

      </div>
    );
  }
}

export default App;
