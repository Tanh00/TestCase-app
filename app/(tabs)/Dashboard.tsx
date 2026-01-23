import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styte/DashboardStyte';

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.welcome}>Chào mừng,</Text>
          <Text style={styles.username}>Trần Tuấn Anh</Text>
        </View>

        <Image
          source={{ uri: 'https://scr.vn/wp-content/uploads/2020/07/AVT-M%C3%88O-NAM-1024x1024.jpg' }}
          style={styles.avatar}
        />
      </View>
     
      <View style={styles.statRow}>
        <View style={styles.statCard}>
          <Text style={styles.statTitle}>Project của tôi</Text>
          <Text style={styles.statValue}>0</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statTitle}>Test Cases</Text>
          <Text style={styles.statValue}>0</Text>
        </View>
      </View>
      
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Tổng quan tiến độ</Text>
        <Text style={styles.emptyText}>Chưa có dự án nào được giao</Text>
      </View>
      
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Lịch sử Test Casee</Text>
        <Text style={styles.emptyText}>Chưa có lịch sử test case</Text>
      </View>
      
      <TouchableOpacity style={styles.fab}>
        <Text style={styles.fabIcon}>＋</Text>
      </TouchableOpacity>
    </View>
  );
}
