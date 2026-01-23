import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
 
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 4,
  },

  subTitle: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 24,
  },

  label: {
    fontSize: 13,
    color: '#334155',
    marginBottom: 6,
    marginTop: 12,
    fontWeight: '500',
  },
  
  inputBox: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 14,
    height: 48,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },

  input: {
    fontSize: 15,
    color: '#0f172a',
  },
 
  buttonBox: {
    marginTop: 28,
    backgroundColor: '#2563eb',
    height: 50,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  
  loginText: {
    textAlign: 'center',
    color: '#475569',
    marginTop: 20,
    fontSize: 14,
  },

  loginLink: {
    color: '#2563eb',
    fontWeight: '600',
  },
});
