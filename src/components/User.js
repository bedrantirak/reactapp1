import React, { Component } from 'react'
import PropTypes from 'prop-types';


export default class User extends Component {
    static defaultProps ={
             name : "Bilgi yok",
            department : "Bilgi yok",
             salary : "Bigi yok"
         }
         
    render() {
        //Destructing
        const {name,department,salary} = this.props;
        return (
            <div>
                {/* <form>
                    <input type="text" />
                    <button>Send</button>
                </form> */}
                <ul>
                    <li>İsim : {name} </li>
                    <li>Departman : {department}</li>
                    <li>Maaş : {salary}</li>
                   
                </ul>
                
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
