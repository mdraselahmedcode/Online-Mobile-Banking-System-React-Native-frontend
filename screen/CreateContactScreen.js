// CreateContactScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import * as Contacts from 'expo-contacts';

const CreateContactScreen = ({ navigation }) => {
  const [contactName, setContactName] = useState('');
  const [contactNumber, setContactNumber] = useState('');



//   const handleSaveContact = async () => {
//     try {
//       const { status } = await Contacts.requestPermissionsAsync(
//         Contacts.Permission.WRITE_CONTACTS
//       );
  
//       if (status !== 'granted') {
//         console.warn('Write contacts permission denied');
//         return;
//       }
  
//       // Save the contact to the user's phone
//       await Contacts.addContactAsync({
//         name: contactName,
//         phoneNumbers: [{ label: 'mobile', number: contactNumber }],
//       });
  
//       // After saving the contact, navigate to the next screen
//       navigation.navigate('NextScreen');
//     } catch (error) {
//       console.error('Error saving contact:', error);
//     }
//   };
  






const handleSaveContact = async () => {
    try {
      const { status } = await Contacts.requestPermissionsAsync("WRITE_CONTACTS");
  
      if (status !== 'granted') {
        console.warn('Write contacts permission denied');
        return;
      }
  
      // Save the contact to the user's phone
      await Contacts.addContactAsync({
        name: contactName,
        phoneNumbers: [{ label: 'mobile', number: contactNumber }],
      });
  
      // After saving the contact, navigate to the next screen
      navigation.navigate('NextScreen');
    } catch (error) {
      console.error('Error saving contact:', error);
    }
  };
  
  
  

  return (
    <View style={styles.container}>
      <Text>Contact Name:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setContactName(text)}
        value={contactName}
        placeholder="Enter contact name"
      />

      <Text>Contact Number:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setContactNumber(text)}
        value={contactNumber}
        placeholder="Enter contact number"
        keyboardType="phone-pad"
      />

      <TouchableOpacity style={styles.saveButton} onPress={handleSaveContact}>
        <Text style={styles.buttonText}>Save Contact</Text>
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
  saveButton: {
    backgroundColor: '#009387', // Green color, you can customize it
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff', // White text, you can customize it
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CreateContactScreen;


