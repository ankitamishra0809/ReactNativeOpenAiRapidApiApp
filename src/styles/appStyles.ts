import { StyleSheet } from 'react-native';

export const appStyles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#07111f',
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 36,
    gap: 18,
  },
  hero: {
    backgroundColor: '#10233d',
    borderRadius: 28,
    padding: 24,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 18,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    elevation: 8,
  },
  eyebrow: {
    color: '#8fd3ff',
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 1.1,
    textTransform: 'uppercase',
    marginBottom: 12,
  },
  heroTitle: {
    color: '#f4f8ff',
    fontSize: 30,
    lineHeight: 38,
    fontWeight: '800',
    marginBottom: 12,
  },
  heroText: {
    color: '#bfd0e5',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 18,
  },
  button: {
    borderRadius: 999,
    paddingHorizontal: 18,
    paddingVertical: 12,
  },
  primaryButton: {
    backgroundColor: '#f2b977',
  },
  primaryButtonText: {
    color: '#1a2433',
    fontSize: 15,
    fontWeight: '700',
  },
  formCard: {
    backgroundColor: '#f7f2ea',
    borderRadius: 24,
    padding: 20,
  },
  tabRow: {
    flexDirection: 'row',
    backgroundColor: '#e6ddd1',
    borderRadius: 999,
    padding: 4,
    marginBottom: 18,
  },
  tabButton: {
    flex: 1,
    borderRadius: 999,
    paddingVertical: 12,
    alignItems: 'center',
  },
  tabButtonActive: {
    backgroundColor: '#173052',
  },
  tabText: {
    color: '#546172',
    fontSize: 15,
    fontWeight: '700',
  },
  tabTextActive: {
    color: '#f8fbff',
  },
  formTitle: {
    color: '#182535',
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 18,
  },
  fieldGroup: {
    marginBottom: 14,
  },
  label: {
    color: '#324252',
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#fffdf8',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    color: '#182535',
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#e4d7c5',
  },
  message: {
    color: '#9b5f22',
    fontSize: 14,
    fontWeight: '600',
    marginTop: 4,
    marginBottom: 16,
  },
  submitButton: {
    marginTop: 6,
    alignItems: 'center',
  },
  panel: {
    backgroundColor: '#c8ebdd',
    borderRadius: 24,
    padding: 20,
  },
  sectionTitle: {
    color: '#143126',
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 6,
  },
  sectionSubtitle: {
    color: '#2a5347',
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#edf8f2',
    borderRadius: 18,
    padding: 16,
    marginBottom: 12,
  },
  cardTitle: {
    color: '#143126',
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 8,
  },
  cardDetail: {
    color: '#325547',
    fontSize: 14,
    lineHeight: 21,
  },
});
