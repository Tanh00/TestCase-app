import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styte/DangKyStyte';

export default function DangKy() {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <Text style={styles.title}><Ionicons name="arrow-back-outline" size={24} color="#0f172a" /> Đăng Ký</Text>
            <Text style={styles.subTitle}>Tạo tài khoản mới</Text>
            
            <Text style={styles.label}>Họ và Tên</Text>
            <View style={styles.inputBox}>
                <TextInput style={styles.input} placeholder="Nhập họ và tên" />
            </View>
            
            <Text style={styles.label}>Email</Text>
            <View style={styles.inputBox}>
                <TextInput style={styles.input} placeholder="Nhập email" />
            </View>

            <Text style={styles.label}>Mật Khẩu</Text>
            <View style={styles.inputBox}>
                <TextInput style={styles.input} placeholder="Nhập mật khẩu"
                 secureTextEntry />  
            </View>

            <Text style={styles.label}>Xác Nhận Mật Khẩu</Text>
            <View style={styles.inputBox}> 
                <TextInput style={styles.input} placeholder="Xác nhận mật khẩu"
                 secureTextEntry />
            </View>

            <TouchableOpacity style={styles.buttonBox}>
                    <Text style={styles.buttonText}>Đăng Ký</Text>
                  </TouchableOpacity>
            <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.loginText}>
          Đã có tài khoản?{" "}
          <Text style={{ color: "#2563eb" }}>Đăng nhập</Text>
        </Text>
      </TouchableOpacity>

        </View>
    );
}