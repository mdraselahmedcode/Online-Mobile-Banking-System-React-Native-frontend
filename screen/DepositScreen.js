import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const DepositScreen = () => {
  const [accountNumber, setAccountNumber] = useState('');
  const [depositAmount, setDepositAmount] = useState('');
  const [pin, setPin] = useState('');

  // Mock current balance (replace with actual balance retrieval logic)
  const currentBalance = 1000; // Example current balance

  const handleDeposit = () => {
    if (accountNumber.trim() === '' || depositAmount.trim() === '' || pin.trim() === '') {
      Alert.alert('Error', 'Please enter account number, deposit amount, and PIN.');
    } else {
      const amount = parseFloat(depositAmount);
      if (isNaN(amount) || amount <= 0) {
        Alert.alert('Error', 'Please enter a valid deposit amount.');
      } else if (amount > currentBalance) {
        Alert.alert('Error', 'Insufficient funds. Please deposit an amount within your current balance.');
      } else {
        // Perform PIN verification (replace with actual authentication logic)
        const storedPin = '1234'; // Example stored PIN
        if (pin === storedPin) {
          // Deposit successful
          Alert.alert('Deposit Successful', `Deposit of ${depositAmount} BDT to account ${accountNumber} completed successfully!`);
          // Reset the fields after successful deposit
          setAccountNumber('');
          setDepositAmount('');
          setPin('');
        } else {
          Alert.alert('Error', 'Incorrect PIN. Please enter the correct PIN.');
        }
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Make a Deposit</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Account Number"
        value={accountNumber}
        onChangeText={(text) => setAccountNumber(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Deposit Amount (BDT)"
        keyboardType="numeric"
        value={depositAmount}
        onChangeText={(text) => setDepositAmount(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter PIN"
        secureTextEntry
        keyboardType="numeric"
        value={pin}
        onChangeText={(text) => setPin(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleDeposit}>
        <Text style={styles.buttonText}>Confirm Deposit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    marginBottom: 20,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: '#009387',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default DepositScreen;
