import playerActionType from '../../actions/playerAction/playerActionType';
import { initialState } from '../../initialState';

export default function playerReducer(state = initialState.player, action) {
  switch (action.type) {
    case playerActionType.SET_PLAYERS:
      return { ...state, gamePlayers: [...action.players] };
    default:
      return state;
  }
}
