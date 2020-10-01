/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import * as React from 'react';
import {observer} from 'mobx-react';
import {useStore} from '../store/useStore';
import AuthRoutes from './AuthRoutes';
import DashboardRoutes from './DashboardRoutes';
import AsyncStorage from '@react-native-community/async-storage';
import auth from '@react-native-firebase/auth';

const Routes = () => {
  const store = useStore();
  const [signedIn, setSignedIn] = React.useState(false);
  const {setUser, setToken} = store.authStore;

  React.useEffect(() => {
    auth().onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const {token} = await user.getIdTokenResult();
          setToken(token);
          setUser(user);
          await AsyncStorage.setItem('signedIn', JSON.stringify(true));
        } catch (error) {
          setToken('');
          setUser({});
        }
      }

      if (!user) {
        setToken('');
        setUser({});
      }
    });
  }, [setToken, setUser]);

  React.useEffect(() => {
    const getSignedIn = async () => {
      try {
        const isSignedIn = await AsyncStorage.getItem('signedIn');
        if (isSignedIn) {
          setSignedIn(true);
        }

        if (!isSignedIn) {
          setSignedIn(false);
        }
      } catch (error) {
        setSignedIn(false);
      }
    };
    getSignedIn();
  });

  console.log('isSignedIn', signedIn);
  if (!signedIn) {
    return <AuthRoutes />;
  }
  return <DashboardRoutes />;
};

export default observer(Routes);
