import React from 'react';
import { PropTypes } from 'prop-types';
import ROUTE_CONSTANTS from '../../constants/routeConstants/routeConstants';
import { Button } from '../Common';
import './Home.css';

const Home = (props) => {
  const {
    history: { push }
  } = props;

  const onEnterClick = () => push(ROUTE_CONSTANTS.GAME);

  return (
    <div className="home">
      <h1>place your bets with friends and family</h1>
      <h2>Try your luck</h2>
      <h2>be a winner</h2>
      <Button buttonText="start game" onButtonClick={onEnterClick} />
    </div>
  );
};

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default Home;
