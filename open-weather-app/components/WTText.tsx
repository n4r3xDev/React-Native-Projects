import React, { ReactNode } from 'react';
import { StyleSheet, Text, TextProps, TextStyle } from 'react-native';

export default function WTText({children, style, ...restProps} : WTTextProps) {
  return (
    <Text style={[styles.normal, style]} {...restProps}>{children}</Text>
  )
}

const styles = StyleSheet.create({
    normal: {
        color: "white"
    }
})

interface WTTextProps extends TextProps {
    children: ReactNode;
    style?: TextStyle | TextStyle[]
}