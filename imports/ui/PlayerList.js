import React from 'react';
import PropTypes from 'prop-types';
import Player from './Player';

export default class PlayerList extends React.Component{

  renderPlayers() {
    if (this.props.players.length === 0) {
      return (
        <p>Add your first player to get started</p>
      )
    } else {
      return this.props.players.map((players)=>{
        return (
          <Player key={players._id} players={players}/>
        )
      });
    }
  };

  render(){
    return(
      <div>
        {this.renderPlayers()}
      </div>
    );
  }
}
PlayerList.propTypes = {
  players: PropTypes.array.isRequired
}
