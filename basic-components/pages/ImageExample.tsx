import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {HeaderComponent} from '../components/HeaderComponent';
import { Row } from '../components/Row';

const dogImgSize = 150;
const coverImgSize = 250;


export function ImageExample() {
    const img = require("../assets/dog.jpg");
    const coverImg = require("../assets/tourbackground3.jpg");
  return (
    <ScrollView>
      <View style={styles.container}>
      <Image style={styles.coverImage} source={coverImg}/>
      <Image style={styles.dogImage} source={img}/>
      <View style={styles.textContent}>
        <HeaderComponent title="Dachshund City" subtitle="Where The Long Shadows Never End" titleStyle={{color: "blue"}} subtitleStyle={{fontSize: 14}}/>
        <Row>
          <FontAwesome name="facebook-square" size={34} color="black" />
          <FontAwesome name="linkedin-square" size={34} color="black" />
          <FontAwesome name="twitter-square" size={34} color="black" />
        </Row>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  dogImage: {
    width: dogImgSize,
    height: dogImgSize,
    borderRadius: 100,
    borderColor: "lightgreen",
    borderWidth: 7,
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 20,
    position: "absolute",
    left: "50%",
    marginLeft: -dogImgSize / 2,
    top: coverImgSize - dogImgSize / 2,
  },
  coverImage: {
    width: "100%",
    height: coverImgSize,
  },
  textContent: {
    marginTop: dogImgSize / 2,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  description: {
    padding: 20,
    marginTop: 20,
    fontSize: 17,
    color: "grey",
  }
});

const description = `Welcome to Dachshund City — a charming corner of the world devoted entirely to the most iconic long-bodied, big-hearted dogs around. Here, the sun always seems to set just right, casting endless shadows that match the spirited stride of every little sausage dog that calls this place home.

Whether you’re a seasoned Doxie lover or newly enchanted by their bold personality and comical proportions, Dachshund City celebrates everything that makes these pups unforgettable. From their fearless hunting roots to their modern-day status as couch royalty, our community is built for those who admire the Dachshund’s loyalty, courage, and undeniable charm.

Explore stories, tips, art, and gear inspired by the breed that’s short in height but long on love. Because in Dachshund City, the horizon stretches low and long — just like our dogs.`;