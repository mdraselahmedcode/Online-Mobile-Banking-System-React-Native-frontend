
// // import React from 'react';
// // import { Text, View } from 'react-native';
// // import MaskedView from '@react-native-masked-view/masked-view';

// // const HomeScreen = () => {
// //   return (
// //     <MaskedView
// //       style={{ flex: 1, flexDirection: 'row', height: '100%' }}
// //       maskElement={
// //         <View
// //           style={{
// //             // Transparent background because mask is based off alpha channel.
// //             backgroundColor: 'transparent',
// //             flex: 1,
// //             justifyContent: 'center',
// //             alignItems: 'center',
// //           }}
// //         >
// //           <Text
// //             style={{
// //               fontSize: 60,
// //               color: 'black',
// //               fontWeight: 'bold',
// //             }}
// //           >
// //             Basic Mask
// //           </Text>
// //         </View>
// //       }
// //     >
// //       {/* Shows behind the mask, you can put anything here, such as an image */}
// //       <View style={{ flex: 1, height: '100%', backgroundColor: '#324376' }} />
// //       <View style={{ flex: 1, height: '100%', backgroundColor: '#F5DD90' }} />
// //       <View style={{ flex: 1, height: '100%', backgroundColor: '#F76C5E' }} />
// //       <View style={{ flex: 1, height: '100%', backgroundColor: '#e1e1e1' }} />
// //     </MaskedView>
// //   );
// // }

// // export default HomeScreen;





// // import React from 'react';
// // import { View, Text, Button,StyleSheet,TouchableOpacity } from 'react-native';

// // import { NavigationContainer } from '@react-navigation/native';
// // import MainTabScreen from './MainTabScreen';








// // export default function HomeScreen  ({navigation}) {
// // return(
// //   <View>
// // <Text style={styles.title}></Text>
// // <TouchableOpacity>
// // <Button
// //   title="Go to Root, send money"
// //   onPress={() => navigation.navigate('Sendmoney')}
// // />
// // </TouchableOpacity>

// // </View> 
// // );
// // }


// // const styles = StyleSheet.create({})







// // import React from 'react';
// // import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// // import Icon from 'react-native-vector-icons/MaterialIcons';

// // const HomeScreen = ({ navigation }) => {
// //   // const navigateToScreen = (screenName) => {
// //   //   // Navigate to the corresponding screen
// //   //   navigation.navigate(screenName);
// //   // };

// //   return (
// //     <View style={styles.container}>
// //       <TouchableOpacity
// //         style={styles.button}
// //         onPress={() => navigation.navigate('Sendmoney')}
// //       >
// //         <Icon name="send" size={30} color="#fff" />
// //         <Text style={styles.buttonText}>Send Money</Text>
// //       </TouchableOpacity>



// //       <TouchableOpacity
// //         style={styles.button}
// //         onPress={() => navigateToScreen('PaymentScreen')}
// //       >
// //         <Icon name="payment" size={30} color="#fff" />
// //         <Text style={styles.buttonText}>Payment</Text>
// //       </TouchableOpacity>

// //       <TouchableOpacity
// //         style={styles.button}
// //         onPress={() => navigateToScreen('BillPaymentScreen')}
// //       >
// //         <Icon name="receipt" size={30} color="#fff" />
// //         <Text style={styles.buttonText}>Bill Payment</Text>
// //       </TouchableOpacity>

// //       <TouchableOpacity
// //         style={styles.button}
// //         onPress={() => navigateToScreen('DepositScreen')}
// //       >
// //         <Icon name="account-balance" size={30} color="#fff" />
// //         <Text style={styles.buttonText}>Deposit</Text>
// //       </TouchableOpacity>

// //       <TouchableOpacity
// //         style={styles.button}
// //         onPress={() => navigateToScreen('LoanScreen')}
// //       >
// //         <Icon name="attach-money" size={30} color="#fff" />
// //         <Text style={styles.buttonText}>Loan</Text>
// //       </TouchableOpacity>

// //       <TouchableOpacity
// //         style={styles.button}
// //         onPress={() => navigateToScreen('CashOutScreen')}
// //       >
// //         <Icon name="money-off" size={30} color="#fff" />
// //         <Text style={styles.buttonText}>Cash Out</Text>
// //       </TouchableOpacity>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   button: {
// //     flexDirection: 'column',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     backgroundColor: '#3498db',
// //     padding: 20,
// //     margin: 10,
// //     borderRadius: 10,
// //   },
// //   buttonText: {
// //     color: '#fff',
// //     marginTop: 10,
// //   },
// // });

// // export default HomeScreen;








import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet,StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';




const HomeScreen = ({ navigation }) => {
  const buttons = [
    
    { name: 'Send Money', icon: 'send', screen: 'Sendmoney' },
    { name: 'Payment', icon: 'payment', screen: 'Payment' },
    { name: 'Bill Payment', icon: 'receipt', screen: 'BillPayment' },
    { name: 'Deposit', icon: 'account-balance', screen: 'Deposit' },
    { name: 'Loan', icon: 'attach-money', screen: 'Loan' },
    { name: 'Cash Out', icon: 'money-off', screen: 'Cashout' },
    {name: 'Mobile Recharge', icon: 'phone', screen: 'Mobilerecharge' },
    
    // Add other buttons with corresponding screen names
  ];

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };




  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" /> 
      {buttons.map((button, index) => (
        <TouchableOpacity
          key={index}
          style={styles.button}
          // onPress={() => navigation.navigate('Sendmoney')}
          // onPress={() => navigation.navigate(`${button.screen}Screen`)}
          onPress={() => navigateToScreen(`${button.screen}`)}
        >
          <Icon name={button.icon} size={20} color="#fff" />
          <Text style={styles.buttonText}>{button.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
    
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 10,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#009387',
    
    
    padding: 10,
    margin: 20,
    borderRadius: 10,
    width: 80, // Adjust the width as needed
    height: 80, // Make the height equal to the width for a square shape
  },
  buttonText: {
    color: '#fff',
    marginTop: 5,
    textAlign: 'center',
  },
});


export default HomeScreen;