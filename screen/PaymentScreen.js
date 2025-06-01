import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const PaymentScreen = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [paymentAmount, setPaymentAmount] = useState('');
  const [pin, setPin] = useState('');

  // Mock current balance (replace with actual balance retrieval logic)
  const currentBalance = 1500; // Example current balance

  const handlePayment = () => {
    if (mobileNumber.trim() === '' || paymentAmount.trim() === '' || pin.trim() === '') {
      Alert.alert('Error', 'Please enter mobile number, payment amount, and PIN.');
    } else {
      const amount = parseFloat(paymentAmount);
      if (isNaN(amount) || amount <= 0) {
        Alert.alert('Error', 'Please enter a valid payment amount.');
      } else if (amount > currentBalance) {
        Alert.alert('Error', 'Insufficient funds. Please make a payment within your current balance.');
      } else {
        // Perform PIN verification (replace with actual authentication logic)
        const storedPin = '1234'; // Example stored PIN
        if (pin === storedPin) {
          // Payment successful
          Alert.alert('Payment Successful', `Payment of ${paymentAmount} BDT to ${mobileNumber} completed successfully!`);
          // Reset the fields after successful payment
          setMobileNumber('');
          setPaymentAmount('');
          setPin('');
        } else {
          Alert.alert('Error', 'Incorrect PIN. Please enter the correct PIN.');
        }
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Make a Payment</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Mobile Number"
        value={mobileNumber}
        onChangeText={(text) => setMobileNumber(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Payment Amount (BDT)"
        keyboardType="numeric"
        value={paymentAmount}
        onChangeText={(text) => setPaymentAmount(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter PIN"
        secureTextEntry
        keyboardType="numeric"
        value={pin}
        onChangeText={(text) => setPin(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handlePayment}>
        <Text style={styles.buttonText}>Confirm Payment</Text>
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

export default PaymentScreen;
