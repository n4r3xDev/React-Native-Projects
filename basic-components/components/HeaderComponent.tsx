import { View, Text, StyleSheet, StyleProp, TextStyle } from 'react-native'
import React from 'react'

export function HeaderComponent({title, subtitle, titleStyle, subtitleStyle} : HeaderComponentProps) {
  return (
    <View>
      <Text style={[styles.titleText, titleStyle]}>{title}</Text>
      <Text style={[styles.subtitleText, subtitleStyle]}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 30,
    alignSelf: "center",
  },
  subtitleText: {
    fontSize: 20,
    alignSelf: "center",
    color: "gray",
    fontStyle: "italic",
  },
});

interface HeaderComponentProps {
    title: string, 
    subtitle: string, 
    titleStyle?: StyleProp<TextStyle>, 
    subtitleStyle?: StyleProp<TextStyle>,
}