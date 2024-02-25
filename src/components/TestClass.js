import React, { useState } from "react";

class TestClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
        console.log('Child Costructor');
    }
    componentDidMount(){
        console.log("Child Component Did Mount");
        debugger;
        this.setState(
            {
                count: 1,
            }
        )
    }
    componentDidUpdate(){
        console.log("Child Component Did Update")
    }
    render(){
        const {count} = this.state;
        console.log('Child Render')
        return(
            <div>Test div : {count}</div>
        )
    }
}

export default TestClass;