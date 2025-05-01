import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp } from '../navigation/types';
import GradientButton from '../components/GradientButton';
import { useTheme } from '../context/ThemeContext';

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { colors } = useTheme();
  
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>Home Screen</Text>
      <Text style={[styles.description, { color: colors.secondaryText }]}>Welcome to the app!</Text>
      
      <View style={styles.buttonContainer}>
        <GradientButton 
          title="Go to Profile"
          onPress={() => navigation.navigate('Profile')}
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
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 40,
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 300,
  }
});

export default HomeScreen;