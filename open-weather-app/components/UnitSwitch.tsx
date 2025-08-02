import { degree } from '@/data/Constants';
import { useWeather } from '@/providers/WeatherContextProvider';
import React from 'react';
import { StyleSheet, Switch, View } from 'react-native';
import WTText from './WTText';

export default function UnitSwitch() {
    const {tempUnit, changeUnit} = useWeather();
    const status = tempUnit === "metric" ? false : true;
  return (
    <View style={styles.container}>
      <WTText style={styles.unitText}>{degree}C</WTText>
      <Switch value={status} onChange={changeUnit} trackColor={{false: "grey", true: "white"}} thumbColor={status ? "green" : "lightgrey"}/>
      <WTText style={styles.unitText}>F</WTText>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        position: "absolute",
        flexDirection: "row",
        alignItems: "center",
        right: 10,
    },
    unitText: {
        fontSize: 16,
        paddingHorizontal: 5,
    }
})