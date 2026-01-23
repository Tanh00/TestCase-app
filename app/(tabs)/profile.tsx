import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function ProfileScreen() {

  return (
    <View style={styles.container}>
      {/* 1. StatusBar trong suốt để nền xanh tràn lên đỉnh */}
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

      {/* 2. Header màu xanh chứa Profile (Trống để chờ logic) */}
      <View style={styles.blueHeader}>
        <SafeAreaView>
          <View style={styles.profileHeaderContent}>
            {/* Avatar mặc định */}
            <View style={styles.avatarPlaceholder}>
              <Ionicons name="person" size={40} color="#2563eb" />
            </View>
            
            {/* Tên và Email mặc định */}
            <Text style={styles.userName}>User Name</Text>
            <Text style={styles.userEmail}>user@example.com</Text>
            
            <View style={styles.roleBadge}>
              <Text style={styles.roleText}>user</Text>
            </View>
          </View>
        </SafeAreaView>
      </View>

      {/* 3. Nội dung cuộn bên dưới */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* PERSONAL INFO CARD */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Personal Information</Text>

          <View style={styles.infoRow}>
            <View style={[styles.iconBox, { backgroundColor: "#eff6ff" }]}>
              <Ionicons name="mail-outline" size={20} color="#3b82f6" />
            </View>
            <View>
              <Text style={styles.infoLabel}>Email</Text>
              <Text style={styles.infoValue}>abc@gmail.com</Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <View style={[styles.iconBox, { backgroundColor: "#f5f3ff" }]}>
              <Ionicons name="shield-checkmark-outline" size={20} color="#8b5cf6" />
            </View>
            <View>
              <Text style={styles.infoLabel}>Role</Text>
              <Text style={styles.infoValue}>User</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.editButton}>
            <Ionicons name="create-outline" size={18} color="#475569" />
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        {/* SETTINGS CARD */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Settings</Text>

          <TouchableOpacity style={styles.settingRow}>
            <Ionicons name="notifications-outline" size={20} color="#64748b" />
            <Text style={styles.settingText}>Notifications</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.settingRow, styles.settingBorder]}>
            <Ionicons name="help-circle-outline" size={20} color="#64748b" />
            <Text style={styles.settingText}>Help & Support</Text>
          </TouchableOpacity>
        </View>

        {/* CHANGE PASSWORD CARD */}
        <View style={styles.card}>
          <View style={styles.passwordRow}>
            <Text style={styles.passwordLabel}>Change Password</Text>
            <TouchableOpacity>
              <Text style={styles.changeText}>Change</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* LOGOUT BUTTON */}
        <TouchableOpacity
  style={styles.logoutButton}
  onPress={() => router.replace("/DangNhap")}
>
  <Ionicons name="log-out-outline" size={20} color="#fff" />
  <Text style={styles.logoutText}>Logout</Text>
</TouchableOpacity>


        {/* Đệm dưới cùng để không bị thanh Tabs của hệ thống che mất */}
        <View style={{ height: 40 }} />
      </ScrollView>

      {/* ĐÃ XÓA HOÀN TOÀN BOTTOM TAB TẠI ĐÂY */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  blueHeader: {
    backgroundColor: "#2563eb",
    paddingBottom: 30,
  },
  profileHeaderContent: {
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 10 : 30,
  },
  avatarPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 3,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  userName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  userEmail: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 14,
    marginVertical: 4,
  },
  roleBadge: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 6,
    marginTop: 4,
  },
  roleText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'lowercase',
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1e293b",
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f8fafc",
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
  },
  iconBox: {
    padding: 8,
    borderRadius: 8,
    marginRight: 12,
  },
  infoLabel: {
    fontSize: 12,
    color: "#64748b",
  },
  infoValue: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1e293b",
  },
  editButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f1f5f9",
    paddingVertical: 12,
    borderRadius: 12,
    gap: 8,
  },
  editButtonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#475569",
  },
  settingRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingVertical: 14,
  },
  settingBorder: {
    borderWidth: 1,
    borderColor: "#1e293b",
    borderRadius: 12,
    paddingHorizontal: 12,
    marginTop: 8,
  },
  settingText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#1e293b",
  },
  passwordRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  passwordLabel: {
    fontSize: 15,
    fontWeight: "500",
    color: "#475569",
  },
  changeText: {
    fontSize: 14,
    color: "#2563eb",
    fontWeight: "700",
  },
  logoutButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e11d48",
    paddingVertical: 16,
    borderRadius: 12,
    gap: 8,
  },
  logoutText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});