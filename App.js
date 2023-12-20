import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-web";
import HomeScreen from "./screens/HomeScreen";
import NewPostScreen from "./screens/NewPostScreen";
import SignedInstack from "./navigation";

export default function App() {
  return (
      <SignedInstack/>
    );
}
