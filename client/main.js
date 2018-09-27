import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Players } from './../imports/api/players';

import Header from './../imports/ui/Header';
import AddPlayer from './../imports/ui/AddPlayer';


const renderPlayers = (players)=>{
  return players.map((players)=>{
    return (
      <div key={players._id}>
        <p>
          {players.name} has {players.score} point(s).
          <button onClick={()=>{Players.update(players._id, {$inc:{score: 1}})}}>+1</button>
          <button onClick={()=>{Players.update(players._id, {$inc:{score: -1}})}}>-1</button>
          <button onClick={()=>{Players.remove(players._id)}}>Delete</button>
        </p>
      </div>
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
