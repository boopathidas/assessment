import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function ResultsScreen() {
  const results = [
    { id: 1, test: 'Math Quiz 1', subject: 'Mathematics', score: 90, total: 100, date: '2024-01-15' },
    { id: 2, test: 'Physics Test', subject: 'Physics', score: 85, total: 100, date: '2024-01-10' },
    { id: 3, test: 'Chemistry Quiz', subject: 'Chemistry', score: 78, total: 100, date: '2024-01-05' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Test Results</Text>
      </View>
      
      <ScrollView style={styles.scrollView}>
        {results.map((result) => (
          <View key={result.id} style={styles.resultCard}>
            <View style={styles.resultHeader}>
              <Text style={styles.testName}>{result.test}</Text>
              <Text style={styles.subject}>{result.subject}</Text>
            </View>
            <View style={styles.scoreContainer}>
              <Text style={styles.score}>{result.score}/{result.total}</Text>
              <Text style={styles.percentage}>{Math.round((result.score/result.total) * 100)}%</Text>
            </View>
            <Text style={styles.date}>Completed: {result.date}</Text>
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
    backgroundColor: '#FF9500',
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
  resultCard: {
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
  resultHeader: {
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
  },
  scoreContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  score: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  percentage: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#34C759',
  },
  date: {
    fontSize: 12,
    color: '#999',
    textAlign: 'right',
  },
});
