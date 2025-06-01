

//   import { StyleSheet,Text,  View } from 'react-native'
//   import React from 'react'
//   import { createDrawerNavigator,DrawerItem,DrawerItemList,DrawerContentScrollView } from '@react-navigation/drawer'
//   import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
  
//   import {
//       useTheme,
//       Avatar,
//       Title,
//       Caption,
//       Paragraph,
//       Drawer,
//       /*Text, */
//       TouchableRipple,
//       Switch
//   } from 'react-native-paper';

//   import { AuthContext } from '../components/context';
  
  

  
//   export default function DrawerContent(props) {

//   const { signOut, toggleTheme } = React.useContext(AuthContext);

//   return(
//     <View style={{flex:1}}>
//     <DrawerContentScrollView {...props}>
        
//      {/* <DrawerItemList {...props} /> */}

//         <View style={styles.drawerContent}>
            
//             <View style={styles.userInfoSection}>
//                 <View style={{flexDirection:'row',marginTop: 15}}>
//                     <Avatar.Image 
//                         source={{
//                             uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
//                         }}
//                         size={50}
//                     />
//                     <View style={{marginLeft:15, flexDirection:'column'}}>
//                         <Title style={styles.title}>Sheikh Russell</Title>
//                         {/* <Caption style={styles.caption}>shekhrussel140@gmail.com</Caption> */}
                        
//                         <View style={styles.section}>
//                         <Caption style={styles.caption}>Mobile No: </Caption>
//                         <Paragraph style={[styles.paragraph, styles.caption]}>01929951023</Paragraph>
                        
//                     </View>
                        
//                     </View>
                    
//                 </View>

//                 {/* <View style={styles.row}>
//                     <View style={styles.section}>
//                         <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
//                         <Caption style={styles.caption}>Following</Caption>
//                     </View>
//                     <View style={styles.section}>
//                         <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
//                         <Caption style={styles.caption}>Followers</Caption>
//                     </View>
//                 </View> */}
//             </View>

//             <Drawer.Section style={styles.drawerSection}>
//                 <DrawerItem 
//                     icon={({color, size}) => (
//                         <Icon 
//                         name="home-outline" 
//                         color={color}
//                         size={size}
//                         />
//                     )}
//                     label="Home"
//                     onPress={() => {props.navigation.navigate('Home1')}}
//                 />
//                 <DrawerItem 
//                     icon={({color, size}) => (
//                         <Icon 
//                         name="account-outline" 
//                         color={color}
//                         size={size}
//                         />
//                     )}
//                     label="Profile"
//                     onPress={() => {props.navigation.navigate('Profile')}}
//                 />
//                 <DrawerItem 
//                     icon={({color, size}) => (
//                         <Icon 
//                         name="bookmark-outline" 
//                         color={color}
//                         size={size}
//                         />
//                     )}
//                     label="Bookmarks"
//                     onPress={() => {props.navigation.navigate('BookmarkScreen')}}
//                 />
//                 <DrawerItem 
//                     icon={({ color, size }) => (
//                         <Icon name="cog" 
//                         color={color} 
//                         size={size} 
//                         />
//                     )}
//                     label="Settings"
//                     onPress={() => {props.navigation.navigate('SettingsScreen')}}
//                 />
//                 <DrawerItem 
//                     icon={({color, size}) => (
//                         <Icon 
//                         name="account-check-outline" 
//                         color={color}
//                         size={size}
//                         />
//                     )}
//                     label="Support"
//                     onPress={() => {props.navigation.navigate('SupportScreen')}}
//                 />
                
//             </Drawer.Section>
//             <Drawer.Section title="Preferences">
//                 <TouchableRipple > 
//                     <View style={styles.preference}>
//                         <Text>Dark Theme</Text>
//                         <View pointerEvents="none">
//                             <Switch />
//                         </View>
//                     </View>
//                 </TouchableRipple>
//             </Drawer.Section>
//         </View>
//     </DrawerContentScrollView>
//     <Drawer.Section style={styles.bottomDrawerSection}>
//         <DrawerItem 
//             icon={({color, size}) => (
//                 <Icon 
//                 name="exit-to-app" 
//                 color={color}
//                 size={size}
//                 />
//             )}
//             label="Sign Out"
//             onPress={() => {signOut()}}
//         />
//     </Drawer.Section>
// </View>
//   );

// }

//   const styles = StyleSheet.create({
//     drawerContent: {
//       flex: 1,
//     },
//     userInfoSection: {
//       paddingLeft: 20,
//     },
//     title: {
//       fontSize: 16,
//       marginTop: 3,
//       fontWeight: 'bold',
//     },
//     caption: {
//       fontSize: 14,
//       lineHeight: 14,
//     },
//     row: {
//       marginTop: 20,
//       flexDirection: 'row',
//       alignItems: 'center',
//     },
//     section: {
//       flexDirection: 'row',
//       alignItems: 'center',
//       marginRight: 15,
//     },
//     paragraph: {
//       fontWeight: 'bold',
//       marginRight: 3,
//     },
//     drawerSection: {
//       marginTop: 15,
//     },
//     bottomDrawerSection: {
//         marginBottom: 15,
//         borderTopColor: '#f4f4f4',
//         borderTopWidth: 1
//     },
//     preference: {
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//       paddingVertical: 12,
//       paddingHorizontal: 16,
//     },
//   });











import React from 'react';
import { View, StyleSheet, Text, Switch, StatusBar } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme, Avatar, Title, Caption, Paragraph, Drawer, TouchableRipple } from 'react-native-paper';
import { AuthContext } from '../components/context';

export default function DrawerContent(props) {
    const { signOut, toggleTheme } = React.useContext(AuthContext);
    const [isDarkTheme, setIsDarkTheme] = React.useState(false);
    const theme = useTheme(); // Assuming useTheme is imported from react-native-paper
  
    const onToggleSwitch = () => {
      setIsDarkTheme(!isDarkTheme);
      toggleTheme(); // Assuming toggleTheme is a function to toggle the theme in your context
    };


    const styles = StyleSheet.create({
        drawerContent: {
          flex: 1,
          backgroundColor: theme.dark ? '#333' : '#fff', // Set background color based on theme
        },
        userInfoSection: {
          paddingLeft: 20,
        },
        title: {
          fontSize: 16,
          marginTop: 3,
          fontWeight: 'bold',
          color: theme.dark ? '#fff' : '#333', // Set font color based on theme
        },
        section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
        },
        caption: {
          fontSize: 14,
          lineHeight: 14,
          color: theme.dark ? '#ccc' : '#666', // Set font color based on theme
        },
        drawerSection: {
          marginTop: 15,
        },
        bottomDrawerSection: {
          marginBottom: 15,
          borderTopColor: theme.dark ? '#444' : '#ddd', // Set border color based on theme
          borderTopWidth: 1,
        },
        preference: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 12,
          paddingHorizontal: 16,
        },
      });

      
  
  return (
    <View style={styles.drawerContent}>
      <DrawerContentScrollView {...props} style={{ marginTop: StatusBar.currentHeight || 0 }}>
        <View style={styles.userInfoSection}>
          <View style={{ flexDirection: 'row', marginTop: 15 }}>
            <Avatar.Image source={{ uri: 'https://api.adorable.io/avatars/50/abott@adorable.png' }} size={50} />
            <View style={{ marginLeft: 15, flexDirection: 'column' }}>
              <Title style={styles.title}>Sheikh Russell</Title>
              <View style={styles.section}>
                <Caption style={styles.caption}>Mobile No: </Caption>
                <Paragraph style={[styles.paragraph, styles.caption]}>01929951023</Paragraph>
              </View>
            </View>
          </View>
        </View>

        {/* <Drawer.Section style={styles.drawerSection} > */}
        <Drawer.Section style={{ paddingTop: StatusBar.currentHeight || 0 }}>

          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="home-outline" color={color} size={size} />
            )}
            label="Home"
            onPress={() => { props.navigation.navigate('Home1') }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="account-outline" color={color} size={size} />
            )}
            label="Profile"
            onPress={() => { props.navigation.navigate('Profile1') }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="bookmark-outline" color={color} size={size} />
            )}
            label="Bookmarks"
            onPress={() => { props.navigation.navigate('BookmarkScreen') }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="cog" color={color} size={size} />
            )}
            label="Settings"
            onPress={() => { props.navigation.navigate('SettingsScreen') }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="account-check-outline" color={color} size={size} />
            )}
            label="Support"
            onPress={() => { props.navigation.navigate('SupportScreen') }}
          />
        </Drawer.Section>
        <Drawer.Section title="Preferences">
          <TouchableRipple onPress={onToggleSwitch}>
            <View style={styles.preference}>
              <Text style={{ color: theme.dark ? '#ccc' : '#666' }}>Dark Theme</Text>
              <Switch value={isDarkTheme} onValueChange={onToggleSwitch} />
            </View>
          </TouchableRipple>
        </Drawer.Section>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => { signOut() }}
        />
      </Drawer.Section>
    </View>
  );
}














