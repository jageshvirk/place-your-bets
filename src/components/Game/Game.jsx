import React, { lazy, Suspense, useState } from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { ROUTE_CONSTANTS, GAME_CONSTANTS } from '../../constants';
import { playerAction } from '../../redux/actions';
import { Button, Loading } from '../Common';
import './Game.css';
import '../Common/Common.css';

const PlayerDetails = lazy(() => import('./PlayerDetails'));

const Game = (props) => {
  const {
    history: { push }
  } = props;

  const { INIT_MONEY, MIN_PLAYERS, MAX_PLAYERS, MIN_BET, MAX_BET } = GAME_CONSTANTS;

  const [players, setPlayers] = useState([]);
  const [id, setId] = useState(1);
  const [showTooltip, setShowTooltip] = useState(false);

  const dispatch = useDispatch();

  const onPlay = () => {
    const dispatchingPlayers = players.map((player) => {
      return { ...player };
    });
    dispatch(playerAction.setPlayers([...dispatchingPlayers]));
    push(ROUTE_CONSTANTS.GAMEPLAY);
  };

  const onAddPlayer = () => {
    const playerObject = {
      id,
      playerName: '',
      playerDesc: '',
      money: INIT_MONEY,
      wins: 0,
      loses: 0,
      bet: ''
    };
    setPlayers([...players, { ...playerObject }]);
    setId((prevId) => prevId + 1);
  };

  const onChange = (playerId, name, value) => {
    const updatedPlayers = [];
    players.forEach((player) => {
      if (player.id === playerId) {
        const updatedPlayer = { ...player, [name]: value };
        updatedPlayers.push({ ...updatedPlayer });
      } else updatedPlayers.push({ ...player });
    });
    setPlayers([...updatedPlayers]);
  };

  const noOfPlayers = players.length;

  const isPlayButtonDisabled = () => {
    const noOfPlayersCriteria = noOfPlayers < MIN_PLAYERS || noOfPlayers > MAX_PLAYERS;

    const isInputInvalid = !players.every(
      (player) =>
        !!player.playerName && Number(player.bet) >= MIN_BET && Number(player.bet) <= MAX_BET
    );

    return noOfPlayersCriteria || isInputInvalid;
  };

  const onShowHint = () => setShowTooltip(true);

  const onHideHint = () => setShowTooltip(false);

  return (
    <div className="game">
      <div className="addPlayerBox">
        <Button
          buttonText={`Add Players (Min ${MIN_PLAYERS}, Max ${MAX_PLAYERS})`}
          onButtonClick={onAddPlayer}
          isButtonDisabled={noOfPlayers === MAX_PLAYERS}
        />
      </div>

      <Suspense fallback={<Loading />}>
        {players.map((player) => (
          <PlayerDetails key={player.id} player={player} onChange={onChange} />
        ))}
      </Suspense>

      <div className="playButtonBox">
        <Button
          buttonText="PLAY"
          onButtonClick={onPlay}
          isButtonDisabled={isPlayButtonDisabled()}
        />
        <span onMouseEnter={onShowHint} onMouseLeave={onHideHint}>
          ?
        </span>
        {showTooltip && (
          <div className="hint">add each players name and valid bet to enable play button</div>
        )}
      </div>
    </div>
  );
};

Game.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default Game;
