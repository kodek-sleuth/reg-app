/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Text, View, TouchableHighlight} from 'react-native';

const Dashboard = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View>
        <View>
          {/* <Text
            style={{textAlign: 'center', fontWeight: '600', color: '#00B8D9'}}>
            Account: 4534222442
          </Text> */}
        </View>
        <View style={{marginTop: 20}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View style={{paddingLeft: 20}}>
              <TouchableHighlight
                onPress={() => navigation.navigate('Add Cashpower')}
                style={{
                  // width: windowWidth / 1.5,
                  backgroundColor: '#FFAB00',
                  borderRadius: 8,
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: '#fff',
                    fontSize: 16,
                    padding: 15,
                  }}>
                  Send cash power
                </Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Dashboard;
