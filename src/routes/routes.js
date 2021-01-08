import { Home, Game, Gameplay } from '../components';
import { ROUTE_CONSTANTS } from '../constants';

const APP_ROUTES = [
  {
    path: ROUTE_CONSTANTS.ROOT,
    component: Home,
    exact: true
  },
  {
    path: ROUTE_CONSTANTS.GAME,
    component: Game,
    exact: false
  },
  {
    path: ROUTE_CONSTANTS.GAMEPLAY,
    component: Gameplay,
    exact: false
  }
];

export default APP_ROUTES;
