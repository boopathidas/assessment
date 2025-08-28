import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function TestScreen() {
  const tests = [
    { id: 1, name: 'Math Quiz 1', subject: 'Mathematics', duration: '30 min', status: 'Available' },
    { id: 2, name: 'Physics Test', subject: 'Physics', duration: '45 min', status: 'Completed' },
    { id: 3, name: 'Chemistry Quiz', subject: 'Chemistry', duration: '20 min', status: 'Available' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Tests & Quizzes</Text>
      </View>
      
      <ScrollView style={styles.scrollView}>
        {tests.map((test) => (
          <TouchableOpacity key={test.id} style={styles.testCard}>
            <View style={styles.testInfo}>
              <Text style={styles.testName}>{test.name}</Text>
              <Text style={styles.subject}>{test.subject}</Text>
              <Text style={styles.duration}>Duration: {test.duration}</Text>
            </View>
            <View style={styles.statusContainer}>
              <Text style={[
                styles.status,
                { color: test.status === 'Available' ? '#34C759' : '#FF9500' }
              ]}>
                {test.status}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
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
    backgroundColor: '#34C759',
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
  testCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  testInfo: {
    marginBottom: 15,
  },
  testName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  subject: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  duration: {
    fontSize: 14,
    color: '#999',
  },
  statusContainer: {
    alignItems: 'flex-end',
  },
  status: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
