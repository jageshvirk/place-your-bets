import playerActionType from './playerActionType';

const setPlayers = (players) => {
  return { type: playerActionType.SET_PLAYERS, players };
};

export default { setPlayers };
