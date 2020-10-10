import React, { Component } from 'react'
import PropTypes from 'prop-types';


export default class User extends Component {
    state={
        isVisible : true
    }
    static defaultProps ={
             name : "Bilgi yok",
            department : "Bilgi yok",
             salary : "Bigi yok"
         }

        //  constructor(props){
        //      super(props)
        //      this.state={
        //      isVisible :true
        //      }
        //  }

    render() {
        //Destructing
        const {name,department,salary} = this.props;
        //  const{isVisible}=this.props;
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
            <h4 className="d-inline">{name}</h4>
            <i className="far fa-trash-alt" style={{cursor:"pointer"}}></i>
                    </div>
                  {/* {
                      isVisible ?  */}
                     <div className="card-body">
                      <p className="card-text">Maaş : {salary}</p>
                      <p className="card-text">Departman : {department}</p>
                      </div>
                      {/*  :null
                  } */}
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
    salary : PropTypes.string.isRequired
}
