import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListItem from './components/ListItem';

class App extends Component {

  constructor(props) {

    super(props);
    this.state = {todoItems: [], value: ""};

    this.keyCount = 0;    
    
    this.handleChange = this.handleChange.bind(this);
    this.newItemHandler = this.newItemHandler.bind(this);
    //this.handleDoneToggle = this.handleDoneToggle.bind(this);
    this.getKey = this.getKey.bind(this);
    
  }

  newItemHandler(e) {
    const arr = this.state.todoItems;
    arr.push({value: this.state.value, key: this.getKey()});
    this.setState({todoItems: arr});
  }

  getKey() {return this.keyCount++}

  handleChange(e){
    this.setState({[e.target.name]: e.target.value})
  }

  handleDelete = (e) =>{
    this.setState({todoItems: []});
  }

  render() {
    const listItems = this.state.todoItems.map((item, index) =>
    <ListItem key={item.key} name={item.value} /> 
    );

    return (
      
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="List">
          <h1 className="todoHeader">Todo List</h1>
          <ul>
            {listItems}
          </ul>
          <form className="createItem">
            <input type="text" name="value" value={this.state.value} onChange={this.handleChange}/>
            <input type="button" value="+" onClick={this.newItemHandler}/>
          </form>
          <button onClick={this.handleDelete}>Delete Items</button>
        </div>
      </div>
    );
  }
}

export default App;
