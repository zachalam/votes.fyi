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
        <Animated
          animationIn="pulse"
          isVisible={this.state.visible}
          animationInDuration={1000}
        >
          <>
            <img src={Logo} style={{ width: "75%" }} />
          </>
        </Animated>

        <div class="xlarge" style={{paddingTop:'20px',paddingBottom:'20px'}}>Crunching votes...</div>
        <div class="medium" style={{color:'grey'}}><b>{this.props.orgName}</b></div>
      </>
    );

    return toRender;
  }
}

export default Loader;
