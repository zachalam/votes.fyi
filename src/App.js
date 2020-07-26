import React from "react";
import aragonVote from "./services/aragon";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      votingDetails: {}
    }
  }

  async componentDidMount() {
    const votingDetails = await aragonVote("governance.aragonproject.eth");
    this.setState({votingDetails});
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
    const {votingDetails} = this.state;
    const { allCasts } = votingDetails;

    if(!allCasts) {
      console.log("wooooooasgasggagagasgasg")
      // loading...
      return (
        <div className="App">
          <header className="App-header">
            loading...
          </header>
        </div>
      );
    }
    return (
      <div className="App">
        <header className="App-header">
          hellolllllllsaf
          {this.Leaderboard(allCasts)}
        </header>
      </div>
    );
  }
}

export default App;
