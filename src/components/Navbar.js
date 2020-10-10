// import React from "react";

// function Navbar(){
//     return(
//         <div>
//             <h1>User App</h1>
//         </div>
//     )

// }
// export default Navbar;

//------------

// const Navbar = () =>{
//     return(
//         <div>
//             <h1>User App</h1>
//         </div>
//     )

// }
// export default Navbar;

// create with rfc tab =>>
import React from 'react'
import PropTypes from "prop-types";

export default function Navbar(props) {
    return (
        <div>
            <h3>{props.title}</h3>
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


