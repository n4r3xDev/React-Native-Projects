import React from 'react'
import { ActivityIndicator, ImageBackground, StyleSheet, View } from 'react-native'
import WTText from './WTText'

export default function LoadingComponent() {
    const background = require("../assets/images/backgroundimage.jpg")
  return (
    <ImageBackground source={background} style={styles.backgroundImg} imageStyle={styles.imgStyle}>
        <View style={styles.container}>
            <ActivityIndicator size={"large"}/>
            <WTText style={{fontSize: 22}}>Loading...</WTText>
        </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    backgroundImg: {
        flex: 1,
        backgroundColor: "black",
    },
    imgStyle: {
        opacity: 0.7,
    }
})