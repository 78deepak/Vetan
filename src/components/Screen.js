// src/components/Screen.js
import { SafeAreaView, View } from "react-native";

export default function Screen({ children, className = "" }) {
  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <View
        className={`flex-1 bg-slate-50 px-4 pt-4 pb-2 ${className}`}
      >
        {children}
      </View>
    </SafeAreaView>
  );
}
