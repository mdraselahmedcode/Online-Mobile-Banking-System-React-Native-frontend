








import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, Alert, TouchableOpacity, StyleSheet } from 'react-native';
import * as Contacts from 'expo-contacts';
import Icon from 'react-native-vector-icons/Ionicons';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';








const SendMoneyScreen = ({ navigation }) => {
  const [inputValue, setInputValue] = useState('');
  const [initialContacts, setInitialContacts] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    requestContactsPermission();
  }, []);

  const requestContactsPermission = async () => {
    const { status } = await Contacts.requestPermissionsAsync();
    
    if (status === 'granted') {
      fetchContacts();
    } else {
      console.warn('Contacts permission denied');
    }
  };

  const fetchContacts = async () => {
    const { data } = await Contacts.getContactsAsync({
      fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers],
    });

    if (data) {
      setInitialContacts(data);
      setRecommendations(data);
    }
  };

  const updateRecommendations = (value) => {
    const filteredContacts = initialContacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase()) ||
        (contact.phoneNumbers &&
          contact.phoneNumbers.some((phoneNumber) =>
            phoneNumber.number.includes(value)
          ))
    );
    setRecommendations(filteredContacts);
  };

  const handleContactSelection = (selectedContact) => {
    // setInputValue(selectedContact.name); // Set the selected contact's name to the input value
    // setRecommendations([]); // Clear recommendations after selection

    // Navigate to the ContactDetails screen

    // console.log({contact: selectedContact});

      navigation.navigate('Sendmoney_02', { contact: selectedContact });

    
  };



  useEffect(() => {
    updateRecommendations(inputValue);
  }, [inputValue, initialContacts]);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}  >
        <Text>Enter text or number:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setInputValue(text)}
          value={inputValue}
          placeholder="Type here..."
          
        /> 
      </View>
      
      
    { recommendations.length > 0 ? (
      <View style={styles.recommendationsContainer}>
        
        <FlatList
          data={recommendations}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleContactSelection(item)}>
              <View style={styles.recommendationItem}>
                <Text>{item.name}</Text>
                {item.phoneNumbers &&
                  item.phoneNumbers.map((phoneNumber, index) => (
                    <Text key={index}>{phoneNumber.number}</Text>
                  ))}
              </View>
            </TouchableOpacity>
          )}
        />

      </View>         
      ) : 
          ( <View> 
              
              {/* <TouchableOpacity onPress={() => handleContactSelection(item)}style={styles.rightarrowButton}>
                
              <Icon.Button name="arrow-forward" size={25} backgroundColor="#009387" justifyContent='center' 
                            onPress={() => navigation.navigate('Sendmoney_02', { contact: inputValue })}></Icon.Button>
              </TouchableOpacity> */}


              <TouchableOpacity onPress={() => {navigation.navigate('Createcontact')}} style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Create Contact</Text>
              </TouchableOpacity>
            </View>
          )
    }
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
  recommendationsContainer: {
    flex: 1,
  },
  recommendationItem: {
    borderBottomWidth: 1,
    borderColor: 'gray',
    padding: 10,
  },
  contactInfoContainer: {
    marginBottom: 20,
  },
  phoneNumberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  phoneNumberText: {
    marginLeft: 10,
  },
  createContactButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  createContactButtonText: {
    color: 'white',
  },
  arrowButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  rightarrowButton: {
    marginTop: 10,
    justifyContent: 'center',
    
  },
  buttonContainer: {
    backgroundColor: '#009387', // Green color, you can customize it
    padding: 10,
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

export default SendMoneyScreen;







