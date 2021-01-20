import React from 'react';
import { Provider } from 'react-redux';
import store from './app/redux/store';

import Route from './app/routes/Route';

export default  App = () => {

    return (
      <Provider store={store}>
    <Route />
      </Provider>
    );
  
}

