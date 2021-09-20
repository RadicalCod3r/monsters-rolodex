import React, { Component } from 'react';
import './App.css';
import { CardList } from './Components/CardList/cardList.component';
import { SearchBox } from './Components/SearchBox/searchBox.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };

    // this.searchBoxChanged = this.searchBoxChanged.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({monsters: users}));
  }

  searchBoxChanged = (e) => {
    this.setState({searchField: e.target.value});
  }

  render() {
    const { monsters, searchField } = this.state;
    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField;

    const filteredMonsters = monsters.filter(monster => {
      if(monster.name.toLowerCase().includes(searchField.toLowerCase())) {
        return true;
      }else {
        return false;
      }
    })
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="Search Monsters" handleChange={this.searchBoxChanged} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
