import { degree } from '@/data/Constants'
import { getFormattedDate, getIconUrl } from '@/data/HelperFunctions'
import { ForecastItem } from '@/types/WeatherTypes'
import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import WTText from './WTText'

export default function ForecastItemView({item} : {item: ForecastItem}) {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <WTText>{getFormattedDate(item.date, "EEE,HH:mm")}</WTText>
        <Image source={{uri: getIconUrl(item.icon)}} style={styles.icon}/>
      </View>
      <WTText style={styles.tempText}>{item.temp.toFixed()}{degree}</WTText>
      <WTText style={{flex: 1}}>{item.tempMin.toFixed()}{degree}/{item.tempMax.toFixed()}{degree}</WTText>
      <WTText style={styles.description}>{item.description}</WTText>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        width: "100%",
        margin: 4,
        padding: 10,
        backgroundColor: "rgba(36, 36, 36, 0.5)",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "space-between",
    },
    icon: {
        width: 50,
        height: 50,
    },
    description: {
        flex: 2,
        textAlign: "center",
        flexWrap: "wrap",
    },
    tempText: {
        flex: 1,
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 16,
    }
})