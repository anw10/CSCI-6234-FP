import React, {useState, useEffect, useRef} from 'react';
import {View, Text, TextInput, StyleSheet, Animated} from 'react-native';
import {
  ActivityIndicator,
  Button,
  Card,
  Icon,
  MD3Colors,
} from 'react-native-paper';

import Signup from './Signup';
import ClothesVR from './ClothesVR';
import Browse from './Browse';

export default function Login({navigation}) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const FadeInView = props => {
    const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

    useEffect(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }, [fadeAnim]);

    return (
      <Animated.View // Special animatable View
        style={{
          ...props.style,
          opacity: fadeAnim, // Bind opacity to animated value
        }}>
        {props.children}
      </Animated.View>
    );
  };

  return (
    <View style={{backgroundColor: MD3Colors.secondary100, flex: 1}}>
      <FadeInView style={styles.container}>
        <Text style={styles.title}>StellAR</Text>
      </FadeInView>

      <View
        style={{
          backgroundColor: MD3Colors.tertiary40,
          margin: 20,
          borderRadius: 20,
        }}>
        <Card style={styles.cardStyles} mode="contained">
          <View>
            <Text style={styles.label}>Username</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={userName}
              onChangeText={text => setUserName(text)}
            />
          </View>
          <View>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={text => setPassword(text)}
              secureTextEntry={true}
            />
          </View>
          <Button
            mode="contained"
            onPress={() => navigation.navigate(Browse)}
            style={styles.button}
            textColor="black">
            Login
          </Button>
          <Button
            mode="contained"
            onPress={() => navigation.navigate(Signup)}
            style={styles.button}
            textColor="black">
            Sign Up
          </Button>
        </Card>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: MD3Colors.secondary100,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 100,
  },
  cardStyles: {
    backgroundColor: MD3Colors.tertiary40,
    justifyContent: 'center',
    alignItems: 'stretch',
    margin: 30,
  },
  title: {
    color: MD3Colors.tertiary40,
    fontSize: 64,
    fontFamily: 'sans-serif-light',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 150,
  },
  formGroup: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    width: '80%', // Adjust the width as needed
  },
  label: {
    color: 'white', // Set label color to white
    marginBottom: 5,
    fontWeight: 'bold',
    alignContent: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: 'white',
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: 'white', // Set input border color to white
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    color: 'black',
  },
  button: {
    marginTop: 10,
    backgroundColor: MD3Colors.tertiary100,
  },
});
