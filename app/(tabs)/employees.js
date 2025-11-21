// app/(tabs)/employees.js
import { useMemo, useState } from "react";
import {
  Text,
  View,
  TextInput,
  FlatList,
  Pressable,
} from "react-native";
import Screen from "../../src/components/Screen";
import { employees, EMPLOYEE_STATUS } from "../../src/data/employees";

export default function EmployeesScreen() {
  const [query, setQuery] = useState("");
  const [showActiveOnly, setShowActiveOnly] = useState(true);

  const filteredEmployees = useMemo(() => {
    return employees.filter((emp) => {
      if (showActiveOnly && emp.status !== EMPLOYEE_STATUS.ACTIVE) {
        return false;
      }
      if (!query) return true;
      const q = query.toLowerCase();
      return (
        emp.name.toLowerCase().includes(q) ||
        emp.phone.includes(q) ||
        emp.address.toLowerCase().includes(q)
      );
    });
  }, [query, showActiveOnly]);

  return (
    <Screen>
      {/* Header */}
      <View className="flex-row items-center justify-between mb-3">
        <View>
          <Text className="text-2xl font-bold text-slate-900">
            Employees
          </Text>
          <Text className="text-xs text-slate-500">
            Manage painter staff and salary rates.
          </Text>
        </View>
        <Pressable className="rounded-full bg-emerald-500 px-3 py-1.5 active:bg-emerald-600">
          <Text className="text-[11px] font-semibold text-white">
            + Add
          </Text>
        </Pressable>
      </View>

      {/* Search + filter */}
      <View className="mt-2 flex-row gap-3 items-center">
        <View className="flex-1 rounded-2xl bg-white border border-slate-200 px-3 py-2 shadow-sm">
          <TextInput
            placeholder="Search by name, phone, address"
            placeholderTextColor="#9ca3af"
            value={query}
            onChangeText={setQuery}
            className="text-sm text-slate-900"
          />
        </View>

        <Pressable
          className={`px-3 py-2 rounded-2xl border text-xs font-semibold ${
            showActiveOnly
              ? "bg-emerald-50 border-emerald-200 text-emerald-700"
              : "bg-slate-100 border-slate-200 text-slate-700"
          }`}
          onPress={() => setShowActiveOnly((v) => !v)}
        >
          <Text>{showActiveOnly ? "Active" : "All"}</Text>
        </Pressable>
      </View>

      {/* List */}
      <FlatList
        className="mt-4"
        data={filteredEmployees}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <EmployeeCard employee={item} />}
        ItemSeparatorComponent={() => <View className="h-3" />}
        ListEmptyComponent={
          <Text className="mt-8 text-center text-slate-400 text-sm">
            No employees found.
          </Text>
        }
        contentContainerStyle={{ paddingBottom: 16 }}
      />
    </Screen>
  );
}

function EmployeeCard({ employee }) {
  const isActive = employee.status === EMPLOYEE_STATUS.ACTIVE;

  return (
    <View className="rounded-2xl bg-white border border-slate-200 px-4 py-3 shadow-sm">
      <View className="flex-row justify-between items-center">
        <View className="flex-1">
          <Text className="text-base font-semibold text-slate-900">
            {employee.name}
          </Text>
          <Text className="mt-0.5 text-xs text-slate-500">
            {employee.phone} · {employee.address}
          </Text>
        </View>

        <View className="items-end ml-2">
          <View
            className={`px-2 py-0.5 rounded-full ${
              isActive ? "bg-emerald-50" : "bg-amber-50"
            }`}
          >
            <Text
              className={`text-[10px] font-semibold ${
                isActive ? "text-emerald-700" : "text-amber-700"
              }`}
            >
              {isActive ? "ACTIVE" : "INACTIVE"}
            </Text>
          </View>
        </View>
      </View>

      <View className="mt-2 flex-row justify-between items-center">
        <View className="flex-row gap-4">
          <Text className="text-xs text-slate-600">
            Daily:{" "}
            <Text className="font-semibold text-slate-900">
              ₹{employee.dailyRate}
            </Text>
          </Text>
          <Text className="text-xs text-slate-600">
            Hourly:{" "}
            <Text className="font-semibold text-slate-900">
              ₹{employee.hourlyRate}
            </Text>
          </Text>
        </View>

        <Pressable className="px-3 py-1 rounded-full bg-slate-100 active:bg-slate-200">
          <Text className="text-[11px] font-medium text-slate-700">
            View details
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
