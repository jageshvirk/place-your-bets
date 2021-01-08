import React from 'react';
import { PropTypes } from 'prop-types';
import Button from './Button';

const PlayInstructions = (props) => {
  const { onCloseInstructions } = props;
  return (
    <div className="playInstructions">
      <ul>
        <li>play with minimum of 2 and max of 4 people</li>
        <li>each player must have a name</li>
        <li>enter a bet for each player between 1 and 6 to start the game</li>
        <li>each player will be given 200 cash at the start</li>
        <li>roll the dice</li>
        <li>player who has matching bet, wins the round</li>
        <li>player gains 20 cash on winning each round but loses 50 cash on losing</li>
        <li>game ends when there remains only one winner</li>
        <h3>hope you enjoy!</h3>
        <Button buttonText="close" onButtonClick={onCloseInstructions} />
      </ul>
    </div>
  );
};

PlayInstructions.propTypes = {
  onCloseInstructions: PropTypes.func.isRequired
};

export default PlayInstructions;
