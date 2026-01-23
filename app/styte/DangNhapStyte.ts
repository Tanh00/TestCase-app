import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#4ce26dff',
    padding: 24,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
    justifyContent: 'center',
  },

  logoBox: {
    alignSelf: 'center',
    width: 72,
    height: 72,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  logoImage: {
    width: 90,
    height: 90,
  },

  title: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: 24,
  },

  label: {
    fontSize: 12,
    marginBottom: 6,
    marginTop: 12,
  },

  input: {
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 10,
    padding: 12,
  },

  loginButton: {
    backgroundColor: '#2563eb',
    paddingVertical: 14,
    borderRadius: 10,
    marginTop: 20,
  },

  loginText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },

  registerText: {
    textAlign: 'center',
    marginTop: 16,
    color: '#6b7280',
  },

  registerLink: {
    color: '#2563eb',
    fontWeight: '600',
  },
});
