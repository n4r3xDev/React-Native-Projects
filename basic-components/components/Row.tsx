import { View, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'

export function Row({children, style} : RowProps) {
  return (
    <View style={[styles.container, style]}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
})

interface RowProps {
    children: ReactNode[],
    style?: StyleProp<ViewStyle>,
}