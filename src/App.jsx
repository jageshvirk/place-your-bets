import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Common';
import APP_ROUTES from './routes/routes';

const App = () => {
  const renderRoutes = () => [
    ...APP_ROUTES.map((route, index) => {
      const { exact, path, component } = route;
      return <Route key={index} component={component} path={path} exact={exact} />;
    })
  ];

  return (
    <div>
      <Navbar />
      <Switch>{renderRoutes()}</Switch>
    </div>
  );
};

export default App;
