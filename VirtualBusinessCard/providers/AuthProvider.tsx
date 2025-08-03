import { auth } from "@/firebaseConfig";
import { router } from "expo-router";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, User } from "firebase/auth";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type AuthContextType = {
    user: User | null;
    loading: boolean;
    error: string | null;
    login: (email: string, password: string) => Promise<void>;
    register: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    loading: true,
    error: null,
    login: async (email, password) => {},
    register: async (email, password) => {},
    logout: async () => {},
});

import React from 'react';

export function AuthContextProvider({children} :  {children: ReactNode}) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        onAuthStateChanged(auth, (u) => {
            setUser(u);
            setLoading(false);
        })
    }, []);

    async function login(email: string, password: string) {
        try {
            setLoading(true);
            const credential = await signInWithEmailAndPassword(auth, email, password);
            setUser(credential.user);
            router.replace("/");
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }
    async function register(email: string, password: string) {
        try {
            setLoading(true);
            const credential = await createUserWithEmailAndPassword(auth, email, password);
            setUser(credential.user);
            router.replace("/");
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    async function logout() {
        await signOut(auth);
    }

  return (
    <AuthContext.Provider value={{ user, loading, error, login, register, logout }}>
        {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);