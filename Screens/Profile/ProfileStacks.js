import * as React from 'react';
import Profile from './Profile';
import {createStackNavigator} from '@react-navigation/stack';
import AddAccount from './AddAccount';

const ProfileStack = createStackNavigator();

const ProfileStacks = () => {
  return (
    <ProfileStack.Navigator initialRouteName="Profile">
      <ProfileStack.Screen
        name="Profile"
        options={{headerShown: false}}
        component={Profile}
      />
      <ProfileStack.Screen
        name="Add Cashpower Account"
        component={AddAccount}
      />
    </ProfileStack.Navigator>
  );
};

export default ProfileStacks;
