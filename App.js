import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStore from './store/rootStore';
import Routes from './Routes/Routes';
import {StoreProvider} from './store/context';
import {observer} from 'mobx-react';

const root = new RootStore();

const App = () => {
  return (
    <StoreProvider value={root}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </StoreProvider>
  );
};

export default observer(App);
