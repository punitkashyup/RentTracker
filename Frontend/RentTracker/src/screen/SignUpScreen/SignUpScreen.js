import { View, Text, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const navigation = useNavigation();

  const onLogInPress = () => {
    console.warn("Log in");
    navigation.navigate('SignIn');
  }
  const onSubmitPress = () => {
    console.warn("Submit Sucessfully");
  }

  return (
    <View style={style.root}>

      <Text style={style.logo}>₹entTracker</Text>

      <CustomInput 
      placeholder="Name" 
      value={name} 
      setValue={setName} 
      />

      <CustomInput 
      placeholder="Email" 
      value={email} 
      setValue={setEmail} 
      />

      <CustomInput 
      placeholder="Password" 
      value={password} 
      setValue={setPassword} 
      secureTextEntry={true}
      />

      <CustomInput 
      placeholder="Confirm Password" 
      value={passwordRepeat} 
      setValue={setPasswordRepeat}
      secureTextEntry={true}
      />

      <CustomButton text="Submit" onPress={onSubmitPress}/>
      <CustomButton text="Log In" onPress={onLogInPress}/>
      

    </View>
  );
};

const style = StyleSheet.create({
  root:{
    flex: 1,
    backgroundColor: '#2C8158',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    marginTop: 30,
    marginBottom: 30,
    fontFamily: 'Inter',
    fontWeight: 'bold',
    fontSize: 40,
    color: '#FFFFFF',
    shadowColor: '#40000000',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowRadius: 4,
    textShadowOffset: {width: 0, height: 4},
    
  },
});

export default SignUpScreen