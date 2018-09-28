import React from 'react';

import { Players } from './../api/players';

import Header from './Header';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';

export default class App extends React.Component{
  render(){
    let players = Players.find({},{sort: {score: -1}}).fetch();
    let title = 'Score Keeper';
    return(
        <div>
          <Header title={title}/>
          <PlayerList players={players}/>
          <AddPlayer/>
        </div>
    );
  }
}
