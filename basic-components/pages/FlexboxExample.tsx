import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export function FlexboxExample() {
  return (
    <View style={styles.container}>
        <View style={styles.container_row}>
            <View style={styles.box1}>
                <Text>Yellow</Text>
            </View>
            <View style={styles.box2}>
                <Text>Red</Text>    
            </View>
        </View>
        <View style={styles.container_row}>
            <View style={styles.box3}>
                <Text>Pink</Text>    
            </View>
            <View style={styles.box4}>
                <Text>Blue</Text>      
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "cyan",
    },
    container_row: {
        flex: 1,
        backgroundColor: "grey",
        flexDirection: "row",
    },
    box1: {
        flex: 1,
        width: 100,
        // height: "100%",
        backgroundColor: "yellow",
        alignItems: "center",
        justifyContent: "center",
    },
    box2: {
        flex: 1,
        width: 100,
        // height: "100%",
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
    },
    box3: {
        flex: 1,
        width: 100,
        // height: "100%",
        backgroundColor: "pink",
        alignItems: "center",
        justifyContent: "center",
    },
    box4: {
        flex: 1,
        width: 100,
        // height: "100%",
        backgroundColor: "blue",
        alignItems: "center",
        justifyContent: "center",
    } 
});