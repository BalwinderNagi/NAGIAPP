import React from 'react';
import { 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  TouchableOpacityProps, 
  View, 
  ViewStyle, 
  TextStyle 
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface GradientButtonProps extends TouchableOpacityProps {
  title: string;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
  colors?: string[];
  start?: { x: number; y: number };
  end?: { x: number; y: number };
}

const GradientButton: React.FC<GradientButtonProps> = ({
  title,
  containerStyle,
  textStyle,
  colors = ['#00B4DB', '#0083B0', '#00B09B'],
  start = { x: 0, y: 0 },
  end = { x: 1, y: 0 },
  ...touchableProps
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, containerStyle]}
      activeOpacity={0.8}
      {...touchableProps}
    >
      <LinearGradient
        colors={colors}
        start={start}
        end={end}
        style={styles.gradient}
      >
        <Text style={[styles.buttonText, textStyle]}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginVertical: 10,
    borderRadius: 30,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  gradient: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default GradientButton;