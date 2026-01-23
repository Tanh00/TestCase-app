import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
  },

  header: {
    backgroundColor: '#1f4df2',
    padding: 40,
    paddingTop: 45,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,
  },

  welcome: {
    color: '#fff',
    fontSize: 14,
  },

  username: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },

  avatar: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#ddd',
  },

  statRow: {
    flexDirection: 'row',
    marginTop: -28,
    paddingHorizontal: 16,
  },

  statCard: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 6,
    padding: 16,
    borderRadius: 14,
    elevation: 3,
  },

  statTitle: {
    color: '#777',
    fontSize: 14,
  },

  statValue: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 6,
  },

  card: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: 16,
    padding: 16,
    borderRadius: 14,
    elevation: 2,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },

  emptyText: {
    color: '#999',
    textAlign: 'center',
    paddingVertical: 14,
  },

  fab: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#1f4df2',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
  },

  fabIcon: {
    color: '#fff',
    fontSize: 28,
    lineHeight: 28,
  },
});
