import { useWeather } from '@/providers/WeatherContextProvider';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Foundation from '@expo/vector-icons/Foundation';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from 'react-native';

export default function TabLayout() {
  const {refreshWeather} = useWeather();
  return (
    <>
      <StatusBar style="light"/>
      <Tabs 
        screenOptions={{
        headerTransparent: true,
        headerTintColor: "white",
        tabBarStyle: {
          backgroundColor: "black",
        },
        headerRight: () => (
          <TouchableOpacity onPress={refreshWeather} style={{margin: 10}}>
            <MaterialIcons name="my-location" size={24} color="white" />
          </TouchableOpacity>
        )
      }}>
        <Tabs.Screen name="index" options={{title: "Current", tabBarIcon: ()=> (
          <MaterialCommunityIcons name="weather-partly-snowy-rainy" size={24} color="white" />
          ), tabBarActiveTintColor: "lightgrey"}} />
        <Tabs.Screen name="forecast" options={{title: "Forecast", tabBarIcon: ()=> (
          <Foundation name="list" size={24} color="white" />
          ), tabBarActiveTintColor: "lightgrey"}} />
        <Tabs.Screen name="search" options={{title: "Search", tabBarIcon: () => (
          <FontAwesome5 name="search" size={24} color="white" />
          ), tabBarActiveTintColor: "lightgrey"}} />
      </Tabs>
    </>
  )
}
