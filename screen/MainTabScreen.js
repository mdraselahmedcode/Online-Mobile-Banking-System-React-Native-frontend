
import React from 'react';
import { StyleSheet, Text, View,StatusBar  } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';

import SendMoneyScreen from './SendMoneyScreen';
import PaymentScreen from './PaymentScreen';
import BillPaymentScreen from './BillPaymentScreen';
import DepositScreen from './DepositScreen';
import CashOutScreen from './CashOutScreen';
import LoanScreen from './LoanScreen';
import MobileRechargeScreen from './MobileRechargeScreen';
import SendMoneyScreen_02 from './SendMoneyScreen_02';
import CreateContactScreen from './CreateContactScreen';


import ElectricitybillScreen from './ElectricitybillScreen'
import GasbillScreen from './GasbillScreen';
import GovernmentbillScreen from './GovernmentbillScreen';
import InternetbillScreen from './InternetbillScreen';
import WaterbillScreen from './WaterbillScreen';



const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const ExploreStack = createStackNavigator();


const Tab = createMaterialBottomTabNavigator();


const MainTabScreen = () => (
    <Tab.Navigator
      
      initialRouteName="Home"
      activeColor="black" // Text color when tab is active
      inactiveColor="#b3e0ff" // Text color when tab is inactive
      barStyle={{ backgroundColor: '#009387' }} // Background color of the tab bar
      screenOptions={{
        tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' }, // Style for the tab bar labels
      }}
      
    >
      <Tab.Screen
      
        name="Home1"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'Notification',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-notifications" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile1"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#694fad',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore1"
        component={ExploreStackScreen}
        options={{
          tabBarLabel: 'Services',
          tabBarColor: '#d02860',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-aperture" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default MainTabScreen;


const HomeStackScreen = ({navigation}) => (
<HomeStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#009387',
        
        
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        
        }
        
    }}>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{
        title:'Transaction',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />

        <HomeStack.Screen name="Sendmoney" component={SendMoneyScreen} options={{
              title:'Send Money',
              headerLeft: () => (
                  <Icon.Button name="arrow-back-outline" size={25} backgroundColor="#009387" onPress={() => navigation.goBack()}></Icon.Button>
              )
            
              }} />

        
        <HomeStack.Screen name="Payment" component={PaymentScreen} options={{
                      title:'Payment',
                      headerLeft: () => (
                          <Icon.Button name="arrow-back-outline" size={25} backgroundColor="#009387" onPress={() => navigation.goBack()}></Icon.Button>
                      )
                    
                      }} />

        <HomeStack.Screen name="BillPayment" component={BillPaymentScreen} options={{
                      title:'Bill Payment',
                      headerLeft: () => (
                          <Icon.Button name="arrow-back-outline" size={25} backgroundColor="#009387" onPress={() => navigation.goBack()}></Icon.Button>
                      )
                    
                      }} />                     
      

      <HomeStack.Screen name="Deposit" component={DepositScreen} options={{
                      title:'Deposit',
                      headerLeft: () => (
                          <Icon.Button name="arrow-back-outline" size={25} backgroundColor="#009387" onPress={() => navigation.goBack()}></Icon.Button>
                      )
                    
                      }} />  

      <HomeStack.Screen name="Loan" component={LoanScreen} options={{
                      title:'Loan',
                      headerLeft: () => (
                          <Icon.Button name="arrow-back-outline" size={25} backgroundColor="#009387" onPress={() => navigation.goBack()}></Icon.Button>
                      )
                    
                      }} /> 

      <HomeStack.Screen name="Cashout" component={CashOutScreen} options={{
                      title:'Cash Out',
                      headerLeft: () => (
                          <Icon.Button name="arrow-back-outline" size={25} backgroundColor="#009387" onPress={() => navigation.goBack()}></Icon.Button>
                      )
                    
                      }} /> 
      <HomeStack.Screen name="Mobilerecharge" component={MobileRechargeScreen} options={{
                      title:'Cash Out',
                      headerLeft: () => (
                          <Icon.Button name="arrow-back-outline" size={25} backgroundColor="#009387" onPress={() => navigation.goBack()}></Icon.Button>
                      )
                    
                      }} /> 

      <HomeStack.Screen name="Sendmoney_02" component={SendMoneyScreen_02} options={{
                      title:'Send Money',
                      headerLeft: () => (
                          <Icon.Button name="arrow-back-outline" size={25} backgroundColor="#009387" onPress={() => navigation.goBack()}></Icon.Button>
                      )
                    
                      }} /> 

      <HomeStack.Screen name="Createcontact" component={CreateContactScreen} options={{
                            title:'Create Contact',
                            headerLeft: () => (
                                <Icon.Button name="arrow-back-outline" size={25} backgroundColor="#009387" onPress={() => navigation.goBack()}></Icon.Button>
                            )
                          
                            }} />

















<HomeStack.Screen name="Waterbill" component={WaterbillScreen} options={{
                      title:'Water Bill',
                      headerLeft: () => (
                          <Icon.Button name="arrow-back-outline" size={25} backgroundColor="#009387" onPress={() => navigation.goBack()}></Icon.Button>
                      )
                    
                      }} /> 

      <HomeStack.Screen name="Electricitybill" component={ElectricitybillScreen} options={{
                      title:'Electricity Bill',
                      headerLeft: () => (
                          <Icon.Button name="arrow-back-outline" size={25} backgroundColor="#009387" onPress={() => navigation.goBack()}></Icon.Button>
                      )
                    
                      }} /> 
      <HomeStack.Screen name="Gasbill" component={GasbillScreen} options={{
                      title:'Gas Bill',
                      headerLeft: () => (
                          <Icon.Button name="arrow-back-outline" size={25} backgroundColor="#009387" onPress={() => navigation.goBack()}></Icon.Button>
                      )
                    
                      }} /> 

      <HomeStack.Screen name="Governmentbill" component={GovernmentbillScreen} options={{
                      title:'Government Bill',
                      headerLeft: () => (
                          <Icon.Button name="arrow-back-outline" size={25} backgroundColor="#009387" onPress={() => navigation.goBack()}></Icon.Button>
                      )
                    
                      }} /> 

      <HomeStack.Screen name="Internetbill" component={InternetbillScreen} options={{
                            title:'Internetbill',
                            headerLeft: () => (
                                <Icon.Button name="arrow-back-outline" size={25} backgroundColor="#009387" onPress={() => navigation.goBack()}></Icon.Button>
                            )
                          
                            }} />
                      



</HomeStack.Navigator>
);




const DetailsStackScreen = ({navigation}) => (
  <DetailsStack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#009387', // top bar background color
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold'
          }
      }}>
          <DetailsStack.Screen name="Notification" component={DetailsScreen} options={{
          headerLeft: () => (
              <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
          )
          }} />
  </DetailsStack.Navigator>
  );



  const ProfileStackScreen = ({navigation}) => (
    <ProfileStack.Navigator screenOptions={{
            headerStyle: {
            backgroundColor: '#009387',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold'
            }
        }}>
            <ExploreStack.Screen name="Profile" component={ProfileScreen} options={{
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
            )
            }} />
    </ProfileStack.Navigator>
    );
    


const ExploreStackScreen = ({navigation}) => (
<ExploreStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <ExploreStack.Screen name="Services" component={ExploreScreen} options={{
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
</ExploreStack.Navigator>
);





  
  