/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import {windowWidth} from '../Common/Dimensions';
import {observer} from 'mobx-react';
import FormInput from '../Common/FormInput';
import {useStore} from '../../store/useStore';
import Alert from '../Common/Alert';

const AddCashPower = () => {
  const store = useStore();
  const {
    accounts,
    fetchCashPowerAccounts,
    successMessage,
    errorMessage,
    account,
    updateAccount,
    amount,
    updateAmount,
    sendCashPower,
    loading,
  } = store.dashboardStore;

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
          keyboardType="phone-pad"
          autoCorrect={false}
        />
      </View>
      <View>
        <Text>Amount in RF</Text>
        <FormInput
          value={amount}
          placeholderText="20,000"
          onChangeText={updateAmount}
          autoCapitalize="none"
          keyboardType="phone-pad"
          autoCorrect={false}
        />
      </View>
      <View style={{marginTop: 10}}>
        <TouchableHighlight
          onPress={sendCashPower}
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
            {loading ? 'Loading...' : 'Pay'}
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default observer(AddCashPower);
