import React, { Component } from 'react'

 class Test extends Component {
     constructor(props){
         super(props);
         this.state = {
             a: 10
         }
         console.log("Constructor");
     }
     componentDidMount() {
         console.log("componentDidMount");
         //Api istekleri burda yapılır
         this.setState({
             a: 20
         })
     }
     componentDidUpdate(prevProps, prevState) {
         console.log("component Did Update");
     }
     shouldComponentUpdate(nextProps, nextState) {
         console.log("should Component Update");
         return true;
     }
     
     
     
    render() {
        console.log("Render");
        return (
            <div>
                
            </div>
        )
    }
} export default Test;
