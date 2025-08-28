import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AnalyticsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Analytics</Text>
      </View>
      
      <ScrollView style={styles.scrollView}>
        <View style={styles.statsGrid}>
          <View style={styles.statCard}>
            <Ionicons name="people" size={30} color="#007AFF" />
            <Text style={styles.statNumber}>150</Text>
            <Text style={styles.statLabel}>Total Students</Text>
          </View>
          
          <View style={styles.statCard}>
            <Ionicons name="library" size={30} color="#34C759" />
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Active Courses</Text>
          </View>
          
          <View style={styles.statCard}>
            <Ionicons name="document-text" size={30} color="#FF9500" />
            <Text style={styles.statNumber}>45</Text>
            <Text style={styles.statLabel}>Tests Created</Text>
          </View>
          
          <View style={styles.statCard}>
            <Ionicons name="trophy" size={30} color="#FF6B35" />
            <Text style={styles.statNumber}>78%</Text>
            <Text style={styles.statLabel}>Avg. Score</Text>
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Performance Overview</Text>
          <View style={styles.performanceItem}>
            <Text style={styles.performanceLabel}>Mathematics</Text>
            <View style={styles.performanceBar}>
              <View style={[styles.performanceFill, { width: '85%' }]} />
            </View>
            <Text style={styles.performanceScore}>85%</Text>
          </View>
          
          <View style={styles.performanceItem}>
            <Text style={styles.performanceLabel}>Physics</Text>
            <View style={styles.performanceBar}>
              <View style={[styles.performanceFill, { width: '72%' }]} />
            </View>
            <Text style={styles.performanceScore}>72%</Text>
          </View>
          
          <View style={styles.performanceItem}>
            <Text style={styles.performanceLabel}>Chemistry</Text>
            <View style={styles.performanceBar}>
              <View style={[styles.performanceFill, { width: '68%' }]} />
            </View>
            <Text style={styles.performanceScore}>68%</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#FF6B35',
    padding: 20,
    paddingTop: 60,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  scrollView: {
    flex: 1,
    padding: 20,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  statCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    width: '48%',
    alignItems: 'center',
    marginBottom: 15,
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
    marginBottom: 20,
  },
  performanceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  performanceLabel: {
    fontSize: 16,
    color: '#333',
    width: 80,
  },
  performanceBar: {
    flex: 1,
    height: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    marginHorizontal: 15,
  },
  performanceFill: {
    height: '100%',
    backgroundColor: '#34C759',
    borderRadius: 4,
  },
  performanceScore: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007AFF',
    width: 40,
    textAlign: 'right',
  },
});
