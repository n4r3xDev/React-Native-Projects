import WeatherContextProvider from '@/providers/WeatherContextProvider'
import { Stack } from 'expo-router'
import React from 'react'
import { StyleSheet } from 'react-native'

export default function RootLayout() {
  return (
    <WeatherContextProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
      </Stack>
    </WeatherContextProvider>
  )
}

const styles = StyleSheet.create({})