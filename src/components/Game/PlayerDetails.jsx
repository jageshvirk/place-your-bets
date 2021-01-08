import React from 'react';
import { PropTypes } from 'prop-types';
import TextInput from '../Common/TextInput';

const PlayerDetails = (props) => {
  const { player, onChange } = props;

  const { playerName, playerDesc, bet, id } = player;

  const onChangePlayerDetail = ({ target: { name, value } }) => onChange(id, name, value);

  return (
    <div className="playerDetails">
      <TextInput
        label={`player ${id}`}
        id={`playerName_${id}`}
        name="playerName"
        value={playerName}
        onChange={onChangePlayerDetail}
        placeholder="your name"
      />
      <TextInput
        id={`playerDesc_${id}`}
        name="playerDesc"
        value={playerDesc}
        onChange={onChangePlayerDetail}
        placeholder="your strengths"
      />
      <TextInput
        id={`bet_${id}`}
        name="bet"
        value={bet}
        onChange={onChangePlayerDetail}
        placeholder="your bet (1 to 6)"
        type="number"
        min={1}
        max={6}
      />
    </div>
  );
};

PlayerDetails.propTypes = {
  player: PropTypes.shape({
    playerName: PropTypes.string,
    playerDesc: PropTypes.string,
    bet: PropTypes.string,
    id: PropTypes.number
  }),
  onChange: PropTypes.func.isRequired
};

PlayerDetails.defaultProps = {
  player: {}
};

export default PlayerDetails;
