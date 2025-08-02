import LoadingComponent from "@/components/LoadingComponent";
import UnitSwitch from "@/components/UnitSwitch";
import WTText from "@/components/WTText";
import { degree } from "@/data/Constants";
import { getFormattedDate, getIconUrl } from "@/data/HelperFunctions";
import { useWeather } from "@/providers/WeatherContextProvider";
import { Image, ImageBackground, StyleSheet, View } from "react-native";

export default function CurrentPage() {
  const background = require("../../assets/images/backgroundimage.jpg")
  const {currentWeather, loading, error} = useWeather();
  if (loading) return <LoadingComponent/>
  if (!currentWeather) return <LoadingComponent/>
  return (
    <ImageBackground source={background} style={styles.backgroundImg} imageStyle={styles.imgStyle}>
      <View style={styles.container}>
        <UnitSwitch />
        <WTText>{getFormattedDate(currentWeather?.date)}</WTText>
        <WTText style={styles.address}>{currentWeather.city}, {currentWeather.country}</WTText>
        <WTText style={styles.tempMain}>{currentWeather.temp.toFixed()}{degree}</WTText>
        <WTText style={styles.tempFeelsLike}>Feels Like: {currentWeather.feelsLike.toFixed()}{degree}</WTText>
        <View style={styles.iconDescription}>
          <View style={styles.iconContainer}>
            <Image source={{uri: getIconUrl(currentWeather.icon)}} style={styles.icon}/>
          </View>
          <WTText style={styles.description}>{currentWeather.description}</WTText>
        </View>
      </View>
    </ImageBackground>
  );
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
  },
  address: {
    fontSize: 18,
  },
  tempMain: {
    fontSize: 80,
  },
  tempFeelsLike: {
    fontSize: 22,
  },
  iconDescription: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    margin: 10,
    padding: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(36, 36, 36, 0.3)",
    borderRadius: 10,
  },
  icon: {
    width: 80,
    height: 80,
  },
  description: {
    fontSize: 20,
  }
})
