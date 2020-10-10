import React, { Component } from 'react'
import PropTypes from 'prop-types';


export default class User extends Component {
    state={
        isVisible : false
    }
    static defaultProps ={
             name : "Bilgi yok",
            department : "Bilgi yok",
             salary : "Bigi yok"
         }
      onClickEvent = (e) =>{
         this.setState({
             isVisible : !this.state.isVisible
            
         })
        
      }
      onDeleteUser = (e) =>{
          const {id,deleteUser} = this.props;
          deleteUser(id);
      }

    render() {
        //Destructing
        const {name,department,salary} = this.props;
          //const{isVisible}=this.props;
        return (
            <div className="col-md-8 mb-4">
                {/* <form>
                    <input type="text" />
                    <button>Send</button>
                </form> */}
                {/* <ul>
                    <li>İsim : {name} <i className="far fa-trash-alt"></i></li>
                    <li>Departman : {department}</li>
                    <li>Maaş : {salary}</li>
                   
                </ul> */}
                <div className="card">
                    <div className="card-header d-flex justify-content-between">
            <h4 className="d-inline" onClick={this.onClickEvent}>{name}</h4>
            <i onClick={this.onDeleteUser} className="far fa-trash-alt" style={{cursor:"pointer"}}></i>
                    </div>
                   {/* {
                      isVisible ?   */}
                     <div className="card-body">
                      <p className="card-text">Maaş : {salary}</p>
                      <p className="card-text">Departman : {department}</p>
                      </div> 
                      {/* :null
                  }  */}
                    </div> 


                
            </div>
        )
    }
}
// User.defaultProps ={
//     name : "Bilgi yok",
//     department : "Bilgi yok",
//     salary : "Bigi yok"
// }
User.propTypes ={
    name : PropTypes.string.isRequired,
    department : PropTypes.string.isRequired,
    salary : PropTypes.string.isRequired,
    deleteUser : PropTypes.func.isRequired
}
