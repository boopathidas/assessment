import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CourseManagementScreen() {
  const courses = [
    { id: 1, name: 'Mathematics', instructor: 'Dr. Smith', students: 25, status: 'Active' },
    { id: 2, name: 'Physics', instructor: 'Prof. Johnson', students: 20, status: 'Active' },
    { id: 3, name: 'Chemistry', instructor: 'Dr. Williams', students: 18, status: 'Draft' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Course Management</Text>
      </View>
      
      <ScrollView style={styles.scrollView}>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={24} color="white" />
          <Text style={styles.addButtonText}>Create New Course</Text>
        </TouchableOpacity>
        
        {courses.map((course) => (
          <View key={course.id} style={styles.courseCard}>
            <View style={styles.courseInfo}>
              <Text style={styles.courseName}>{course.name}</Text>
              <Text style={styles.instructor}>Instructor: {course.instructor}</Text>
              <Text style={styles.students}>Students: {course.students}</Text>
            </View>
            <View style={styles.courseActions}>
              <Text style={[
                styles.status,
                { color: course.status === 'Active' ? '#34C759' : '#FF9500' }
              ]}>
                {course.status}
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
  courseCard: {
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
  courseInfo: {
    marginBottom: 15,
  },
  courseName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  instructor: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  students: {
    fontSize: 14,
    color: '#999',
  },
  courseActions: {
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
