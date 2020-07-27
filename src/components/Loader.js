import React from "react";
import Logo from "../assets/logo/votes.fyi.png";
import { Animated } from "react-animated-css";

class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibile: true,
    };
  }

  componentDidMount() {
    setInterval(() => { this.setState({ visible: false }) }, 1012);
    setInterval(() => { this.setState({ visible: true }) }, 1024);

  }

  render() {
    let toRender = (
      <>
      <br />
      <br />
      <br />
        <Animated
          animationIn="pulse"
          isVisible={this.state.visible}
          animationInDuration={1000}
        >
          <>
            <img src={Logo} style={{ width: "35%" }} />
          </>
        </Animated>

        <h1>Crunching your DAO votes...</h1>
        <h3><b>{this.props.orgName}</b></h3>
      </>
    );

    return toRender;
  }
}

export default Loader;
