import React from "react";
import Logo from "../assets/logo/votes.fyi.png";

class Loader extends React.Component {
  render() {

    let toRender = (
      <>
        <img src={Logo} style={{width:'50%'}} />
        Crunching your Aragon DAO numbers...

      </>
    );

    return toRender;
  }
}

export default Loader;
