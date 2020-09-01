import React from 'react';
import { Provider } from 'telereact';
import Router from '../containers/Router';

const DEFAULT_STATE = {
  settings: {
    account: {
      name: 'Billy',
      username: 'bob',
    },
    notifications: {
      enabled: true,
      qualityFilter: false,
    },
  },
  accessToken: null,
  feed: [],
};

// localStorage.clear()
const savedState = JSON.parse(localStorage.getItem('STATE')) || DEFAULT_STATE;

const App = () => (
  <Provider
    initialState={savedState}
    onSetState={state => localStorage.setItem('STATE', JSON.stringify(state))}
    observers={{
      settings: (before, after, meta) => {
        console.log('meta:', after.settings, meta);
      },
      feed: (before, after, meta) => {
        console.log('feed:', after.feed, meta);
      },
    }}
  >
    <Router />
  </Provider>
);

export default App;
