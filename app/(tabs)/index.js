// app/(tabs)/index.js
import { Text, View, ScrollView, Pressable } from "react-native";
import Screen from "../../src/components/Screen";
import { employees } from "../../src/data/employees";
import { attendanceRecords } from "../../src/data/attendance";
import { salarySummaries } from "../../src/data/salary";

export default function DashboardScreen() {
  const today = "2025-11-01"; // dummy
  const todaysAttendance = attendanceRecords.filter(
    (r) => r.date === today
  );

  const presentCount = todaysAttendance.filter(
    (r) => r.status === "present"
  ).length;
  const absentCount = todaysAttendance.filter(
    (r) => r.status === "absent"
  ).length;
  const halfCount = todaysAttendance.filter(
    (r) => r.status === "half"
  ).length;

  const pendingSalaries = salarySummaries.filter((s) => s.paidAmount === 0);
  const thisMonthExpense = salarySummaries.reduce(
    (sum, s) => sum + s.paidAmount,
    0
  );

  return (
    <Screen className="pt-2">
      <ScrollView
        className="flex-1"
        contentContainerClassName="pb-16"
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View className="mb-4">
          <Text className="text-xs font-semibold text-emerald-600 tracking-wide">
            PAINTER PRO
          </Text>
          <Text className="mt-1 text-2xl font-bold text-slate-900">
            Employee Manager
          </Text>
          <Text className="mt-1 text-sm text-slate-500">
            Today’s overview for your painting team.
          </Text>
        </View>

        {/* Top summary strip */}
        <View className="mt-2 rounded-2xl bg-emerald-50 border border-emerald-100 px-4 py-3">
          <Text className="text-xs font-medium text-emerald-700">
            {employees.length} employees · {presentCount} present · {pendingSalaries.length} pending salaries
          </Text>
        </View>

        {/* Stats grid */}
        <View className="mt-5 flex-row flex-wrap gap-3">
          <StatCard label="Total employees" value={employees.length} />
          <StatCard label="Present today" value={presentCount} />
          <StatCard label="Absent today" value={absentCount} />
          <StatCard label="Half-day" value={halfCount} />
          <StatCard label="Pending salaries" value={pendingSalaries.length} />
        </View>

        {/* Monthly expense */}
        <View className="mt-6 rounded-2xl bg-white border border-slate-200 px-4 py-4 shadow-sm">
          <Text className="text-xs font-medium text-slate-500 uppercase tracking-wide">
            This month paid salary
          </Text>
          <Text className="mt-2 text-3xl font-semibold text-emerald-600">
            ₹ {thisMonthExpense.toLocaleString("en-IN")}
          </Text>
          <Text className="mt-1 text-xs text-slate-500">
            Dummy data – later this will come from Firestore.
          </Text>
        </View>

        {/* Quick actions */}
        <View className="mt-6">
          <Text className="text-sm font-semibold text-slate-800 mb-3">
            Quick actions
          </Text>
          <View className="flex-row flex-wrap gap-3">
            <QuickAction label="Mark attendance" />
            <QuickAction label="Add employee" />
            <QuickAction label="Record salary" />
            <QuickAction label="Send SMS" />
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}

function StatCard({ label, value }) {
  return (
    <View className="min-w-[46%] flex-1 rounded-2xl bg-white border border-slate-200 px-4 py-3 shadow-sm">
      <Text className="text-[11px] text-slate-500">{label}</Text>
      <Text className="mt-1 text-xl font-semibold text-slate-900">
        {value}
      </Text>
    </View>
  );
}

function QuickAction({ label }) {
  return (
    <Pressable className="rounded-2xl bg-slate-100 px-4 py-3 border border-slate-200 active:bg-slate-200">
      <Text className="text-xs font-medium text-slate-800">{label}</Text>
    </Pressable>
  );
}
