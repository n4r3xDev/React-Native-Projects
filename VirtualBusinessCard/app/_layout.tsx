import { AuthContextProvider } from "@/providers/AuthProvider";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <AuthContextProvider>
      <Stack>
      <Stack.Screen name="(protected)" options={{ headerShown: false }} />
      <Stack.Screen name="signin" options={{ title: "Sign In" }} />
    </Stack>
    </AuthContextProvider>
  );
}
