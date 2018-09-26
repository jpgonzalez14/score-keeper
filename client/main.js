import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Players } from './../imports/api/players'


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

const handleSubmit = (e) => {
  let playerName = e.target.playerName.value;

  e.preventDefault();

  if (playerName) {
    e.target.playerName.value = '';
    Players.insert({
      name: playerName,
      score: 0
    });
  } else {
    console.log('error al crear jugador');
  }

};

Meteor.startup(() => {

  Tracker.autorun(() => {
    let players = Players.find().fetch();
    let name = 'John';
    let title = 'Score Keeper'
    let jsx = (
      <div>
        <h1>{title}</h1>
        <p>Hello {name}!</p>
        <p>User info</p>
        {renderPlayers(players)}
        <form onSubmit={handleSubmit}>
          <input type="text" name="playerName" placeholder="Player Name"/>
          <button type="submit">Add Player</button>
        </form>
      </div>);
    ReactDOM.render(jsx, document.getElementById('app'));
  });


});
