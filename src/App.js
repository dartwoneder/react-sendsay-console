import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import createStore from 'src/store';
import 'src/App.css';
import LoginPage from 'src/containers/LoginPage';

const {store, persistor} = createStore();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div>
          <LoginPage />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
