import React from 'react';
import './App.css';
import VotingBox from './components/VotingBox'

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <hr />
        <h1>Voting App </h1>
        <hr />
        <VotingBox title="VOTING_ITEMS" />
        <hr />
        {/* <VotingBox title="NON_VEG_ITEMS" /> */}
      </div>
    )
  }
}

export default App;
