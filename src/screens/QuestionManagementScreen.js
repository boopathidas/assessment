import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function QuestionManagementScreen() {
  const questions = [
    { id: 1, text: 'What is 2 + 2?', type: 'Multiple Choice', difficulty: 'Easy' },
    { id: 2, text: 'Solve for x: 3x + 5 = 20', type: 'Short Answer', difficulty: 'Medium' },
    { id: 3, text: 'Explain the Pythagorean theorem', type: 'Essay', difficulty: 'Hard' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Question Management</Text>
      </View>
      
      <ScrollView style={styles.scrollView}>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={24} color="white" />
          <Text style={styles.addButtonText}>Add New Question</Text>
        </TouchableOpacity>
        
        {questions.map((question) => (
          <View key={question.id} style={styles.questionCard}>
            <View style={styles.questionInfo}>
              <Text style={styles.questionText}>{question.text}</Text>
              <Text style={styles.questionType}>Type: {question.type}</Text>
              <Text style={styles.difficulty}>Difficulty: {question.difficulty}</Text>
            </View>
            <View style={styles.questionActions}>
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
  questionCard: {
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
  questionInfo: {
    marginBottom: 15,
  },
  questionText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
    lineHeight: 22,
  },
  questionType: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  difficulty: {
    fontSize: 14,
    color: '#999',
  },
  questionActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  actionButton: {
    padding: 10,
    marginLeft: 10,
  },
});
