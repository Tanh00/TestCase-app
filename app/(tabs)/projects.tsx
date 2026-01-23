import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const FILTERS = ["All", "Critical", "High", "Medium", "Low"];

export default function ProjectsScreen() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Projects</Text>

      <TextInput
        placeholder="Search projects..."
        value={search}
        onChangeText={setSearch}
        style={styles.search}
      />

      <View style={styles.filterContainer}>
        {FILTERS.map((item) => (
          <TouchableOpacity
            key={item}
            style={[
              styles.filterBtn,
              activeFilter === item && styles.filterActive,
            ]}
            onPress={() => setActiveFilter(item)}
          >
            <Text
              style={[
                styles.filterText,
                activeFilter === item && styles.filterTextActive,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No projects found</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 12,
  },
  search: {
    height: 44,
    backgroundColor: "#F2F2F2",
    borderRadius: 10,
    paddingHorizontal: 14,
    marginBottom: 14,
  },
  filterContainer: {
    flexDirection: "row",
    marginBottom: 24,
  },
  filterBtn: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: "#F2F2F2",
    marginRight: 8,
  },
  filterActive: {
    backgroundColor: "#2563EB",
  },
  filterText: {
    fontSize: 14,
    color: "#555",
  },
  filterTextActive: {
    color: "#fff",
    fontWeight: "600",
  },
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyText: {
    fontSize: 16,
    color: "#999",
  },
});
