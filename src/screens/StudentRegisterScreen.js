import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function StudentRegisterScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [registeredStudents, setRegisteredStudents] = useState([]);
  const [showRegisteredList, setShowRegisteredList] = useState(false);

  const handleRegister = () => {
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    const newStudent = {
      id: Date.now().toString(),
      name,
      email,
      registeredAt: new Date().toLocaleString(),
    };

    setRegisteredStudents((prev) => [newStudent, ...prev]);

    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');

    Alert.alert('Success', 'Registration successful!');
    setShowRegisteredList(true);
  };

  const renderRegisteredList = () => (
    <View style={styles.listContainer}>
      <Text style={styles.listTitle}>Registered Students</Text>
      <View style={styles.tableHeader}>
        <Text style={[styles.th, { flex: 2 }]}>Name</Text>
        <Text style={[styles.th, { flex: 2 }]}>Email</Text>
        <Text style={[styles.th, { flex: 2 }]}>Registered At</Text>
      </View>
      <ScrollView style={styles.tableBody}>
        {registeredStudents.length === 0 ? (
          <Text style={styles.emptyText}>No students registered yet.</Text>
        ) : (
          registeredStudents.map((s) => (
            <View key={s.id} style={styles.tr}>
              <Text style={[styles.td, { flex: 2 }]} numberOfLines={1}>{s.name}</Text>
              <Text style={[styles.td, { flex: 2 }]} numberOfLines={1}>{s.email}</Text>
              <Text style={[styles.td, { flex: 2 }]} numberOfLines={1}>{s.registeredAt}</Text>
            </View>
          ))
        )}
      </ScrollView>

      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => navigation.navigate('Welcome')}
      >
        <Text style={styles.homeButtonText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.registerMoreButton}
        onPress={() => setShowRegisteredList(false)}
      >
        <Text style={styles.registerMoreButtonText}>Register Another</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <LinearGradient
      colors={['#667eea', '#764ba2']}
      style={styles.container}
    >
      <View style={styles.content}>
        <Text style={styles.title}>Student Registration</Text>

        {showRegisteredList ? (
          renderRegisteredList()
        ) : (
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              placeholderTextColor="#999"
              value={name}
              onChangeText={setName}
            />
            
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#999"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#999"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              placeholderTextColor="#999"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
            />
            
            <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
              <Text style={styles.registerButtonText}>Register</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.backButtonText}>Back to Welcome</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  form: {
    width: '100%',
    maxWidth: 300,
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 25,
    marginBottom: 20,
    fontSize: 16,
  },
  registerButton: {
    backgroundColor: '#34C759',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 20,
  },
  registerButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  backButton: {
    alignItems: 'center',
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  listContainer: {
    width: '100%',
    maxWidth: 340,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    marginBottom: 12,
    textAlign: 'center',
  },
  tableHeader: {
    flexDirection: 'row',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  th: {
    fontWeight: '700',
    color: '#555',
    fontSize: 12,
    paddingHorizontal: 6,
  },
  tableBody: {
    maxHeight: 260,
    marginTop: 6,
  },
  tr: {
    flexDirection: 'row',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f6f6f6',
  },
  td: {
    color: '#333',
    fontSize: 12,
    paddingHorizontal: 6,
  },
  emptyText: {
    textAlign: 'center',
    color: '#777',
    paddingVertical: 20,
  },
  homeButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 14,
  },
  homeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  registerMoreButton: {
    backgroundColor: '#34C759',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 10,
  },
  registerMoreButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
