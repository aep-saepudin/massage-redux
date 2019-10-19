import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import stores from './src/reducers';

import NavigationService from './src/navigations/NavigationService';

import FullScreenView from './screens/FullScreenTes';
import Juara from './screens/Tes';

const TopLevelNavigator = createStackNavigator({
  fullscreen: FullScreenView,
  juara: Juara,
});

const AppContainer = createAppContainer(TopLevelNavigator);
const store = createStore(stores, applyMiddleware(thunk));


export default function App() {
  return (
    <Provider store={store}>
      <AppContainer
        ref={(navigatorRef) => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    </Provider>
  );
}
