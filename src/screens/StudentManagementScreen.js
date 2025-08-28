import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function StudentManagementScreen() {
  const students = [
    { id: 1, name: 'John Doe', email: 'john@student.com', grade: '12th', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@student.com', grade: '11th', status: 'Active' },
    { id: 3, name: 'Mike Johnson', email: 'mike@student.com', grade: '12th', status: 'Inactive' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Student Management</Text>
      </View>
      
      <ScrollView style={styles.scrollView}>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={24} color="white" />
          <Text style={styles.addButtonText}>Add New Student</Text>
        </TouchableOpacity>
        
        {students.map((student) => (
          <View key={student.id} style={styles.studentCard}>
            <View style={styles.studentInfo}>
              <Text style={styles.studentName}>{student.name}</Text>
              <Text style={styles.studentEmail}>{student.email}</Text>
              <Text style={styles.studentGrade}>Grade: {student.grade}</Text>
            </View>
            <View style={styles.studentActions}>
              <Text style={[
                styles.status,
                { color: student.status === 'Active' ? '#34C759' : '#FF3B30' }
              ]}>
                {student.status}
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
  studentCard: {
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
  studentInfo: {
    marginBottom: 15,
  },
  studentName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  studentEmail: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  studentGrade: {
    fontSize: 14,
    color: '#999',
  },
  studentActions: {
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
