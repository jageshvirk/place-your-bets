import React from 'react';
import { PropTypes } from 'prop-types';

const Player = (props) => {
  const { player } = props;

  const { playerName, playerDesc, money, wins, loses, bet } = player;

  return (
    <div className={money > 0 ? 'player' : 'player lostPlayer'}>
      <div className="playerAttribute">{`🦸‍♂️ ${playerName}`}</div>
      <div className="playerAttribute">{`💪 💪 💪 ${playerDesc}`}</div>
      <div className="playerAttribute">{`💲 💲 💲 ${money}`}</div>
      <div className="playerAttribute">{`🏅 🏅 🏅 ${wins}`}</div>
      <div className="playerAttribute">{`☹️ ☹️ ☹️ ${loses}`}</div>
      <div className="playerAttribute playerBet">{`your bet ${bet}`}</div>
    </div>
  );
};

Player.propTypes = {
  player: PropTypes.shape({
    playerName: PropTypes.string,
    playerDesc: PropTypes.string,
    money: PropTypes.number,
    wins: PropTypes.number,
    loses: PropTypes.number,
    bet: PropTypes.string
  })
};

Player.defaultProps = {
  player: {}
};

export default Player;
