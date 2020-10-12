
// create with rfc tab =>>
import React from 'react'
import PropTypes from "prop-types";

export default function Navbar(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <ul>
                <li>
                    <a  href ="/">Users</a>
                    </li>
                <li>
                    <a href ="/add">Add Users</a>
                    </li>
            </ul>
        </div>
    )
}
Navbar.propTypes ={
   title : PropTypes.string.isRequired
}
Navbar.defaultProps ={
    //navbar a title göndermezsekte hata almayız default olara default App eklenir
    title:"default App"

}


