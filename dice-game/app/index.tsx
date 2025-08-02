import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter();
  const [initialPoint, setInitialPoint] = useState("100");
  const [error, setError] = useState("");

  function validateInput() : boolean {
    const input = Number.parseInt(initialPoint);
    if (isNaN(input) || input < 100 || input > 999) {
      setError("Please enter a valid point between 100 and 999");
      return false;
    }
    setError("");
    return true;
  }

  return (
    <View style={styles.container}>
      <Text style = {styles.txt}>Enter initial pint</Text>
      <TextInput 
      style={styles.input} 
      defaultValue={initialPoint}
      placeholder="min 100 max 999"
      keyboardType="numeric"
      maxLength={3}
      onChangeText={setInitialPoint}
      returnKeyType="done"
      />
      {error ? <Text style={styles.errTxt}>{error}</Text> : null}
      <TouchableOpacity onPress={() => {
        if (validateInput()) {
          router.replace({
            pathname: "/dicegame",
            params: { initialPoint: initialPoint}
          });
        }
      }}>
        <Text>START</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    fontSize: 24,
    color: "grey",
  },
  input: {
    margin: 20,
    borderWidth: 1,
    padding: 20,
    width: 200,
  },
  errTxt: {
    fontSize: 20,
    color: "red",
    margin: 5,
  }
})
