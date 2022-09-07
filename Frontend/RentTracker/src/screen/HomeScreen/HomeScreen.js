import { View, Text, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';

const HomeScreen = () => {

  const {control, handleSubmit} = useForm ();

  const navigation = useNavigation();


  const onSubmitPress = (data) => {
    console.log(data);
    console.warn("Submit Sucessfully");
  }
  const onViewReportPress = () => {
    console.log();
    console.warn("View Report");
  }

  return (
    <View style={style.root}>

      <Text style={style.logo}>₹entTracker</Text>
      
      <View style={style.dashboard}>
        <View>
            <Text style={style.statusText1}>Years</Text>
            <Text style={style.statusText2}>1 yrs</Text>
        </View>
        <View>
            <Text style={style.statusText1}>Month</Text>
            <Text style={style.statusText2}>3 month</Text>
        </View>
        <View>
            <Text style={style.statusText1}>Total Spend</Text>
            <Text style={style.statusText2}>210,500 ₹</Text>
        </View>
      </View>
      

      <CustomInput 
      name = "rentofmonth"
      placeholder="RentOfMonth" 
      control={control}
      />

      <CustomInput 
      name = "rentamount"
      placeholder="rentAmount" 
      control={control}
      />

      <CustomInput
      name = "electricbill" 
      placeholder="electricBill" 
      control={control}
      />

      <CustomInput 
      name = "otheramount"
      placeholder="otherAmount" 
      control={control}
      />

      <CustomButton text="Submit" onPress={handleSubmit(onSubmitPress)}/>
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
    marginBottom: 10,
    fontFamily: 'Inter',
    fontWeight: 'bold',
    fontSize: 40,
    color: '#FFFFFF',
    shadowColor: '#40000000',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowRadius: 4,
    textShadowOffset: {width: 0, height: 4},
  },
  dashboard: {
    flex: 1,
    width: '100%',
    height: '18%',
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    zIndex: 10,
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
    
  },
  statusText1: {
    marginTop: 5,
    marginBottom: 10,
    marginHorizontal: 25,
    padding: 10,
    fontSize: 16,
    fontFamily: 'Inter',
    color: '#2C8158',
    fontWeight: 'bold',
    shadowColor: '#40000000',
    textShadowColor: 'rgba(0, 0, 0, 0.15)',
    textShadowRadius: 4,
    textShadowOffset: {width: 0, height: 4},
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderStyle: 'dashed',
    borderBottomWidth: 1,
  },
  statusText2: {
    fontSize: 16,
    color: 'black',
    shadowColor: '#40000000',
    textShadowColor: 'rgba(0, 0, 0, 0.15)',
    textShadowRadius: 4,
    textShadowOffset: {width: 0, height: 4},
    marginHorizontal: 25,
    padding: 10,
    fontFamily: 'Inter',
    fontWeight: 'bold',
  },
  
});

export default HomeScreen