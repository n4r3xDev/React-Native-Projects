import { Alert, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { getBmiStatus, truncateToOneDecimal } from '../utils/BmiUtils';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

export default function BmiCalculator() {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [bmi, setBmi] = useState(0.0);
    const [status, setStatus] = useState<string | undefined>();
    const btnDisabled = weight.length === 0 || height.length === 0;
    const heightInputRef = useRef<TextInput>(null);
    function calculateBMI() {
        const w = Number.parseFloat(weight);
        const h = Number.parseFloat(height);
        const heightInMeters = h / 100;
        if (w === 0 || heightInMeters === 0) {
            Alert.alert("Weight or Height cannot be 0");
            return;
        }
        const result = w / (heightInMeters * heightInMeters);
        setBmi(truncateToOneDecimal(result));
        setStatus(getBmiStatus(result));
    }
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>BMI Calculator</Text>
      <TextInput
        style={styles.inputStyle} 
        placeholder="Enter Weight (in kg)" 
        keyboardType="number-pad" 
        maxLength={5} 
        onChangeText={setWeight}
        returnKeyType="next"
        onSubmitEditing={() => {
            heightInputRef.current?.focus();
        }}
        />
      <TextInput
        ref={heightInputRef}
        style={styles.inputStyle} 
        placeholder="Enter Height (in cm)" 
        keyboardType="number-pad" 
        maxLength={5} 
        onChangeText={setHeight}
        returnKeyType="done"/>
      <TouchableOpacity 
      style={[styles.btn, btnDisabled && styles.btnDisabled]} 
      onPress={calculateBMI} 
      disabled={btnDisabled}>
        <Text style={styles.btnText}>Calculate</Text>
      </TouchableOpacity>
      <Text style={styles.titleText}>Your BMI:</Text>
      <Text style={styles.bmiValue}>{bmi}</Text>
      <Text style={styles.titleText}>You are:</Text>
      <Text style={styles.statusText}>{status ? status : "Unknown"}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "lightgray",
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginVertical: 20,
    },
    inputStyle: {
        backgroundColor: 'white',
        marginVertical: 10,
        marginHorizontal: 40,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 20,
        padding: 20,
    },
    btn: {
        width: 150,
        height: 60,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginTop: 20,
        borderRadius: 20,
    },
    btnDisabled: {
        backgroundColor: "gray",
    },
    btnText: {
        fontSize: 16,
        color: "white",
    },
    bmiValue: {
        fontSize: 80,
        alignSelf: 'center',
    },
    titleText: {
        fontSize: 18,
        color: "grey",
        alignSelf: 'center',
        marginTop: 30,
    },
    statusText: {
        fontSize: 30,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
    },
})