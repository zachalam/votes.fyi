import React from "react";
import { Icon, Label, Menu, Table } from "semantic-ui-react";

class Rankings extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    let leaderboard = [];
    for (const [key, cast] of Object.entries(this.props.allCasts)) {
        leaderboard.push(            <Table.Row>
            <Table.Cell>{key.substring(0, 6)}..{key.substring(38)}</Table.Cell>
            <Table.Cell>{cast.length} votes</Table.Cell>
          </Table.Row>);
      }

      
    let toRender = (
      <>
        <Table basic='very' celled collapsing style={{width:'100%'}}>
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
