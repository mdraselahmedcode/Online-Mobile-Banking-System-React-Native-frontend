import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const WaterBillScreen = () => {
  const [accountNumber, setAccountNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');

  const currentBalance = 500.00; // Replace with the actual current balance

  const handlePayment = () => {
    if (!accountNumber || !amount || !pin) {
      setError('Please fill in all fields');
      return;
    }

    const billAmount = parseFloat(amount);
    if (isNaN(billAmount) || billAmount <= 0) {
      setError('Please enter a valid bill amount');
      return;
    }

    if (billAmount > currentBalance) {
      setError('Insufficient balance');
      return;
    }

    // Implement PIN validation logic here (replace with actual validation)
    const userPIN = '1234'; // Replace with the actual user PIN
    if (pin !== userPIN) {
      setError('Incorrect PIN');
      return;
    }

    // Implement bill payment logic here
    console.log(`Paying water bill for account ${accountNumber} with ${amount} BDT`);
    // You can add further logic to handle the bill payment process

    // Clear inputs and errors after successful payment
    setAccountNumber('');
    setAmount('');
    setPin('');
    setError('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Water Bill Payment</Text>
      <View style={styles.inputContainer}>
        <Text>Account Number:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Enter account number"
          value={accountNumber}
          onChangeText={(text) => setAccountNumber(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Bill Amount (BDT):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Enter amount"
          value={amount}
          onChangeText={(text) => setAmount(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>PIN:</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          placeholder="Enter PIN"
          value={pin}
          onChangeText={(text) => setPin(text)}
        />
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <TouchableOpacity style={styles.paymentButton} onPress={handlePayment}>
        <Text style={styles.paymentButtonText}>Make Payment</Text>
      </TouchableOpacity>
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
  paymentButton: {
    backgroundColor: '#009387',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  paymentButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default WaterBillScreen;
