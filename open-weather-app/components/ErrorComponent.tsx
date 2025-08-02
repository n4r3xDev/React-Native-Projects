import React from 'react'
import { StyleSheet, View } from 'react-native'
import WTText from './WTText'

export default function ErrorComponent({message} : {message: string}) {
  return (
    <View style={styles.container}>
      <WTText style={{fontSize: 18}}>{message}</WTText>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})