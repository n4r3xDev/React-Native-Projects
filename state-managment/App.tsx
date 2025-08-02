import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import { Counter } from './examples/Counter';
import GetTouchPoint from './examples/GetTouchPoint';
import BmiCalculator from './examples/BmiCalculator';

export default function App() {
  console.log("App rendered");
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* <Counter /> */}
        {/* <GetTouchPoint /> */}
        <BmiCalculator />
      <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
