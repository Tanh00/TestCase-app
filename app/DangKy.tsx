import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styte/DangKyStyte';

export default function DangKy() {
  const router = useRouter();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const validate = () => {
    const trimName = fullName.trim();
    const trimEmail = email.trim();

    if (!trimName) {
      setError('Họ và tên không được để trống');
      return;
    }

    if (!trimEmail) {
      setError('Email không được để trống');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimEmail)) {
      setError('Email không hợp lệ');
      return;
    }

    if (!password) {
      setError('Mật khẩu không được để trống');
      return;
    }

    if (password.length < 6) {
      setError('Mật khẩu phải từ 6 ký tự trở lên');
      return;
    }

    if (!confirmPassword) {
      setError('Vui lòng xác nhận mật khẩu');
      return;
    }

    if (password !== confirmPassword) {
      setError('Mật khẩu xác nhận không khớp');
      return;
    }

    // Pass hết validate
    setError('');
    router.replace('/DangNhap'); // quay về đăng nhập
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        <Ionicons name="arrow-back-outline" size={24} color="#0f172a" /> Đăng Ký
      </Text>

      <Text style={styles.subTitle}>Tạo tài khoản mới</Text>

      <Text style={styles.label}>Họ và Tên</Text>
      <View style={styles.inputBox}>
        <TextInput
          style={styles.input}
          placeholder="Nhập họ và tên"
          value={fullName}
          onChangeText={setFullName}
        />
      </View>

      <Text style={styles.label}>Email</Text>
      <View style={styles.inputBox}>
        <TextInput
          style={styles.input}
          placeholder="Nhập email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
      </View>

      <Text style={styles.label}>Mật Khẩu</Text>
      <View style={styles.inputBox}>
        <TextInput
          style={styles.input}
          placeholder="Nhập mật khẩu"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <Text style={styles.label}>Xác Nhận Mật Khẩu</Text>
      <View style={styles.inputBox}>
        <TextInput
          style={styles.input}
          placeholder="Xác nhận mật khẩu"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
      </View>

      {error ? (
        <Text style={{ color: 'red', marginBottom: 10 }}>{error}</Text>
      ) : null}

      <TouchableOpacity style={styles.buttonBox} onPress={validate}>
        <Text style={styles.buttonText}>Đăng Ký</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.loginText}>
          Đã có tài khoản? <Text style={{ color: '#2563eb' }}>Đăng nhập</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}
