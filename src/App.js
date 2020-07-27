import React from "react";
import { Grid} from 'semantic-ui-react'

import aragonVote from "./services/aragon";
import Loader from "./components/Loader";
import Login from "./components/Login";
import Rankings from "./components/Rankings";

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
            <Rankings allCasts={allCasts} />
          </header>
        </div>
      );
    }

    // wrap in template
    return <>
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 500, paddingTop:'1em' }}>
      {toRender}
      </Grid.Column>
      </Grid>

      </>;
  }
}

export default App;
