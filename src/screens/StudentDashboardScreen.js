import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../utils/AuthContext';

export default function StudentDashboardScreen({ navigation }) {
  const { logout } = useAuth();

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', (e) => {
      // If already on Dashboard and the Dashboard tab is pressed again, logout
      if (navigation.isFocused()) {
        e.preventDefault();
        logout();
      }
    });
    return unsubscribe;
  }, [navigation, logout]);

  return (
    <LinearGradient
      colors={['#667eea', '#764ba2']}
      style={styles.container}
    >
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.title}>Student Dashboard</Text>
          <Text style={styles.subtitle}>Welcome back, Student!</Text>
          <TouchableOpacity style={styles.logoutButton} onPress={logout}>
            <Ionicons name="log-out-outline" size={18} color="#fff" />
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Ionicons name="library" size={30} color="#007AFF" />
            <Text style={styles.statNumber}>5</Text>
            <Text style={styles.statLabel}>Active Courses</Text>
          </View>
          
          <View style={styles.statCard}>
            <Ionicons name="document-text" size={30} color="#34C759" />
            <Text style={styles.statNumber}>3</Text>
            <Text style={styles.statLabel}>Pending Tests</Text>
          </View>
          
          <View style={styles.statCard}>
            <Ionicons name="trophy" size={30} color="#FF9500" />
            <Text style={styles.statNumber}>85%</Text>
            <Text style={styles.statLabel}>Average Score</Text>
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          <View style={styles.activityItem}>
            <Ionicons name="checkmark-circle" size={20} color="#34C759" />
            <Text style={styles.activityText}>Completed Math Test - 90%</Text>
          </View>
          <View style={styles.activityItem}>
            <Ionicons name="time" size={20} color="#FF9500" />
            <Text style={styles.activityText}>Science Test due in 2 days</Text>
          </View>
          <View style={styles.activityItem}>
            <Ionicons name="star" size={20} color="#FF6B35" />
            <Text style={styles.activityText}>New course available: Physics</Text>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    padding: 20,
    paddingTop: 60,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    opacity: 0.9,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    marginTop: 16,
  },
  logoutText: {
    color: '#fff',
    marginLeft: 8,
    fontWeight: '600',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  statCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginTop: 5,
  },
  section: {
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  activityText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
    flex: 1,
  },
});
