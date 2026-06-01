import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function RegisterScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Register
      </Text>

      <TextInput
        placeholder="Full Name"
        style={styles.input}
      />

      <TextInput
        placeholder="Email"
        style={styles.input}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          Register
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.link}>
          Back to Login
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 14,
    marginBottom: 15,
  },

  button: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  link: {
    textAlign: 'center',
    color: 'blue',
  },
});