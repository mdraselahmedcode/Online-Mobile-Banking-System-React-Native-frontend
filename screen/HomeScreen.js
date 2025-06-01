
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet,StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';


const HomeScreen = ({ navigation }) => {
  const buttons = [
    
    { name: 'Send Money', icon: 'send', screen: 'Sendmoney' },
    { name: 'Payment', icon: 'payment', screen: 'Payment' },
    { name: 'Bill Payment', icon: 'receipt', screen: 'BillPayment' },
    { name: 'Deposit', icon: 'account-balance', screen: 'Deposit' },
    { name: 'Loan', icon: 'attach-money', screen: 'Loan' },
    { name: 'Cash Out', icon: 'money-off', screen: 'Cashout' },
    {name: 'Mobile Recharge', icon: 'phone', screen: 'Mobilerecharge' },
    
    // Add other buttons with corresponding screen names
  ];

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" /> 
      {buttons.map((button, index) => (
        <TouchableOpacity
          key={index}
          style={styles.button}
          onPress={() => navigateToScreen(`${button.screen}`)}
        >
          <Icon name={button.icon} size={20} color="#fff" />
          <Text style={styles.buttonText}>{button.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
    
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 10,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#009387',
    
    
    padding: 10,
    margin: 20,
    borderRadius: 10,
    width: 80, // Adjust the width as needed
    height: 80, // Make the height equal to the width for a square shape
  },
  buttonText: {
    color: '#fff',
    marginTop: 5,
    textAlign: 'center',
  },
});


export default HomeScreen;