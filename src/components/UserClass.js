import React, { useState } from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      userInfo:{
        name: "Dummy",
      }
    };
    console.log("child cons")
  }
  async componentDidMount(){
    //console.log("child comp did mount");
    const data = await fetch("https://api.github.com/users/chenchaiah23");
    const json = await data.json();
    //console.log(json);
    this.setState({
      userInfo: json,
    })
  }
  render() {
    console.log("child render")
    const { count,userInfo } = this.state;
    debugger;
    return (
      <div className="user-card">
        <h1>Count : {count}</h1>
        <button onClick={() => {
            this.setState({
                count: this.state.count + 1,
            })
        }}>Count Inc</button>
        <h2>Name: {userInfo.login}</h2>
        <h3>Location </h3>
        <h3>contact: test@gmail.com</h3>
      </div>
    );
  }
}

export default UserClass;
