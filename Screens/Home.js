import {observer} from 'mobx-react';
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import {useStore} from '../store/useStore';
import {windowWidth} from './Common/Dimensions';

const Home = ({navigation}) => {
  const store = useStore();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: '#DE350B', fontSize: 35, fontWeight: '600'}}>
        Welcome to Reg
      </Text>
      <View style={{marginTop: 10}}>
        <TouchableHighlight
          onPress={() => navigation.navigate('Signup')}
          style={{
            width: windowWidth / 1.5,
            backgroundColor: '#DE350B',
            borderRadius: 8,
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: '#fff',
              fontSize: 16,
              padding: 15,
            }}>
            Signup
          </Text>
        </TouchableHighlight>
      </View>
      <View style={{marginTop: 10}}>
        <TouchableHighlight
          onPress={() => navigation.navigate('Login')}
          style={{
            width: windowWidth / 1.5,
            backgroundColor: '#DE350B',
            borderRadius: 8,
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: '#fff',
              fontSize: 16,
              padding: 15,
            }}>
            Login
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default observer(Home);
