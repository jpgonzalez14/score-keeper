import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Players } from './../imports/api/players';

import Header from './../imports/ui/Header';
import AddPlayer from './../imports/ui/AddPlayer';
import Player from './../imports/ui/Player';


const renderPlayers = (players)=>{
  return players.map((players)=>{
    return (
      <Player key={players._id} players={players}/>
    )
  });
};


Meteor.startup(() => {

  Tracker.autorun(() => {
    let players = Players.find().fetch();
    let title = 'Score Keeper'
    let jsx = (
      <div>
        <Header title={title}/>
        {renderPlayers(players)}
        <AddPlayer/>
      </div>);
    ReactDOM.render(jsx, document.getElementById('app'));
  });
  //<App/>
  //<Header title='score-keeper'/>
  //<PlayerList/> --> <Player/>
  //<AddPlayer/>
});
