import LoadingPage from '@/components/LoadingPage';
import { useAuth } from '@/providers/AuthProvider';
import { Redirect, Stack } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';

export default function ProtectedLayout() {
    const { user, loading } = useAuth();
    if (loading) {
        return <LoadingPage />;
    }
    if (!user) {
        return <Redirect href="/signin" />;
    }
  return (
    <Stack>
        <Stack.Screen name ="index" options={{title: "Home"}} />
        <Stack.Screen name ="newcard" options={{title: "Home"}} />
    </Stack>
  )
}

const styles = StyleSheet.create({})