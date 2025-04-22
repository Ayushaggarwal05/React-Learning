import React from "react";

// This file contains the information about the making of project in old react way!!
//This is class based react component
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      userInfo: {
        name: "dummy",
        location: "Default",
        avatar_url: "http://dummy.com",
      },
    };
  }

  async componentDidMount() {
    // used for api call

    const data = await fetch("https://api.github.com/users/Ayushaggarwal05");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  render() {
    const { count } = this.state;
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <h1>Count : {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}>
          Count Increase
        </button>
        <button
          onClick={() => {
            this.setState({
              count: 0,
            });
          }}>
          Reset
        </button>
        <h2>Name : {name}</h2>
        <img src={avatar_url} />
        <h3>Location : {location}</h3>
        <h4>Contact : 8595991259@ibl</h4>
      </div>
    );
  }
}

export default UserClass;
