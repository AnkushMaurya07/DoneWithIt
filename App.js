import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [message, setMessage] = useState('Welcome to the React Native app!');

  const changeMessage = () => {
    setMessage('This is a button click message!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Mr. Ankush is a React Native Developer!</Text>
      <Text style={styles.subheading}>{message}</Text>
      <Button title="Click me" onPress={changeMessage} color="#007BFF" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  subheading: {
    fontSize: 18,
    marginBottom: 30,
    color: '#666',
  },
});
