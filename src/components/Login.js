import React from "react";
import Logo from "../assets/logo/votes.fyi.png";
import { Animated } from "react-animated-css";

class Login extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    let toRender = (
      <>
        <Animated
          animationIn="pulse"
          isVisible={true}
          animationInDuration={1000}
        >
          <>
            <img src={Logo} style={{ width: "75%" }} />
          </>
        </Animated>

        <h1>Enter Aragon DAO address:</h1>
        <h3><b>{this.props.orgName}</b></h3>
      </>
    );

    return toRender;
  }
}

export default Login;
