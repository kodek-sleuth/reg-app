import * as React from 'react';
import Dashboard from './Dashboard';
import {createStackNavigator} from '@react-navigation/stack';
import AddCashPower from './AddCashPower';

const DashboardStack = createStackNavigator();

const DashboardStacks = () => {
  return (
    <DashboardStack.Navigator initialRouteName="Dashboard">
      <DashboardStack.Screen
        name="Dashboard"
        options={{headerShown: false}}
        component={Dashboard}
      />
      <DashboardStack.Screen name="Add Cashpower" component={AddCashPower} />
    </DashboardStack.Navigator>
  );
};

export default DashboardStacks;
