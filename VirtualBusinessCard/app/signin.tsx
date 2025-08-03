import { useAuth } from '@/providers/AuthProvider';
import React, { useState } from 'react';
import { ActivityIndicator, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function SigninPage() {
    const { login, register, loading, error } = useAuth();
    const [mode, setMode] = useState<"login" | "register">('login');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    async function handleAuth() {
        if (mode === "login") {
            await login(email, password);
        } else {
            await register(email, password);
        }
    }

  return (
    <View style={styles.container}>
        <Text style={styles.title}>{mode === "login" ? "Login" : "Register"}</Text>
        <TextInput style={styles.input} placeholderTextColor="lightgrey" placeholder="Email Address" keyboardType='email-address' value={email} onChangeText={setEmail}/>
        <TextInput style={styles.input} placeholderTextColor="lightgrey" placeholder="Password (at least 6 chars)" secureTextEntry value={password} onChangeText={setPassword}/>
        {error ? <Text style={styles.error}>{error}</Text> : null}
        {loading ? <ActivityIndicator /> : null}
        <Button title={mode === "login" ? "Login" : "Register"} onPress={handleAuth} />
        <Text
        style={styles.toggle} 
        onPress={() => {
            setMode((prev) => (prev === "login" ? "register" : "login"))
        }}>{mode === "login" ? "Don't have an account? Register" : "Already have an account? Login"}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 24,
        backgroundColor: '#fff',
    },
    title : {
        fontSize: 28,
        marginBottom: 24,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    input: {
        height: 48,
        borderColor: "#ccc",
        borderWidth: 1,
        marginBottom: 8,
        paddingHorizontal: 12,
        borderRadius: 4,
    },
    toggle: {
        color: "blue",
        marginTop: 15,
        textAlign: 'center',
    },
    error: {
        color: 'red',
        marginBottom: 10,
        textAlign: 'center',
    }
})