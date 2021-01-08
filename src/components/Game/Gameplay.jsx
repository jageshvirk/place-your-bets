import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { ROUTE_CONSTANTS } from '../../constants';
import { Button } from '../Common';
import { getRandomInt } from '../util';
import './Gameplay.css';
import Player from './Player';
import { playerAction } from '../../redux/actions';

const Gameplay = (props) => {
  const {
    history: { push }
  } = props;

  const [players, setPlayers] = useState([]);
  const [opposingBet, setOpposingBet] = useState();
  const [winner, setWinner] = useState('');
  const [gameOver, setGameOver] = useState(false);

  const gamePlayers = useSelector((state) => state.player.gamePlayers);

  const dispatch = useDispatch();

  useEffect(() => {
    return () => dispatch(playerAction.setPlayers([]));
  }, []);

  useEffect(() => {
    if (gamePlayers?.length) {
      const setGamePlayers = gamePlayers.map((gamePlayer) => {
        return { ...gamePlayer };
      });
      setPlayers([...setGamePlayers]);
    }
  }, [gamePlayers]);

  const onDiceRoll = () => {
    const number = getRandomInt(1, 6);
    const updatedPlayers = [];
    players.forEach((player) => {
      const { bet, wins, loses, money } = player;
      if (money > 0) {
        if (Number(bet) === number) {
          updatedPlayers.push({
            ...player,
            wins: wins + 1,
            money: money + 50
          });
        } else {
          updatedPlayers.push({
            ...player,
            loses: loses + 1,
            money: money - 20
          });
        }
      } else {
        updatedPlayers.push({ ...player });
      }
    });
    const nonLostPlayers = updatedPlayers.filter((player) => player.money > 0);
    if (!!updatedPlayers.length && nonLostPlayers.length <= 1) {
      setGameOver(true);
      setWinner(nonLostPlayers[0]?.playerName || 'No One');
    }
    setOpposingBet(number);
    setPlayers([...updatedPlayers]);
  };

  const onPlayAgain = () => push(ROUTE_CONSTANTS.GAME);

  return (
    <div className="gameplay">
      {players.map((player) => (
        <Player key={player.id} player={player} />
      ))}

      <div className="diceBox">
        <Button buttonText="Roll the Dice" onButtonClick={onDiceRoll} isButtonDisabled={gameOver} />
        <div className="opposingBet">{opposingBet}</div>
        {gameOver && (
          <div className="winnerBox">
            <div className="winner">{`🔥${winner}🔥`}</div>
            <Button buttonText="play again" onButtonClick={onPlayAgain} />
          </div>
        )}
      </div>
    </div>
  );
};

Gameplay.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default Gameplay;
