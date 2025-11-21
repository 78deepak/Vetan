import { Text } from "react-native";
import Screen from "../../src/components/Screen";

export default function SmsScreen() {
  return (
    <Screen>
      <Text className="text-2xl font-bold text-white">SMS</Text>
      <Text className="mt-2 text-slate-400">
        Dummy screen – later we connect react-native-sms + templates.
      </Text>
    </Screen>
  );
}
