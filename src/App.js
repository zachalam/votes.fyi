import React from "react";
import { ThemeProvider } from "@chakra-ui/core";
import theme from "./theme";
import aragonVote from "./services/aragon";
import Loader from "./components/Loader";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votingDetails: {},
    };
  }
  async componentDidMount() {
    console.log(window.location);
    setTimeout(() => {
      window.location = "/#looo";
    }, 3000);
    const votingDetails = await aragonVote("governance.aragonproject.eth");
    this.setState({ votingDetails });
  }

  Leaderboard = (casts) => {
    console.log("casts is..");
    console.log(casts);

    let leaderboard = [];
    for (const [key, cast] of Object.entries(casts)) {
      leaderboard.push(<div>{key}</div>);
    }
    return leaderboard;
  };

  render() {
    const { votingDetails } = this.state;
    const { allCasts } = votingDetails;

    let toRender = (
      <Loader />
    );

    if (allCasts) {
      toRender = (
        <div className="App">
          <header className="App-header">
            hellolllllllsaf
            {this.Leaderboard(allCasts)}
          </header>
        </div>
      );
    }

    return <ThemeProvider theme={theme}>
      {toRender}
      </ThemeProvider>;
  }
}

export default App;
