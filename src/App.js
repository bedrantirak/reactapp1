import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Users from "./components/Users";


export default class App extends Component {
    
  state = {
   users : [
     {
       id:1,
       name :"Bedran Tırak",
       department : "Yazılım",
       salary : "4000"
     },
     {
      id:2,
      name :"Evin Tırak",
      department : "Uretim",
      salary : "5000"
    },
    {
      id:3,
      name :"Hasret Tırak",
      department : "Pazarlama",
      salary : "6000"
    }

   ]
  }
  deleteUser = (id) =>{
    this.setState({
      users : this.state.users.filter(user => id !== user.id)
    })
  }

  render(){
  return (
    <div className="container" >
    {/* <h4 style={{color:"blue",fontSize:"30px"}}>App Component</h4> */}

     <Navbar 
     title = "User App"
     />
     <hr/>
     <Users deleteUser={this.deleteUser} users = {this.state.users}  />
    </div>
  );
}
}


