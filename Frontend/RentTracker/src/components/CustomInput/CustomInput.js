import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const CustomInput = ({value, setValue, placeholder, secureTextEntry }) => {
  return (
    <View style={Styles.container}>
      <TextInput 
      value={value}
      onChangeText={setValue} 
      placeholder={placeholder} 
      style={Styles.input}
      secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    margin: 10,
  },
  input: {},
})

export default CustomInput