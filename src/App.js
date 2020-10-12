import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Users from "./components/Users";
import AddUser from "./components/AddUser";
import Test from "./components/Test";

export default class App extends Component {
  

  render(){
  return (
    <div className="container" >
      <Test test="deneme"/>
     <Navbar 
     title = "User App"
     />
     <hr/>
     <AddUser/>
     <Users />
    </div>
  );
}
}


