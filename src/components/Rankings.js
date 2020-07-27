import React from "react";
import Confetti from "react-dom-confetti";
import { Icon, Label, Button, Table } from "semantic-ui-react";

class Rankings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      confetti: false,
      currentVoter: 0,
      voterCount: this.props.allCasts.length,
    };

    this.nextVoter = this.nextVoter.bind(this);
    this.lastVoter = this.lastVoter.bind(this);
  }

  componentDidMount() {
    this.setState({ confetti: true });
  }

  nextVoter() {
    let nextVoter = this.state.currentVoter + 1;
    if (nextVoter === this.state.voterCount) nextVoter = 0;
    this.setState({ currentVoter: nextVoter });
  }

  lastVoter() {
    let nextVoter = this.state.currentVoter - 1;
    // go to end
    if (nextVoter === -1) nextVoter = this.props.allCasts.length - 1;
    console.log("nextvoter is", nextVoter);
    this.setState({ currentVoter: nextVoter });
  }

  whenVote(castVote, allVotes) {
    console.log("allVotes");
    console.log(allVotes.l);
    const voteRate = castVote.totalVotes / allVotes.length;

    const percentVote = (voteRate * 100).toFixed(2);

    return (
      <>
        This user voted in {percentVote}% of the total {allVotes.length}{" "}
        measures.
      </>
    );
  }

  howVote(castVote) {
    const supportRate = castVote.supportVotes / castVote.totalVotes;

    const percentVote = (supportRate * 100).toFixed(2);

    if (supportRate > 0.5) {
      return (
        <>
          <div className="large" style={{ color: "green" }}>
            Tends to vote <b>in support</b>.
          </div>
          This user supported {percentVote}% of measures.
        </>
      );
    }

    return (
      <>
        <div className="large" style={{ color: "gray" }}>
          Tends to vote <b>in opposition</b>.
        </div>
        This user supported {percentVote}% of measures.
      </>
    );
  }

  render() {
    let { allCasts, allVotes } = this.props;
    const { currentVoter } = this.state;

    let toRender = (
      <>
        <div className="xlarge">
          <Icon name="user circle" /> DAO Leaderboard
        </div>
        <a
          href={`https://mainnet.aragon.org/#/${this.props.orgName}`}
          target="_blank"
        >
          {this.props.orgName}
        </a>
        <br />
        <br />
        <Table basic='very' celled collapsing style={{ width: "100%" }}>
          <Table.Body>
            <Table.Row positive>
              <Table.Cell style={{ width: "60%" }}>
                <Label ribbon>
                  <div className="large">
                    #{currentVoter + 1} of {allCasts.length}
                  </div>
                </Label>
                <div className="large">{allCasts[currentVoter].voterShort}</div>
                Looking for more info?{" "}
                <a
                  href={`https://etherscan.io/address/${allCasts[currentVoter].voter}`}
                  target="_blank"
                >
                  view on etherscan.io
                </a>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <div className="large">
                  Cast <b>{allCasts[currentVoter].totalVotes} votes</b>.
                </div>
                {this.whenVote(allCasts[currentVoter], allVotes)}
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>{this.howVote(allCasts[currentVoter])}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>

        <Confetti
          active={this.state.confetti}
          config={{
            colors: ["#6D6DAA", "#C7E9FF"],
            elementCount: 120,
            stagger: 10,
            spread: 70,
            angle: 50,
          }}
        />
        <br />
        {this.state.voterCount > 1 ? (
          <div style={{padding:'0.25em', borderRadius:'1em', backgroundColor:'rgba(0,0,0,0.1)'}}>
            <Button icon labelPosition="left" size={'huge'} onClick={this.lastVoter}>
              <Icon name="left arrow" />
              Last
            </Button>{" "}
            <Button icon labelPosition="right" size={'huge'} onClick={this.nextVoter}>
              Next
              <Icon name="right arrow" />
            </Button>
          </div>
        ) : <b>This organization only has 1 voter.</b>}


        <div style={{position:'fixed', cursor: 'pointer', textSize: '2em', top: '5px', left: '5px'}}>
            <a href="/"><Icon className={"home"} /></a>
        </div>
      </>
    );

    return toRender;
  }
}

export default Rankings;
