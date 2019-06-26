import React, { Component } from "react";
import {BrowserRouter, Route} from 'react-router-dom';
import NavigationBar from './components/Navbar';
import ViewAllCharacters from './components/pages/ViewAllCharacters';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <NavigationBar></NavigationBar>
          <Route exact path='/' component={ViewAllCharacters}></Route>
          <Route exact path='/mychars' component={ViewAllCharacters}></Route>
          <Route exact path='/new' component={() => <div>Hello World</div>}></Route>
          <Route exact path='/edit/:id' component={({match}) => <div>Hello World</div>}></Route>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
