import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import DemoComponent from '../components/DemoComponent';

export function Counter() {
    // let counter = 0;
    console.log("Counter rendered");
    const [counter, setCounter] = useState(0);
    const [isBlack, setIsBlack] = useState(true);
  return (
    <View style={styles.container}>
      <DemoComponent />
      <Text style={styles.counterTxt}>{counter}</Text>
      <TouchableOpacity onPress={() => {
        setIsBlack(isBlack ? false : true);
        console.log("Button color toggled");
      }}>
        <Text>Toogle Button Color</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, !isBlack && styles.buttonAltBlackColor]} onPress={() => {
        setCounter(counter + 1);
        console.log(counter);
      }}>
        <Text style={styles.buttonText}>Click Me</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: "relative",
    },
    button: {
        backgroundColor: "black",
        width: 150,
        height: 80,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        elevation: 8,
        position: "absolute",
        right: 20,
        bottom: 20,
    },
    buttonText: {
        color: "white",
        fontSize: 20,
    },
    counterTxt: {
        fontSize: 80,
    },
    buttonAltBlackColor: {
        backgroundColor: "green",
    }
})