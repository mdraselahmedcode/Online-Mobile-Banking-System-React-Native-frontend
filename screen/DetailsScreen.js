// NotificationScreen.js

import React from 'react';
import { View, Text, FlatList, StyleSheet, StatusBar } from 'react-native';

const notifications = [
  { id: '1', message: 'You have sent 100 BDT to 01723847323', time: 'Today 10:30 AM' },
  { id: '2', message: 'You got 20 BDT loan', time: 'Today 11:45 AM' },
  { id: '3', message: 'You have a new follower', time: 'Today 1:15 PM' },
  { id: '4', message: 'You received 500 BDT from 01929834347', time: 'Yesterday 2:30 PM' },
  { id: '5', message: 'You received $20 from 01823743432', time: 'Yesterday 3:45 PM' },
  { id: '6', message: 'You have sent 100 BDT to 01723847323', time: 'Yesterday 10:30 AM' },
  { id: '7', message: 'You got 20 BDT loan', time: '11:45 AM' },
  { id: '8', message: 'You have sent 100 BDT to 01924343423', time: '1:15 PM' },
  { id: '9', message: 'You received 500 BDT from 01929834347', time: 'Yesterday 2:30 PM' },
  { id: '10', message: 'You received $20 from 01823743432', time: '12/9/2023  3:45 PM' },
  // Add more notifications as needed
];

const NotificationScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" /> 

      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.notificationItem}>
            <Text style={styles.message}>{item.message}</Text>
            <Text style={styles.time}>{item.time}</Text>
          </View>
        )}
      />
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
  notificationItem: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
  },
  message: {
    fontSize: 16,
  },
  time: {
    color: '#888',
    fontSize: 12,
    marginTop: 5,
  },
});

export default NotificationScreen;
