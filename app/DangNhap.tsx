import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styte/DangNhapStyte';

export default function DangNhap() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validate = () => {
    const trimEmail = email.trim();

    if (!trimEmail) {
      setError('Email không được để trống');
      return;
    }

    if (!password) {
      setError('Mật khẩu không được để trống');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimEmail)) {
      setError('Email không hợp lệ');
      return;
    }

    if (password.length < 6) {
      setError('Mật khẩu phải từ 6 ký tự trở lên');
      return;
    }

    // Pass hết validate
    setError('');
    router.replace('/(tabs)/Dashboard');
  };

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
      <TextInput
        style={styles.input}
        placeholder="Nhập email của bạn"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />

      <Text style={styles.label}>Mật khẩu</Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập mật khẩu của bạn"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {error ? (
        <Text style={{ color: 'red', marginBottom: 10 }}>{error}</Text>
      ) : null}

      <TouchableOpacity style={styles.loginButton} onPress={validate}>
        <Text style={styles.loginText}>Đăng Nhập</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/DangKy')}>
        <Text style={styles.registerText}>
          Chưa có tài khoản? <Text style={{ color: '#2563eb' }}>Đăng ký</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}
