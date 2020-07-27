import React from "react";
import Logo from "../assets/logo/votes.fyi.png";
import { Animated } from "react-animated-css";
import { Form, Button, Input } from "semantic-ui-react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orgName: "",
    };
  }

  render() {
    let toRender = (
      <>
        <Animated
          animationIn="bounceInDown"
          isVisible={true}
          animationInDuration={1000}
        >
          <>
            <img src={Logo} style={{ width: "75%" }} />
          </>
        </Animated>

        <div
          className="xlarge"
          style={{ paddingTop: "20px", paddingBottom: "20px" }}
        >
          DAO Leaders
        </div>
        <div style={{ marginBottom: "20px" }}>
          Provide an{" "}
          <a href="https://aragon.org" target="_blank">
            Aragon DAO
          </a>{" "}
          address and we'll generate a leaderboard based on the{" "}
          <b>most active voters</b>.
        </div>

        <Form onSubmit={() => this.props.setOrgName(this.state.orgName)}>
          <Input
            size="huge"
            value={this.state.orgName}
            placeholder="governance.aragonproject.eth"
            onChange={(e) => {
              this.setState({ orgName: e.target.value });
            }}
          />{" "}
          <Button primary type="submit" size="huge">
            Go
          </Button>
        </Form>
        <div>
          Unsure? Try{" "}
          <a
            href="#"
            onClick={() => {
              window.location.hash = "governance.aragonproject.eth";
              window.location.reload();
            }}
          >
            governance.aragonproject.eth
          </a>
        </div>
      </>
    );

    return toRender;
  }
}

export default Login;
