import React, {useState, createContext} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Fullscreen from 'react-full-screen';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import createStore from 'src/store';
import PrivateRoute from 'src/containers/PrivateRoute';
import LoginPage from 'src/containers/LoginPage';
import ConsolePage from 'src/containers/ConsolePage';

const {store, persistor} = createStore();

export const AppContext = createContext({});

function App() {
  const [isFullScreen, setIsFullScreen] = useState(false);
  return (
    <AppContext.Provider
      value={{
        isFullScreen: isFullScreen,
        toggleFullScreen: () => {
          setIsFullScreen(!isFullScreen);
        },
      }}
    >
      <Fullscreen enabled={isFullScreen} onChange={(isFull) => setIsFullScreen(isFull)}>
        <Router>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <Switch>
                <Route path="/login">
                  <LoginPage />
                </Route>
                <PrivateRoute path="/">
                  <ConsolePage />
                </PrivateRoute>
              </Switch>
            </PersistGate>
          </Provider>
          <div id="dropdownPortal"></div>
        </Router>
      </Fullscreen>
    </AppContext.Provider>
  );
}

export default App;
