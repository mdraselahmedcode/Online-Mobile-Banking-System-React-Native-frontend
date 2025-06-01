
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import * as Contacts from 'expo-contacts';

function CreateContactScreen({ navigation }) {
  const [contactName, setContactName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactOrganization, setContactOrganization] = useState('');
  const [contactJobTitle, setContactJobTitle] = useState('');
  const [contactWebsite, setContactWebsite] = useState('');

  const handleSaveContact = async () => {
    try {
      // const { status } = await Contacts.requestPermissionsAsync(Contacts.Permission.WRITE_CONTACTS);
      const { status } = await Contacts.requestPermissionsAsync('WRITE_CONTACTS');
      if (status !== 'granted') {
        console.warn('Write contacts permission denied');
        return;
      }

      const contactObject = {
        [Contacts.Fields.FirstName]: contactName,
        [Contacts.Fields.PhoneNumbers]: [{
          label: Contacts.Fields.PhoneNumbers,
          number: contactNumber,
        }],
        [Contacts.Fields.Emails]: [{
          label: Contacts.Fields.Emails,
          email: contactEmail,
        }],
        [Contacts.Fields.Organization]: contactOrganization,
        [Contacts.Fields.JobTitle]: contactJobTitle,
        [Contacts.Fields.UrlAddresses]: [{ label: Contacts.Fields.UrlAddresses, url: contactWebsite }],
        // Add more fields as needed
      };

      // Save the contact to the user's phone
      await Contacts.addContactAsync(contactObject);

      // After saving the contact, navigate to the next screen
      navigation.navigate('Sendmoney_02', {
        contact: {
          name: contactName,
          phoneNumbers: [{ label: 'mobile', number: contactNumber }],
          emails: [{ label: 'work', email: contactEmail }],
          organization: contactOrganization,
          jobTitle: contactJobTitle,
          urlAddresses: [{ label: 'website', url: contactWebsite }],
          // Add more fields as needed
        },
      });
    } catch (error) {
      console.error('Error saving contact:', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
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

      <Text>Contact Email:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setContactEmail(text)}
        value={contactEmail}
        placeholder="Enter contact email"
        keyboardType="email-address"
      />

      <Text>Contact Organization:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setContactOrganization(text)}
        value={contactOrganization}
        placeholder="Enter contact organization"
      />

      <Text>Contact Job Title:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setContactJobTitle(text)}
        value={contactJobTitle}
        placeholder="Enter contact job title"
      />

      <Text>Contact Website:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setContactWebsite(text)}
        value={contactWebsite}
        placeholder="Enter contact website"
      />

      <TouchableOpacity style={styles.saveButton} onPress={handleSaveContact}>
        <Text style={styles.buttonText}>Save Contact</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 3,
    marginBottom: 10,
    padding: 5,
  },
  saveButton: {
    backgroundColor: '#009387',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CreateContactScreen;
