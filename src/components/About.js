import TestClass from "./TestClass";
import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
    constructor(props){
        super(props);
        console.log("parent cons")
    }
    componentDidMount(){
        console.log("parent did mount")
    }
    componentDidUpdate(){
        console.log("Parent Component Did update");
    }
    render() {
        console.log("parent render")
        return(
            <div>
            <h1>About class component</h1>
            {/* <User name={"myname from function component"}/> */}
            {/* <UserClass name={"myname from class component"}/> */}
            <TestClass/>
        </div>
        )
    }
}


export default About;