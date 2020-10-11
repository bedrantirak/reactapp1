import React, { Component } from 'react'
const UserContext = React.createContext();
//Provider,Consumer
const reducer = (state,action)=>{
    switch(action.type){
        case "DELETE_USER":
            return{
                ...state,
                users: state.users.filter(user => action.payload !== user.id)
            }
           default:
               return state

    }
}

export class UserProvider extends Component {
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
     
        ],
        dispatch : action =>{
            this.setState(state => reducer(state,action))

        }
       }
    render() {
        return (
       <UserContext.Provider value ={this.state}>
           {this.props.children}
       </UserContext.Provider>
        )
    }
}
const UserConsumer = UserContext.Consumer;
export default UserConsumer;

