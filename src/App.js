import React from "react";
import theme from "./theme";
import aragonVote from "./services/aragon";
import Loader from "./components/Loader";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votingDetails: {},
      orgName: "governance.aragonproject.eth"
    };
  }
  async componentDidMount() {
    console.log(window.location);
    setTimeout(() => {
      window.location = "/#looo";
    }, 3000);
    const votingDetails = await aragonVote(this.state.orgName);
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
    const { votingDetails, orgName } = this.state;
    const { allCasts } = votingDetails;

    let toRender = (
      <Loader orgName={orgName} />
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

    return <>
      {toRender}
      </>;
  }
}

export default App;
