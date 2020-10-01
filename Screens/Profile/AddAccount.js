/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {observer} from 'mobx-react';
import {View, Text, TouchableHighlight} from 'react-native';
import {windowWidth} from '../Common/Dimensions';
import {useStore} from '../../store/useStore';
import FormInput from '../Common/FormInput';
import Alert from '../Common/Alert';

const AddCashPower = () => {
  const store = useStore();
  const {
    account,
    phoneNumber,
    updateAccount,
    updatePhoneNumber,
    createAccount,
    errorMessage,
    successMessage,
    loading,
  } = store.profileStore;

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View>
        {errorMessage ? (
          <View>
            <Alert type="error" message={errorMessage} />
          </View>
        ) : null}
        {successMessage ? (
          <View>
            <Alert type="success" message={successMessage} />
          </View>
        ) : null}
      </View>
      <View style={{marginTop: 20}}>
        <Text>Cash Power Account</Text>
        <FormInput
          value={account}
          placeholderText="AC/Number"
          onChangeText={updateAccount}
          autoCapitalize="none"
          keyboardType="default"
          autoCorrect={false}
        />
      </View>
      <View>
        <Text>Phone number</Text>
        <FormInput
          value={phoneNumber}
          placeholderText="0783999998"
          onChangeText={updatePhoneNumber}
          autoCapitalize="none"
          keyboardType="phone-pad"
          autoCorrect={false}
        />
      </View>
      <View style={{marginTop: 10}}>
        <TouchableHighlight
          onPress={createAccount}
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
            {loading ? 'Loading...' : 'Add'}
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default observer(AddCashPower);
