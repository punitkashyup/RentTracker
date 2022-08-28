import { View, Text, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton';

const HomeScreen = () => {
  const [RentOfMonth, setRentOfMonth] = useState('');
  const [rentAmount, setRentAmount] = useState('');
  const [electricBill, setelectricBill] = useState('');
  const [otherAmount, setotherAmount] = useState('');

  const onSubmitPress = () => {
    console.warn("Submit Sucessfully");
  }
  const onViewReportPress = () => {
    console.warn("View Report");
  }

  return (
    <View style={style.root}>

      <Text style={style.logo}>₹entTracker</Text>

      <CustomInput 
      placeholder="RentOfMonth" 
      value={RentOfMonth} 
      setValue={setRentOfMonth} 
      />

      <CustomInput 
      placeholder="rentAmount" 
      value={rentAmount} 
      setValue={setRentAmount} 
      />

      <CustomInput 
      placeholder="electricBill" 
      value={electricBill} 
      setValue={setelectricBill} 
      secureTextEntry={true}
      />

      <CustomInput 
      placeholder="otherAmount" 
      value={otherAmount} 
      setValue={setotherAmount}
      secureTextEntry={true}
      />

      <CustomButton text="Submit" onPress={onSubmitPress}/>
      <CustomButton text="View Report" onPress={onViewReportPress}/>
      

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
    marginTop: 0,
    marginBottom: 135,
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

export default HomeScreen