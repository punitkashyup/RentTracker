import { View, Text, StyleSheet } from 'react-native'
import React, {useState} from 'react'


const ForgotPasswordScreen = () => {

  return (
    <View style={style.root}>
      <Text style={style.Forgot}>Forgot Password Screen will come soon</Text>

    </View>
  );
};

const style = StyleSheet.create({
  root:{
    flex: 1,
    backgroundColor: '#2C8158',
    alignItems: 'center',
    padding: 20,
  }
});

export default ForgotPasswordScreen