import React, { Component } from 'react'

export default class User extends Component {
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
