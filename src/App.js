import React, {Component} from 'react';
import User from "./components/User";
import './App.css';

export default class App extends Component {
  render(){
  return (
    <div className="App">
     <h4>App Component</h4>
     <User/>
     <User/>
     <User/>
    </div>
  );
}
}


