import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Import screens
import WelcomeScreen from './src/screens/WelcomeScreen';
import StudentLoginScreen from './src/screens/StudentLoginScreen';
import StudentRegisterScreen from './src/screens/StudentRegisterScreen';
import AdminLoginScreen from './src/screens/AdminLoginScreen';
import StudentDashboardScreen from './src/screens/StudentDashboardScreen';
import AdminDashboardScreen from './src/screens/AdminDashboardScreen';
import CourseListScreen from './src/screens/CourseListScreen';
import TestScreen from './src/screens/TestScreen';
import ResultsScreen from './src/screens/ResultsScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import StudentManagementScreen from './src/screens/StudentManagementScreen';
import CourseManagementScreen from './src/screens/CourseManagementScreen';
import TestManagementScreen from './src/screens/TestManagementScreen';
import QuestionManagementScreen from './src/screens/QuestionManagementScreen';
import TestMonitoringScreen from './src/screens/TestMonitoringScreen';
import AnalyticsScreen from './src/screens/AnalyticsScreen';

// Import context
import { AuthProvider, useAuth } from './src/utils/AuthContext';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Student Tab Navigator
function StudentTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Dashboard') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Courses') {
            iconName = focused ? 'library' : 'library-outline';
          } else if (route.name === 'Tests') {
            iconName = focused ? 'document-text' : 'document-text-outline';
          } else if (route.name === 'Results') {
            iconName = focused ? 'trophy' : 'trophy-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Dashboard" component={StudentDashboardScreen} />
      <Tab.Screen name="Courses" component={CourseListScreen} />
      <Tab.Screen name="Tests" component={TestScreen} />
      <Tab.Screen name="Results" component={ResultsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

// Admin Tab Navigator
function AdminTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Dashboard') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Students') {
            iconName = focused ? 'people' : 'people-outline';
          } else if (route.name === 'Courses') {
            iconName = focused ? 'library' : 'library-outline';
          } else if (route.name === 'Tests') {
            iconName = focused ? 'document-text' : 'document-text-outline';
          } else if (route.name === 'Analytics') {
            iconName = focused ? 'analytics' : 'analytics-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#FF6B35',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Dashboard" component={AdminDashboardScreen} />
      <Tab.Screen name="Students" component={StudentManagementScreen} />
      <Tab.Screen name="Courses" component={CourseManagementScreen} />
      <Tab.Screen name="Tests" component={TestManagementScreen} />
      <Tab.Screen name="Analytics" component={AnalyticsScreen} />
    </Tab.Navigator>
  );
}

// Main App Navigator
function AppNavigator() {
  const { user, userType } = useAuth();

  if (!user) {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="StudentLogin" component={StudentLoginScreen} />
        <Stack.Screen name="StudentRegister" component={StudentRegisterScreen} />
        <Stack.Screen name="AdminLogin" component={AdminLoginScreen} />
      </Stack.Navigator>
    );
  }

  if (userType === 'student') {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="StudentTabs" component={StudentTabNavigator} />
        <Stack.Screen name="TestTaking" component={TestScreen} />
      </Stack.Navigator>
    );
  }

  if (userType === 'admin') {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AdminTabs" component={AdminTabNavigator} />
        <Stack.Screen name="QuestionManagement" component={QuestionManagementScreen} />
        <Stack.Screen name="TestMonitoring" component={TestMonitoringScreen} />
      </Stack.Navigator>
    );
  }

  return null;
}

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <AppNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}
