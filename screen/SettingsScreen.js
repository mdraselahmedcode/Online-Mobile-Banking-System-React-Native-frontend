import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { AuthContext } from '../components/context';

const SettingsScreen = ({ navigation }) => {

  const { signOut, toggleTheme } = React.useContext(AuthContext);

  const handleLogout = () => {
    // Implement logout logic here
    // For example, you can clear user authentication token
    // and navigate to the login screen
    console.log('User logged out');
    navigation.replace('LoginScreen'); // Replace with your login screen route
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>
      <TouchableOpacity style={styles.optionContainer}>
        <Text style={styles.optionText}>Account Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionContainer}>
        <Text style={styles.optionText}>Notification Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.logoutButton} onPress={() => {signOut()}}>
        <Text style={styles.logoutButtonText}>Logout</Text>
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
  optionContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 3,
  },
  optionText: {
    fontSize: 16,
  },
  logoutButton: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SettingsScreen;
