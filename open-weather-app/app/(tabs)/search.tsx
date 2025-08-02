import WTText from '@/components/WTText';
import { cities } from '@/data/Constants';
import { useWeather } from '@/providers/WeatherContextProvider';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { FlatList, ImageBackground, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

export default function SearchPage() {
  const background = require("../../assets/images/backgroundimage.jpg")
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<string[]>(cities);
  const {getWeatherByCity} = useWeather();
  function handleSearch(text: string) {
    setQuery(text);
    const filteredResults = cities.filter((item) => item.toLowerCase().startsWith(text.toLowerCase()))
    setResults(filteredResults);
}
  return (
    <ImageBackground source={background} style={styles.backgroundImg} imageStyle={styles.imgStyle}>
        <View style={styles.container}>
            <TextInput style={styles.searchBar} placeholder="Search by city" placeholderTextColor="lightgrey" defaultValue={query} onChangeText={handleSearch} onSubmitEditing={(input) => {
                getWeatherByCity(input.nativeEvent.text);
                setQuery("");
                setResults(cities);
                router.replace("/(tabs)");
            }}/>
        <FlatList data={results} renderItem={({item}) => <View style={styles.cityItem}>
            <TouchableOpacity onPress={() => {
                getWeatherByCity(item);
                router.replace("/(tabs)")
            }}>
                <WTText>{item}</WTText>
            </TouchableOpacity>
        </View>}/>
        </View>
    </ImageBackground>
    
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        marginTop: 90,
    },
    backgroundImg: {
        flex: 1,
        backgroundColor: "black",
    },
    imgStyle: {
        opacity: 0.7,
    },
    searchBar: {
        height: 40,
        borderRadius: 10,
        backgroundColor: "white",
        borderWidth: 1,
        paddingLeft: 8,
        marginBottom: 16,
    },
    cityItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "grey",
    }
})