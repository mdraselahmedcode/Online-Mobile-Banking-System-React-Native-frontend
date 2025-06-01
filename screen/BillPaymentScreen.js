import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const BillPaymentScreen = ({ navigation }) => {
  const billOptions = [
    { name: 'Water Bill', icon: 'local-drink' , screen:'Waterbill' },
    { name: 'Gas Bill', icon: 'whatshot' , screen:'Gasbill'},
    { name: 'Electricity Bill', icon: 'flash-on', screen:'Electricitybill' },
    { name: 'Internet Bill', icon: 'wifi' , screen:'Internetbill'},
    { name: 'Government Fee', icon: 'account-balance' , screen:'Governmentbill'},
    // Add more bill options as needed
  ];

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
    

  };


  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bill Payment Options</Text>
      <View style={styles.billOptionsContainer}>
        {billOptions.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.billOptionButton}
            onPress={() => navigateToScreen(`${option.screen}`)}
           
          >
            <Icon name={option.icon} size={30} color="#009688" />
            <Text style={styles.billOptionText}>{option.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  billOptionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  billOptionButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 10,
    margin: 5,
    borderRadius: 10,
    elevation: 5,
    width: '30%', // Adjust the width as needed for the number of columns
  },
  billOptionText: {
    fontSize: 14,
    marginTop: 5,
    textAlign: 'center',
  },
});

export default BillPaymentScreen;
