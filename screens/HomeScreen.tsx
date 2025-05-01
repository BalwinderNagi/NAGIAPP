import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp } from '../navigation/types';
import GradientButton from '../components/GradientButton';

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Text style={styles.description}>Welcome to the app!</Text>
      
      <View style={styles.buttonContainer}>
      <GradientButton 
          title="Go to Profile"
          onPress={() => navigation.navigate('Settings')}
          colors={['#12c2e9', '#c471ed', '#f64f59']}
        />
        
        <GradientButton 
          title="Go to Settings"
          onPress={() => navigation.navigate('Settings')}
          colors={['#12c2e9', '#c471ed', '#f64f59']}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#666',
    marginBottom: 40,
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 300,
  }
});

export default HomeScreen;