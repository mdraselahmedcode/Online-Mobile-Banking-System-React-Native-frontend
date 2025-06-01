
// HelpServiceScreen.js

import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const ExploreScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Getting Started</Text>

      <Text style={styles.subtitle}>1. Download the App</Text>
      <Text>
        Visit your device's app store (Google Play for Android, App Store for iOS) and search for our banking app. Download and install it on your device.
      </Text>

      <Text style={styles.subtitle}>2. Account Setup</Text>
      <Text>
        Open the app and follow the on-screen instructions to set up your account. You may need your account number, mobile number, and other relevant information.
      </Text>

      <Text style={styles.subtitle}>3. Login</Text>
      <Text>
        Once your account is set up, log in using your credentials. You might be required to set up a secure PIN or use biometric authentication for added security.
      </Text>

      <Text style={styles.title}>Account Overview</Text>

      <Text style={styles.subtitle}>Balance Inquiry</Text>
      <Text>
        Check your account balance and recent transactions.
      </Text>

      <Text style={styles.subtitle}>Transaction History</Text>
      <Text>
        View detailed transaction history, including deposits, withdrawals, and transfers.
      </Text>

      {/* Add more sections as needed */}

      <Text style={styles.title}>Transfers and Payments</Text>

      <Text style={styles.subtitle}>Internal Transfers</Text>
      <Text>
        Easily transfer money between your linked accounts.
      </Text>

      <Text style={styles.subtitle}>External Transfers</Text>
      <Text>
        Initiate transfers to other bank accounts securely.
      </Text>

      {/* Add more sections as needed */}

      <Text style={styles.title}>Security Measures</Text>

      <Text style={styles.subtitle}>Two-Factor Authentication</Text>
      <Text>
        Enable two-factor authentication for an extra layer of security.
      </Text>

      <Text style={styles.subtitle}>Lost or Stolen Device</Text>
      <Text>
        If your device is lost or stolen, contact our support team immediately to secure your account.
      </Text>

      <Text style={styles.subtitle}>Secure PIN</Text>
      <Text>
        Keep your login PIN confidential and avoid sharing it with anyone.
      </Text>

      <Text style={styles.title}>Contact Support</Text>

      <Text style={styles.subtitle}>In-App Support</Text>
      <Text>
        Use the in-app support feature to chat with a customer service representative.
      </Text>

      <Text style={styles.subtitle}>Email Support</Text>
      <Text>
        Reach out to our support team via email at <Text style={styles.bld}>sheikhrussel140@gmail.com.</Text> 
      </Text>

      <Text style={styles.subtitle}>Phone Support</Text>
      <Text>
        For urgent matters, call our customer support hotline at <Text style={styles.bld}>01948637301.</Text>
        
      </Text>
      <Text>
         <Text style={styles.bld}>01948637301.</Text>
      </Text>
      <Text>
         <Text style={styles.bld}>01948637301.</Text>
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  bld:{
    fontWeight: 'bold',
    backgroundColor: '#0934',
  },
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default ExploreScreen;
