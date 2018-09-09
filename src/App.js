import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from '../src/Components/Common/searchbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="Item-header">{"Find books by title, author, or ISBN"}</header>
        <SearchBar />
      </div>
    );
  }
}

export default App;
