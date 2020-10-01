/* eslint-disable react-native/no-inline-styles */

import 'react-native-gesture-handler';
import * as React from 'react';
import DashboardStacks from '../Screens/Dashboard/DashboardStacks';
import Icon from 'react-native-vector-icons/Ionicons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import ProfileStacks from '../Screens/Profile/ProfileStacks';

const Tab = createMaterialBottomTabNavigator();

const DashboardRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      activeColor="#fff"
      labelStyle={{fontSize: 12}}
      barStyle={{backgroundColor: '#DE350B'}}>
      <Tab.Screen
        name="Dashboard"
        component={DashboardStacks}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({color}) => (
            <Icon name="home-sharp" color={color} size={26} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Statements"
        component={ProfileStacks}
        options={{
          tabBarLabel: 'Statements',
          tabBarIcon: ({color}) => (
            <Icon name="briefcase-sharp" color={color} size={26} />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Accounts"
        component={ProfileStacks}
        options={{
          tabBarLabel: 'Accounts',
          tabBarIcon: ({color}) => (
            <Icon name="person-circle-sharp" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default DashboardRoutes;
