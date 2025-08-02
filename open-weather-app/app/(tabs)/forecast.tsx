import ForecastItemView from '@/components/ForecastItem';
import LoadingComponent from '@/components/LoadingComponent';
import { useWeather } from '@/providers/WeatherContextProvider';
import React from 'react';
import { FlatList, ImageBackground, StyleSheet, View } from 'react-native';

export default function ForecastPage() {
    const background = require("../../assets/images/backgroundimage.jpg")
    const {forecastWeather, loading, error} = useWeather();
      if (loading) return <LoadingComponent/>
      if (!forecastWeather) return <LoadingComponent/>
    return (
    <ImageBackground source={background} style={styles.backgroundImg} imageStyle={styles.imgStyle}>
        <View style={styles.container}>
            <FlatList data={forecastWeather} renderItem={({item}) => <ForecastItemView item={item}/>} />
        </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 90,
    },
    backgroundImg: {
        flex: 1,
        backgroundColor: "black",
    },
    imgStyle: {
        opacity: 0.7,
    }
})