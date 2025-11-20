// app/index.js
import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Painter Pro - Employee Manager</Text>
      <Text style={styles.subtitle}>Expo Router basic setup working ✅</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0f172a",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#e5e7eb",
  },
  subtitle: {
    marginTop: 8,
    fontSize: 14,
    color: "#9ca3af",
  },
});
