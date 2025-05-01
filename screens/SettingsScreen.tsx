import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { SettingsScreenNavigationProp } from '../navigation/types';
import GradientButton from '../components/GradientButton';

// Define prop types for the SettingItem component
interface SettingItemProps {
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  hasToggle?: boolean;
  toggleValue?: boolean;
  onToggleChange?: (value: boolean) => void;
  showArrow?: boolean;
  onPress?: () => void;
}

const SettingsScreen = () => {
  const navigation = useNavigation<SettingsScreenNavigationProp>();
  
  // State for toggle switches
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [soundEffects, setSoundEffects] = useState(true);
  const [autoUpdate, setAutoUpdate] = useState(false);
  
  // Setting item component
  const SettingItem: React.FC<SettingItemProps> = ({ 
    title, 
    icon, 
    hasToggle = false, 
    toggleValue = false, 
    onToggleChange = () => {},
    showArrow = false,
    onPress = () => {}
  }) => (
    <TouchableOpacity 
      style={styles.settingItem}
      onPress={onPress}
      activeOpacity={showArrow ? 0.7 : 1}
    >
      <View style={styles.settingIconContainer}>
        <Ionicons name={icon} size={22} color="#36D1DC" />
      </View>
      
      <View style={styles.settingContent}>
        <Text style={styles.settingTitle}>{title}</Text>
      </View>
      
      {hasToggle && (
        <Switch
          value={toggleValue}
          onValueChange={onToggleChange}
          trackColor={{ false: '#ccc', true: '#bde2ff' }}
          thumbColor={toggleValue ? '#36D1DC' : '#f4f3f4'}
          ios_backgroundColor="#ccc"
        />
      )}
      
      {showArrow && (
        <Ionicons name="chevron-forward" size={20} color="#ccc" />
      )}
    </TouchableOpacity>
  );
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Appearance</Text>
        <View style={styles.sectionContent}>
          <SettingItem 
            title="Dark Mode" 
            icon="moon-outline" 
            hasToggle 
            toggleValue={darkMode} 
            onToggleChange={setDarkMode} 
          />
        </View>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferences</Text>
        <View style={styles.sectionContent}>
          <SettingItem 
            title="Notifications" 
            icon="notifications-outline" 
            hasToggle 
            toggleValue={notifications} 
            onToggleChange={setNotifications} 
          />
          <SettingItem 
            title="Sound Effects" 
            icon="volume-high-outline" 
            hasToggle 
            toggleValue={soundEffects} 
            onToggleChange={setSoundEffects} 
          />
          <SettingItem 
            title="Auto Update" 
            icon="refresh-outline" 
            hasToggle 
            toggleValue={autoUpdate} 
            onToggleChange={setAutoUpdate} 
          />
        </View>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>
        <View style={styles.sectionContent}>
          <SettingItem 
            title="Personal Information" 
            icon="person-outline" 
            showArrow 
            onPress={() => {}}
          />
          <SettingItem 
            title="Security" 
            icon="lock-closed-outline" 
            showArrow
            onPress={() => {}}
          />
          <SettingItem 
            title="Privacy" 
            icon="eye-off-outline" 
            showArrow
            onPress={() => {}}
          />
        </View>
      </View>
      
      <View style={styles.buttonContainer}>
        <GradientButton 
          title="Back to Home"
          onPress={() => navigation.navigate('Home')}
          colors={['#12c2e9', '#c471ed', '#f64f59']}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#999',
    marginLeft: 16,
    marginBottom: 8,
  },
  sectionContent: {
    backgroundColor: 'white',
    borderRadius: 12,
    overflow: 'hidden',
    marginHorizontal: 16,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  settingIconContainer: {
    width: 30,
    alignItems: 'center',
    marginRight: 10,
  },
  settingContent: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    color: '#333',
  },
  buttonContainer: {
    marginHorizontal: 16,
    marginTop: 20,
    marginBottom: 40,
  }
});

export default SettingsScreen;