import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { movies } from './utils/MovieDB';
import { MovieItem } from './components/MovieItem';

export default function App() {
  const items = Array.from({length: 100}, (value, index) => `Item ${index + 1}`);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList data={movies} renderItem={({item}) => <MovieItem movie={item}/>}
         keyExtractor={(value) => value.id.toString()}/>
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
