/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import FormInput from '../Common/FormInput';
import {View, Text, TouchableHighlight, TouchableOpacity} from 'react-native';
import {windowWidth} from '../Common/Dimensions';
import {observer} from 'mobx-react';
import {useEffect} from 'react';
import {useStore} from '../../store/useStore';
import Alert from '../Common/Alert';

const Login = ({navigation}) => {
  const store = useStore();
  const {
    email,
    password,
    login,
    updateEmail,
    updatePassword,
    loading,
    successMessage,
    errorMessage,
  } = store.authStore;

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: '#DE350B', fontSize: 35, fontWeight: '600'}}>
        Login
      </Text>
      <View style={{marginTop: 20}}>
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
        <View>
          <FormInput
            value={email}
            placeholderText="Email"
            onChangeText={updateEmail}
            autoCapitalize="none"
            keyboardType="email-address"
            autoCorrect={false}
          />
        </View>
        <View>
          <FormInput
            value={password}
            placeholderText="Password"
            onChangeText={updatePassword}
            autoCapitalize="none"
            keyboardType="default"
            autoCorrect={false}
          />
        </View>
      </View>
      <View>
        <TouchableHighlight
          onPress={login}
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
            {loading ? 'Loading...' : 'Login'}
          </Text>
        </TouchableHighlight>
      </View>

      <View style={{marginTop: 30}}>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={{color: '#0052CC'}}>
            Don't have an account? Create One
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default observer(Login);
