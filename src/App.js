import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import createStore from 'src/store';
import PrivateRoute from 'src/components/PrivateRoute';
import LoginPage from 'src/containers/LoginPage';
import ConsolePage from 'src/containers/ConsolePage';

const {store, persistor} = createStore();

function App() {
  return (
    <Router>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Switch>
            <Route path="/login">
              <LoginPage />
            </Route>
            <PrivateRoute path="/console">
              <ConsolePage />
            </PrivateRoute>
          </Switch>
        </PersistGate>
      </Provider>
      <div id="dropdownPortal"></div>
    </Router>
  );
}

export default App;
