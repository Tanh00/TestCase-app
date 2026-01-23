import { useRouter } from 'expo-router';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styte/DangNhapStyte';
export default function DangNhap() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          source={require('../assets/hunonic.png')}
          style={styles.logoImage}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.title}>App quản lý TestCase</Text>
      <Text style={styles.subtitle}>Đăng nhập</Text>

      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} placeholder="Nhập email của bạn" />

      <Text style={styles.label}>Mật khẩu</Text>
      <TextInput style={styles.input} placeholder="Nhập mật khẩu của bạn"
        secureTextEntry
      />

      <TouchableOpacity
  style={styles.loginButton}
  onPress={() => router.replace("/(tabs)/Dashboard")}
>
  <Text style={styles.loginText}>Đăng Nhập</Text>
</TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/DangKy")}>
        <Text style={styles.registerText}>
          Chưa có tài khoản? <Text style={{ color: "#2563eb" }}>Đăng ký</Text>
        </Text>
      </TouchableOpacity>
      
    </View>
  );
}
