import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Alert,
  SafeAreaView,
} from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>

      {/* Profile Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Group Profile</Text>
        <Text style={styles.username}>ootd_everyday</Text>
      </View>

      {/* Profile Information */}
      <View style={styles.profileSection}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>OOTD</Text>
        </View>

        <View style={styles.stats}>
          <Text>53 Posts</Text>
          <Text>12 Members</Text>
          <Text>1 Admin</Text>
        </View>
      </View>

      {/* Biography */}
      <View style={styles.bio}>
        <Text style={styles.bold}>OOTD Everyday</Text>
        <Text>Fit check!</Text>
        <Text>You know we'll hype you up.</Text>
      </View>

      {/* Alert Button */}
      <Pressable
        style={styles.alertButton}
        onPress={() => Alert.alert('Alert Button pressed')}
      >
        <Text style={styles.buttonText}>Alert</Text>
      </Pressable>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },

  header: {
    alignItems: 'center',
    marginTop: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },

  username: {
    fontSize: 14,
    color: 'gray',
  },

  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#2196F3',
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },

  stats: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: 15,
  },

  bio: {
    marginTop: 20,
  },

  bold: {
    fontWeight: 'bold',
  },

  alertButton: {
    backgroundColor: '#E1306C',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 20,
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});