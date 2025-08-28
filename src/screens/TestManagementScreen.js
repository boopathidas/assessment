import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TestManagementScreen() {
  const tests = [
    { id: 1, name: 'Math Quiz 1', subject: 'Mathematics', questions: 20, status: 'Published' },
    { id: 2, name: 'Physics Test', subject: 'Physics', questions: 25, status: 'Draft' },
    { id: 3, name: 'Chemistry Quiz', subject: 'Chemistry', questions: 15, status: 'Published' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Test Management</Text>
      </View>
      
      <ScrollView style={styles.scrollView}>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={24} color="white" />
          <Text style={styles.addButtonText}>Create New Test</Text>
        </TouchableOpacity>
        
        {tests.map((test) => (
          <View key={test.id} style={styles.testCard}>
            <View style={styles.testInfo}>
              <Text style={styles.testName}>{test.name}</Text>
              <Text style={styles.subject}>Subject: {test.subject}</Text>
              <Text style={styles.questions}>Questions: {test.questions}</Text>
            </View>
            <View style={styles.testActions}>
              <Text style={[
                styles.status,
                { color: test.status === 'Published' ? '#34C759' : '#FF9500' }
              ]}>
                {test.status}
              </Text>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="create" size={20} color="#007AFF" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="trash" size={20} color="#FF3B30" />
              </TouchableOpacity>
            </View>
          </View>
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
  addButton: {
    backgroundColor: '#34C759',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 25,
    marginBottom: 20,
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
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
  questions: {
    fontSize: 14,
    color: '#999',
  },
  testActions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  status: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  actionButton: {
    padding: 10,
  },
});
