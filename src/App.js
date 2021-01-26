// @flow

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MyRoute from 'components/MyRoute/MyRoute';
import NotFound from 'scenes/NotFound/NotFound';
import { getRoutes } from 'routes';
import { ThemeProvider } from 'stores/themeStore';

const App = () => {
  return (
    <ThemeProvider>
        <Router>
          <Switch>
            {
              getRoutes().map((route, index) => {
                return <MyRoute exact {...route} key={index} />
              })
            }
            <Route component={NotFound} />
          </Switch>
        </Router>
    </ThemeProvider>
  );
}

export default App;
