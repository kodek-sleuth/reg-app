/* eslint-disable react-native/no-inline-styles */
import {observer} from 'mobx-react';
import React, {useEffect} from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
import {ListItem} from 'react-native-elements';
import {useStore} from '../../store/useStore';

const Profile = ({navigation}) => {
  const store = useStore();
  const {accounts, fetchCashPowerAccounts, successMessage} = store.profileStore;

  useEffect(() => {
    if (successMessage) {
      navigation.navigate('Profile');
    }
  });

  useEffect(() => {
    fetchCashPowerAccounts();
  }, [fetchCashPowerAccounts]);

  return (
    <View>
      <View>
        <TouchableHighlight
          onPress={() => navigation.navigate('Add Cashpower Account')}
          style={{
            backgroundColor: '#DE350B',
            borderRadius: 0,
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: '#fff',
              fontSize: 16,
              padding: 15,
            }}>
            Add cash power account
          </Text>
        </TouchableHighlight>
      </View>
      <View>
        {accounts.map((l, i) => (
          <ListItem key={i} bottomDivider>
            <ListItem.Content>
              <ListItem.Title>{l.account}</ListItem.Title>
              <ListItem.Subtitle>
                Balance: {''} {l.units}
              </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))}
      </View>
    </View>
  );
};

export default observer(Profile);
