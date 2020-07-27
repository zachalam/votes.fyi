import { connect } from "@aragon/connect";
import { Voting } from "@aragon/connect-thegraph-voting";

async function aragonVote(theOrganization) {
  // establish an aragon org..
  const org = await connect(theOrganization, "thegraph");

  // fetch the voting app that belonging to this organization
  const votingApp = await org.app("voting");

  // gather useful vote information for this app.
  let allCasts = [];
  let allVotes = {};

  // create voting app based on address.
  const voting = new Voting(
    votingApp.address,
    "https://api.thegraph.com/subgraphs/name/aragon/aragon-voting-mainnet"
  );

  // grab all votes from the app
  const votes = await voting.votes();

  for (const vote of votes) {
    // each vote (or poll) cast in this org.
    /* 
        appAddress: "0x277bfcf7c2e162cb1ac3e9ae228a3132a75f83d4"
        creator: "0xe53c8566e831b127c603c968158c59091a5e380e"
        executed: false
        id: "appAddress:0x277bfcf7c2e162cb1ac3e9ae228a3132a75f83d4-voteId:0x27"
        metadata: "Do you approve AGP-143: Fundraising Maintenance? (Link: https://raw.githubusercontent.com/aragon/AGPs/bf5a8eb0a3436072bcb5b2fa818c94cd507e2121/AGPs/AGP-143.md) (SHA256: 69d7e593d6324358b40e2aa61dfef636f4c04a11d8afaae012e79a1ae4161e0f)"
        minAcceptQuorum: "0"
        nay: "2900000000000000000000"
        orgAddress: "0x2de83b50af29678774d5abc4a7cb2a588762f28c"
        script: "0x00000001"
        snapshotBlock: "9089520"
        startDate: "1576080045"
        supportRequiredPct: "500000000000000000"
        votingPower: "39609523809523809540000000"
        yea: "910656589901319474703579"
    */
    const casts = await vote.casts();
    for (const cast of casts) {
      // each cast made towards a vote in this org..
      /* 
        id: "appAddress:0x277bfcf7c2e162cb1ac3e9ae228a3132a75f83d4-voteId:0x18-castNum:0.0"
        supports: true
        voteId: "appAddress:0x277bfcf7c2e162cb1ac3e9ae228a3132a75f83d4-voteId:0x18"
        voter: "0xb8506be2c700641873108a1a47d8e509157cf23
        */
      const voterId = cast.voter;

      // find existing voter..
      const foundVoter = allCasts.findIndex(
        (element) => element.voter === voterId
      );

      const voterShort = voterId.substring(0, 8) + ".." + voterId.substring(36);
      if (foundVoter > -1) {
        // already keeping track of this voter, updated
        const voterRecord = {
          voter: cast.voter,
          voterShort,
          supportVotes:
            (cast.supports ? 1 : 0) + allCasts[foundVoter].supportVotes,
          totalVotes: 1 + allCasts[foundVoter].totalVotes,
        };
        allCasts[foundVoter] = voterRecord;
      } else {
        // first time seeing this voter.
        allCasts.push({
          voter: cast.voter,
          voterShort,
          supportVotes: cast.supports ? 1 : 0,
          totalVotes: 1,
        });
      }
    }
  }

  // sort all casts..
  allCasts.sort((b, a) => {
    return a.totalVotes - b.totalVotes;
  });
  const bundle = { allVotes: votes, allCasts };
  console.log("bundle is");
  console.log(bundle);
  return bundle;
}

export default aragonVote;
