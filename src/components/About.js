import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utilities/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>About Class component</h1>
        <div>
          LoggedIn User :
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-lg font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h2>This is about page of my learnig journey of React</h2>
        <UserClass name={"Ayush Aggarwal (Class)"} location={"delhi"} />
      </div>
    );
  }
}

export default About;
