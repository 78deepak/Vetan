import { Text } from "react-native";
import Screen from "../../src/components/Screen";

export default function SalaryScreen() {
  return (
    <Screen>
      <Text className="text-2xl font-bold text-white">Salary</Text>
      <Text className="mt-2 text-slate-400">
        Dummy screen – will show monthly salary breakdown later.
      </Text>
    </Screen>
  );
}
