import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ProfileScreenNavigationProp } from '../navigation/types';
import GradientButton from '../components/GradientButton';
import { useTheme } from '../context/ThemeContext';

const ProfileScreen = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const { colors } = useTheme();
  
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.profileHeader}>
        <View style={styles.avatarContainer}>
          <Image 
            source={{ uri: 'https://placebear.com/200/200' }} 
            style={styles.avatar}
          />
        </View>
        <Text style={[styles.name, { color: colors.text }]}>John Doe</Text>
        <Text style={[styles.username, { color: colors.secondaryText }]}>@johndoe</Text>
      </View>
      
      <View style={[styles.infoContainer, { 
        backgroundColor: colors.card,
        shadowColor: colors.text
      }]}>
        <View style={[styles.infoItem, { borderBottomColor: colors.border }]}>
          <Text style={[styles.infoLabel, { color: colors.secondaryText }]}>Email</Text>
          <Text style={[styles.infoValue, { color: colors.text }]}>john.doe@example.com</Text>
        </View>
        
        <View style={[styles.infoItem, { borderBottomColor: colors.border }]}>
          <Text style={[styles.infoLabel, { color: colors.secondaryText }]}>Location</Text>
          <Text style={[styles.infoValue, { color: colors.text }]}>San Francisco, CA</Text>
        </View>
        
        <View style={[styles.infoItem, { borderBottomColor: colors.border }]}>
          <Text style={[styles.infoLabel, { color: colors.secondaryText }]}>Member Since</Text>
          <Text style={[styles.infoValue, { color: colors.text }]}>January 2023</Text>
        </View>
      </View>
      
      <View style={styles.buttonContainer}>
        <GradientButton 
          title="Back to Home"
          onPress={() => navigation.navigate('Home')}
          colors={['#12c2e9', '#c471ed', '#f64f59']}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 20,
  },
  avatarContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    overflow: 'hidden',
    marginBottom: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  username: {
    fontSize: 16,
    marginTop: 4,
  },
  infoContainer: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    elevation: 2,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  infoItem: {
    marginBottom: 16,
    borderBottomWidth: 1,
    paddingBottom: 16,
  },
  infoLabel: {
    fontSize: 14,
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 20,
  }
});

export default ProfileScreen;