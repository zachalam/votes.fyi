import React from "react";
import { Icon, Label, Menu, Table } from "semantic-ui-react";

class Rankings extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { allCasts } = this.props;

    let leaderboard = [];
    for (const cast of allCasts) {
      const { voter } = cast;
      leaderboard.push(
        <Table.Row>
          <Table.Cell>
            {voter.substring(0, 6)}..{voter.substring(38)}
          </Table.Cell>
          <Table.Cell>{cast.totalVotes} votes</Table.Cell>
        </Table.Row>
      );
    }

    let toRender = (
      <>
        <Table basic="very" celled collapsing style={{ width: "100%" }}>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Label ribbon>First</Label>
              </Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            {leaderboard}
          </Table.Body>
        </Table>
      </>
    );

    return toRender;
  }
}

export default Rankings;
