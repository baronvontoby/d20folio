import React, { Component } from "react";
import {BrowserRouter, Route} from 'react-router-dom';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <p>Navbar will go here</p>
        <Route exact path='/' component={() => <div>Welcome to the Magical World of Harry Potter</div>}></Route>
        <Route exact path='/mychars' component={() => <div>Hello World</div>}></Route>
        <Route exact path='/new' component={() => <div>Hello World</div>}></Route>
        <Route exact path='/edit/:id' component={({match}) => <div>Hello World</div>}></Route>
          
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
