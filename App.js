import React from 'react';
import { Provider } from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import store from './app/redux/store';
// import Welcome from './src/Welcome';
// import Login from './src/Login';
// import Signup from './src/Signup';
// import ProductsDashboard from './src/ProductsDashboard';
// import Checkout from './src/Checkout';
// import Receipt from './src/Receipt';
import Route from './app/routes/Route';

export default  App = () => {

    return (
      <Provider store={store}>
    <Route />
      </Provider>
    );
  
}

