// // ProfileScreen.js

// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const ProfileScreen = () => {
//   // Dummy user data (replace with actual user data)
//   const user = {
//     name: 'Sheikh Russell',
//     mobilenumber: '01929951023',
//     accountBalance: 500.00,
//     // Add more user details as needed
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>User Profile</Text>
//       <View style={styles.profileInfo}>
//         <Text style={styles.label}>Name:</Text>
//         <Text style={styles.value}>{user.name}</Text>

//         <Text style={styles.label}>Mobile Number:</Text>
//         <Text style={styles.value}>{user.mobilenumber}</Text>

//         <Text style={styles.label}>Account Balance:</Text>
//         <Text style={styles.value}>BDT: {user.accountBalance.toFixed(2)} ৳</Text>

//         {/* Add more user details as needed */}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   profileInfo: {
//     backgroundColor: '#fff',
//     padding: 20,
//     borderRadius: 10,
//     elevation: 5,
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginTop: 10,
//   },
//   value: {
//     fontSize: 16,
//     marginTop: 5,
//   },
// });

// export default ProfileScreen;












// ProfileScreen.js

import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ProfileScreen = () => {
  const [profileImage, setProfileImage] = useState(null);

  // Dummy user data (replace with actual user data)
  const user = {
    name: 'Sheikh Russell',
    mobilenumber: '01929951023',
    accountBalance: 500.00,
    // Add more user details as needed
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setProfileImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" /> 

      {/* <Text style={styles.header}>User Profile</Text> */}

      <TouchableOpacity onPress={pickImage} style={styles.imageContainer}>
        {profileImage ? (
          <Image source={{ uri: profileImage }} style={styles.profileImage} />
        ) : (
          <Text style={styles.selectImageText}>Select Profile Image</Text>
        )}
      </TouchableOpacity>

      <View style={styles.profileInfo}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>{user.name}</Text>

        <Text style={styles.label}>Mobile Number:</Text>
        <Text style={styles.value}>{user.mobilenumber}</Text>

        <Text style={styles.label}>Account Balance:</Text>
        <Text style={styles.value}>BDT: {user.accountBalance.toFixed(2)} ৳</Text>

        {/* Add more user details as needed */}
      </View>
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
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  selectImageText: {
    fontSize: 16,
    color: 'blue',
  },
  profileInfo: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  value: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default ProfileScreen;
