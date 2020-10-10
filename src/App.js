import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar';

export default class App extends Component {
  render(){
  return (
    <div className="container" >
      <h4>App Component</h4>
    {/* <h4 style={{color:"blue",fontSize:"30px"}}>App Component</h4> */}
     {/* <h4 className="header">App Component</h4> */}
     <Navbar/>
    </div>
  );
}
}


