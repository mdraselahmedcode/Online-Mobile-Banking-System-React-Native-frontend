
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';

const SendMoneyScreen_02 = ({ route }) => {
  const { contact } = route.params;

  const [amount, setAmount] = useState('');
  const [pin, setPin] = useState('');
  const [isValidAmount, setIsValidAmount] = useState(true);
  const currentBalance = 500.0; // Example current balance
  const correctPin = '1234'; // Replace with your actual PIN logic

  const handleSendMoney = () => {
    const parsedAmount = parseFloat(amount);

    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      setIsValidAmount(false);
      return;
    }

    if (parsedAmount > currentBalance) {
      Alert.alert('Insufficient Funds', 'You do not have enough funds to complete the transaction.');
      return;
    }

    // Check PIN
    if (pin !== correctPin) {
      Alert.alert('Incorrect PIN', 'Please enter the correct PIN.');
      return;
    }

    // Perform the logic for sending money here

    // Reset amount, PIN, and validation state after successful transaction
    setAmount('');
    setPin('');
    setIsValidAmount(true);

    // Show success message or navigate to the success screen
    Alert.alert('Success', `You have successfully sent $${parsedAmount} to ${contact.name}.`);
  };

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
        <TextInput
          style={[styles.input, !isValidAmount && styles.invalidInput]}
          keyboardType="numeric"
          value={amount}
          onChangeText={(text) => {
            setAmount(text);
            setIsValidAmount(true);
          }}
        />
        {!isValidAmount && <Text style={styles.invalidAmountText}>Please enter a valid amount</Text>}
      </View>
      <View style={styles.pinInputContainer}>
        <Text>PIN:</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          keyboardType="numeric"
          value={pin}
          onChangeText={(text) => setPin(text)}
        />
      </View>
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceText}>Current Balance: ${currentBalance.toFixed(2)}</Text>
      </View>
      <TouchableOpacity style={styles.sendButton} onPress={handleSendMoney}>
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 5,
    padding: 5,
  },
  invalidInput: {
    borderColor: 'red',
  },
  invalidAmountText: {
    color: 'red',
    marginTop: 5,
  },
  contactInfoContainer: {
    marginBottom: 20,
  },
  amountInputContainer: {
    marginBottom: 20,
  },
  pinInputContainer: {
    marginBottom: 20,
  },
  balanceContainer: {
    marginBottom: 20,
  },
  balanceText: {
    opacity: 0.7,
  },
  sendButton: {
    backgroundColor: '#009387',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  sendButtonText: {
    color: 'white',
  },
});

export default SendMoneyScreen_02;
