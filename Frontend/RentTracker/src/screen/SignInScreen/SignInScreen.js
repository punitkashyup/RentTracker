import { View, Text, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const onLogInPress = () => {
    console.warn("Log in");
    // Validate User

    navigation.navigate('Home');
  }
  const onSignUpPress = () => {
    console.warn("Sign Up");
    // Register  User
    navigation.navigate('SignUp');
  }
  const onForgotPasswordPress = () => {
    console.warn("Forgot Password");
    // Register  User
    navigation.navigate('ForgotPasssword');
  }

  return (
    <View style={style.root}>
      <Text style={style.welcome_text}>Welcome</Text>

      <Text style={style.logo}>₹entTracker</Text>

      <CustomInput 
      placeholder="Username" 
      value={username} 
      setValue={setUsername} 
      />
      <CustomInput 
      placeholder="Password" 
      value={password} 
      setValue={setPassword} 
      secureTextEntry={true}
      />

      <CustomButton text="Log In" onPress={onLogInPress}/>
      <CustomButton text="Sign Up" onPress={onSignUpPress}/>

      <CustomButton text="Forgot password?" onPress={onForgotPasswordPress} type="TERTIARY"/>

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
  welcome_text: {
    marginTop: 45,
    marginBottom: 15,
    fontFamily: 'Inter',
    fontWeight: 'bold',
    fontSize: 30,
    color: '#FFFFFF',
    shadowColor: '#40000000',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowRadius: 4,
    textShadowOffset: {width: 0, height: 4},
    
  },
  logo: {
    marginTop: 10,
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

export default SignInScreen