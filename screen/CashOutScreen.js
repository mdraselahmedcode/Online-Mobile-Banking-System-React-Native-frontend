import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const CashOutScreen = () => {
  const [agentNumber, setAgentNumber] = useState('');
  const [cashOutAmount, setCashOutAmount] = useState('');
  const [pin, setPin] = useState('');

  // Mock current balance (replace with actual balance retrieval logic)
  const currentBalance = 500; // Example current balance

  const handleCashOut = () => {
    if (agentNumber.trim() === '' || cashOutAmount.trim() === '' || pin.trim() === '') {
      Alert.alert('Error', 'Please enter agent number, cash-out amount, and PIN.');
    } else {
      const amount = parseFloat(cashOutAmount);
      if (isNaN(amount) || amount <= 0) {
        Alert.alert('Error', 'Please enter a valid cash-out amount.');
      } else if (amount > currentBalance) {
        Alert.alert('Error', 'Insufficient funds. Please cash out within your current balance.');
      } else {
        // Perform PIN verification (replace with actual authentication logic)
        const storedPin = '1234'; // Example stored PIN
        if (pin === storedPin) {
          // Cash out successful
          Alert.alert('Cash Out Successful', `Cash-out of ${cashOutAmount} BDT from agent ${agentNumber} completed successfully!`);
          // Reset the fields after successful cash out
          setAgentNumber('');
          setCashOutAmount('');
          setPin('');
        } else {
          Alert.alert('Error', 'Incorrect PIN. Please enter the correct PIN.');
        }
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cash Out</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Agent Number"
        value={agentNumber}
        onChangeText={(text) => setAgentNumber(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Cash-Out Amount (BDT)"
        keyboardType="numeric"
        value={cashOutAmount}
        onChangeText={(text) => setCashOutAmount(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter PIN"
        secureTextEntry
        keyboardType="numeric"
        value={pin}
        onChangeText={(text) => setPin(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleCashOut}>
        <Text style={styles.buttonText}>Confirm Cash Out</Text>
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

export default CashOutScreen;
