import React from 'react';
import PropTypes from 'prop-types';
import { Players } from './../api/players';

export default class Player extends React.Component{
  render(){
    return(
        <p>
          {this.props.players.name} has {this.props.players.score} point(s).
          <button onClick={()=>{Players.update(this.props.players._id, {$inc:{score: 1}})}}>+1</button>
          <button onClick={()=>{Players.update(this.props.players._id, {$inc:{score: -1}})}}>-1</button>
          <button onClick={()=>{Players.remove(this.props.players._id)}}>Delete</button>
        </p>
    );
  }
}
Player.propTypes = {
  players: PropTypes.object.isRequired
}
