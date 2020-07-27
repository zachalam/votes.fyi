import React from "react";
import loaderImg from "../assets/customize/animat-customize-color.gif";

class Loader extends React.Component {
  render() {

    let toRender = (
      <>
        Crunching your Aragon DAO numbers...
        <img src={loaderImg} />
      </>
    );

    return toRender;
  }
}

export default Loader;
