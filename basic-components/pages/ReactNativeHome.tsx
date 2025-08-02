import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export function ReactNativeHome() {
  return (
    <View>
        <Text>Basic Components</Text>
        <Image 
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png"
          }} 
          style={styles.image}
        />
        <Text style={styles.headerText}>Hello World!</Text>
        <Text style={styles.titleText}>Hello React Native!</Text>
        <Text style={styles.bodyText}>{description}</Text>
      </View>
  )
}

const styles = StyleSheet.create({
  container: { backgroundColor: "blue", flex: 1, padding: 16},
  image: {width: "100%", height: 250},
  headerText: {
    //backgroundColor: "blue",
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    paddingTop: 20,
  },
  titleText: {
    color: "white",
    fontSize: 20,
  },
  bodyText: {
    color: "white",
    fontSize: 16,
    paddingTop: 20,
  },
});

const description = "React Native allows developers who know React to create native apps. At the same time, native developers can use React Native to gain parity between native platforms by writing common features once.";