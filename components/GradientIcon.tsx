import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';

interface GradientIconProps {
  name: keyof typeof Ionicons.glyphMap;
  size: number;
  colors: string[];
}

const GradientIcon: React.FC<GradientIconProps> = ({ name, size, colors }) => {
  return (
    <MaskedView
      style={{ width: size, height: size }}
      maskElement={
        <View style={styles.iconContainer}>
          <Ionicons name={name} size={size} color="black" />
        </View>
      }
    >
      <LinearGradient
        colors={colors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ flex: 1 }}
      />
    </MaskedView>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GradientIcon;