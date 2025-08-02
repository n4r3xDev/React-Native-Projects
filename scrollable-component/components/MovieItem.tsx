import { StyleSheet, View, Text, Image, Pressable, Alert } from 'react-native'
import React from 'react'
import { Movie } from '../utils/MovieDB'

export function MovieItem({ movie }: {movie: Movie}) {
  return (
    <Pressable
      style={({pressed}) =>  [styles.container, pressed && styles.pressed]}
      onPress={() => {
        Alert.alert(movie.title, movie.subtitle, [
        {
            text: "Cancel",
            onPress: () => {}
        },
        {
            text: "View Details",
            onPress: () => {}
        }
    ],
    {cancelable: true}
    )}}>
        <View>
            <Image source={movie.image} style={styles.image}/>
            <View style={styles.info}>
                <Text style={styles.infoTextTitle}>{movie.title}</Text>
                <Text style={styles.infoText}>{movie.subtitle}</Text>
                <Text style={styles.infoText}>{movie.genre}</Text>
                <Text style={styles.infoText}>{`Rating: ${movie.rating}`}</Text>
            </View>
        </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
     container: {
        backgroundColor: "lightgreen",
        marginVertical: 8,
        marginHorizontal: 10,
        borderRadius: 16,
        overflow: "hidden",
        elevation: 5,
        position: "relative",
     },
     image: {
        width: "100%",
        height: 500,
     },
     info: {
        position: "absolute",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        padding: 10,
        width: "100%",
     },
     infoTextTitle: {
        color: "white",
        fontSize: 20,
        alignSelf: "center",
     },
     infoText: {
        color: "lightgray",
        fontSize: 16,
        alignSelf: "center",
     },
     pressed: {
        opacity: 0.5,
     }
})