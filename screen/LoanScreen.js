import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const LoanScreen = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [loanDuration, setLoanDuration] = useState('');

  const handleLoanRequest = () => {
    // Perform loan request logic here
    if (loanAmount.trim() === '' || loanDuration.trim() === '') {
      Alert.alert('Error', 'Please enter both loan amount and duration.');
    } else {
      Alert.alert('Loan Requested', `Loan request for ${loanAmount} BDT for ${loanDuration} months submitted successfully!`);
      // Reset the fields after successful loan request
      setLoanAmount('');
      setLoanDuration('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Loan Request</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Loan Amount (BDT)"
        keyboardType="numeric"
        value={loanAmount}
        onChangeText={(text) => setLoanAmount(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Loan Duration (months)"
        keyboardType="numeric"
        value={loanDuration}
        onChangeText={(text) => setLoanDuration(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleLoanRequest}>
        <Text style={styles.buttonText}>Request Loan</Text>
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

export default LoanScreen;
