import React from "react";
import { Grid } from "semantic-ui-react";

import aragonVote from "./services/aragon";
import Loader from "./components/Loader";
import Login from "./components/Login";
import Rankings from "./components/Rankings";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votingDetails: {},
      orgName: "",
    };
  }
  async componentDidMount() {
    const { hash } = window.location;
    const orgName = hash.split("#")[1];
    this.setState({orgName})
    if (orgName) {
      // org provided in url.
      this.runVoteLookup(orgName);
    }
  }

  setOrgName = (orgName) => {
    this.setState({orgName});
  }

  runVoteLookup = async (orgName) => {
    const votingDetails = await aragonVote(orgName);
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
    const { allCasts, allVotes } = votingDetails;

    let toRender = <Login orgName={orgName} />;

    if (orgName) {
      // orgName provided but not sure about data yet
      toRender = <Loader orgName={orgName} />;
    }

    if (allCasts) {
      // orgName and data are both here.. display results
      toRender = (
        <div className="App">
          <header className="App-header">
            <Rankings orgName={orgName} allVotes={allVotes} allCasts={allCasts} />
          </header>
        </div>
      );
    }

    // wrap in template
    return (
      <>
        <Grid
          textAlign="center"
          style={{ height: "100vh" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 550, padding: "2em" }}>
            {toRender}
          </Grid.Column>
        </Grid>
      </>
    );
  }
}

export default App;
