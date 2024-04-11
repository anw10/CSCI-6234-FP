import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, StyleSheet, ImageBackground} from 'react-native';
import {Button, MD3Colors} from 'react-native-paper';

export default function Signup({navigation}) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an Account</Text>
      <View style={styles.formGroup}>
        <Text style={styles.label}>First Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={firstName}
          onChangeText={text => setFirstName(text)}
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Last Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={lastName}
          onChangeText={text => setLastName(text)}
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={text => setEmail(text)}
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
        />
      </View>
      <Button
        mode="contained"
        onPress={() => createUser()}
        style={styles.button}>
        Sign Up
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: MD3Colors.neutral0,
  },
  title: {
    color: 'white',
    fontSize: 30,
    marginBottom: 20,
  },
  formGroup: {
    marginBottom: 20,
    width: '80%',
  },
  label: {
    color: 'white',
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: 'white',
    width: '100%',
    padding: 12,
    borderRadius: 8,
  },
  button: {
    marginTop: 10,
  },
});
