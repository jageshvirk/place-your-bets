import React from 'react';
import { PropTypes } from 'prop-types';
import Button from './Button';
import { GAME_CONSTANTS } from '../../constants';

const PlayInstructions = (props) => {
  const { onCloseInstructions } = props;

  const {
    MIN_PLAYERS,
    MAX_PLAYERS,
    MIN_BET,
    MAX_BET,
    INIT_MONEY,
    WIN_MONEY,
    LOSS_MONEY
  } = GAME_CONSTANTS;

  return (
    <div className="playInstructions" onClick={(e) => e.stopPropagation()}>
      <ul>
        <li>{`play with minimum of ${MIN_PLAYERS} and max of ${MAX_PLAYERS} people`}</li>
        <li>each player must have a name</li>
        <li>{`enter a bet for each player between ${MIN_BET} and ${MAX_BET} to start the game`}</li>
        <li>{`each player will be given ${INIT_MONEY} cash at the start`}</li>
        <li>roll the dice</li>
        <li>player who has matching bet, wins the round</li>
        <li>{`player gains ${WIN_MONEY} cash on winning each round but loses ${LOSS_MONEY} cash on losing`}</li>
        <li>game ends when there remains only one winner</li>
        <h3>hope you enjoy!</h3>
      </ul>
      <Button buttonText="close" onButtonClick={onCloseInstructions} />
    </div>
  );
};

PlayInstructions.propTypes = {
  onCloseInstructions: PropTypes.func.isRequired
};

export default PlayInstructions;
