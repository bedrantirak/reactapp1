import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Users from "./components/Users";
import AddUser from "./components/AddUser";
import Test from "./components/Test";
import NotFound from "./components/NotFound";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";

export default class App extends Component {
  

  render(){
  return (
    <Router>
    <div className="container" >
    <Test test="deneme"/>
     <Navbar 
     title = "User App"
     />
     <hr/>
     <Switch>
     <Route exact path ="/" component={Users}/>
     <Route exact path ="/add" component={AddUser}/>
     <Route  component={NotFound}/>
     </Switch>
    </div>
    </Router>
  );
}
}


