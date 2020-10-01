/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, TouchableHighlight} from 'react-native';
import {windowHeight, windowWidth} from './Dimensions';

export default function FormInput({type, message}) {
  return (
    <TouchableHighlight
      style={{
        width: windowWidth / 1.5,
        backgroundColor:
          type === 'success'
            ? '#36B37E'
            : type === 'error'
            ? '#BF2600'
            : type === 'info'
            ? '#00B8D9'
            : null,
        borderRadius: 8,
      }}>
      <Text
        style={{
          textAlign: 'center',
          color: '#fff',
          fontSize: 16,
          padding: 15,
        }}>
        {message}
      </Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    width: windowWidth / 1.5,
    height: windowHeight / 15,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
});
