import { NavigatorScreenParams } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp } from '@react-navigation/native';

// Define the type for our tab navigation params
export type RootTabParamList = {
  Home: undefined;
  Profile: undefined;
  Settings: undefined;
};

// Define navigation prop types for each screen
export type HomeScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<RootTabParamList, 'Home'>,
  any
>;

export type ProfileScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<RootTabParamList, 'Profile'>,
  any
>;

export type SettingsScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<RootTabParamList, 'Settings'>,
  any
>;