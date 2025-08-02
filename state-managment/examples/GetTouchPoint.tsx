import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'

export default function GetTouchPoint() {
    const [point, setPoint] = useState({x: 0, y: 0})
  return (
    <TouchableWithoutFeedback onPress={(event) => {
        const {locationX, locationY} = event.nativeEvent;
        setPoint({x: locationX, y: locationY})
    }}>
        <View style={styles.container}>
            <Text style={styles.txt}>x: {point.x.toFixed(0)}, y: {point.y.toFixed(0)}</Text>
        </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txt: {
        fontSize: 25,
    }
})