import { View, Text, Pressable } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 bg-slate-900 px-6 pt-16">
      {/* App title */}
      <Text className="text-3xl font-extrabold text-white tracking-tight">
        Vetan
      </Text>

      {/* Subtitle */}
      <Text className="mt-2 text-slate-300 text-base">
        Smart employee attendance & payroll, on your phone.
      </Text>

      {/* CTA Card */}
      <View className="mt-10 rounded-3xl bg-slate-800/70 p-5 border border-slate-700">
        <Text className="text-lg font-semibold text-white">
          Get started today
        </Text>
        <Text className="mt-1 text-slate-300 text-sm">
          Setup your first branch, add employees, and track attendance in real time.
        </Text>

        <Pressable className="mt-5 rounded-2xl bg-emerald-500 active:bg-emerald-600 px-4 py-3 items-center justify-center">
          <Text className="text-white font-semibold text-base">
            Continue
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
