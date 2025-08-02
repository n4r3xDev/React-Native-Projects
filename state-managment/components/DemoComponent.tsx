import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'

const DemoComponent = memo(function DemoComponent() {
    console.log("DemoComponent rendered");
  return (
    <View>
      <Text>DemoComponent</Text>
    </View>
  )
})

export default DemoComponent;

const styles = StyleSheet.create({})