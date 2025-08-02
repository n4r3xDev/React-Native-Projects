import { StatusBar } from "expo-status-bar";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { ReactNativeHome } from "./pages/ReactNativeHome";
import { FlexboxExample } from "./pages/FlexboxExample";
import { ImageExample } from "./pages/ImageExample";

export default function App() {
  return (
  <SafeAreaView style={styles.container}>
    {/* <ReactNativeHome/> */}
    {/* <FlexboxExample /> */}
    <ImageExample />
    <StatusBar style="auto" />
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    // backgroundColor: "blue",
    flex: 1,
    padding: 16},
})