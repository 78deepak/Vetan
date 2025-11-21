// components/Screen.js
import { SafeAreaView } from "react-native";
import { View } from "react-native";

export default function Screen({ children, className = "" }) {
  return (
    <SafeAreaView className="flex-1 bg-slate-900">
      <View className={`flex-1 px-6 ${className}`}>{children}</View>
    </SafeAreaView>
  );
}
