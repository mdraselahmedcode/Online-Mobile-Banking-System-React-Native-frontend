import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'



const SendMoneyScreen_02 = ({ route }) => {
  console.log(route.params);

  const { contact } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.contactInfoContainer}>
        <Text>Contact Name: {contact.name}</Text>
        {contact.phoneNumbers &&
          contact.phoneNumbers.map((phoneNumber, index) => (
            <Text key={index}>Phone Number: {phoneNumber.number}</Text>
          ))}
      </View>
      <View style={styles.amountInputContainer}>
        <Text>Amount to Send:</Text>
        <TextInput style={styles.input} keyboardType="numeric" />
        {/* Display red text for invalid amount */}
        <Text style={styles.invalidAmountText}>Please enter a valid amount</Text>
      </View>
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceText}>Current Balance: $500.00</Text>
      </View>
      <TouchableOpacity style={styles.sendButton}>
        <Text style={styles.sendButtonText}>Send Money</Text>
      </TouchableOpacity>
    </View>
  );
};





const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 5,
    padding: 5,
  },
  recommendationsContainer: {
    flex: 1,
  },
  recommendationItem: {
    borderBottomWidth: 1,
    borderColor: 'gray',
    padding: 10,
  },
  contactInfoContainer: {
    marginBottom: 20,
  },
  amountInputContainer: {
    marginBottom: 20,
  },
  balanceContainer: {
    marginBottom: 20,
  },
  balanceText: {
    opacity: 0.7,
  },
  sendButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  sendButtonText: {
    color: 'white',
  },
});




export default SendMoneyScreen_02;