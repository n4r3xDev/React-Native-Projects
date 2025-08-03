import { auth } from "@/firebaseConfig";
import { Text, View } from "react-native";

export default function Index() {
  console.log(auth.currentUser)
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
