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
            case "ADD_USER":
               return { 
                   ...state,
                   users :[...state.users , action.payload]
               }
           default:
               return state

    }
}

export class UserProvider extends Component {
    state = {
        users : [
          {
            id:"unique2",
            name :"Bedran Tırak",
            department : "Yazılım",
            salary : "4000"
          },
          {
           id:"unique1",
           name :"Evin Tırak",
           department : "Uretim",
           salary : "5000"
         },
         {
           id:"unique3",
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

