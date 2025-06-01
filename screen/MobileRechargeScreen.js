import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const MobileRechargeScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [pin, setPin] = useState('');

  const currentBalance = 500.0; // Example current balance, replace with actual data

  const handleRecharge = () => {
    // Check if the amount is a valid number
    const rechargeAmount = parseFloat(amount);
    if (isNaN(rechargeAmount) || rechargeAmount <= 0) {
      Alert.alert('Invalid Amount', 'Please enter a valid recharge amount.');
      return;
    }

    // Check if the recharge amount exceeds the current balance
    if (rechargeAmount > currentBalance) {
      Alert.alert('Insufficient Balance', 'Your current balance is not sufficient for this recharge.');
      return;
    }

    // Check if the PIN is provided
    if (!pin) {
      Alert.alert('PIN Required', 'Please enter your PIN for verification.');
      return;
    }

    // You can add further logic to handle the recharge process
    console.log(`Recharging ${phoneNumber} with ${amount} BDT. PIN: ${pin}`);
    // Implement your actual recharge logic here

    // Reset input fields after successful recharge
    setPhoneNumber('');
    setAmount('');
    setPin('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Mobile Recharge</Text>
      <View style={styles.inputContainer}>
        <Text>Phone Number:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Enter phone number"
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Recharge Amount (BDT):</Text>
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
      <TouchableOpacity style={styles.rechargeButton} onPress={handleRecharge}>
        <Text style={styles.rechargeButtonText}>Recharge</Text>
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
  rechargeButton: {
    backgroundColor: '#009387',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  rechargeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default MobileRechargeScreen;
