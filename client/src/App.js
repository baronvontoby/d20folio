import React, { Component } from "react";
import {BrowserRouter, Route} from 'react-router-dom';
import NavigationBar from './components/Navbar';
import ViewAllCharacters from './components/pages/ViewAllCharacters';
import "./App.css";
import EditCharacter from './components/pages/EditCharacter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <NavigationBar></NavigationBar>
          <Route exact path='/' component={ViewAllCharacters}></Route>
          <Route exact path='/mychars' component={<div>My Characters</div>}></Route>
          <Route exact path='/new' component={() => <EditCharacter new={true}/>}></Route>
          <Route exact path='/edit/:id' component={({match}) => <div>Hello World</div>}></Route>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
