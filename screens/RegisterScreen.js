import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export function RegisterScreen({ route, navigation }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');

  const sendRequest = async () => {
    try {
      await fetch('https://webhook.site/4f4968a2-c110-4593-935a-5f1e97b8b53d', {
        method: 'post',
        mode: 'no-core',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: fullName,
          email: email,
          phone: phone,
          password: password,
          verifyPassword: verifyPassword,
        }),
      });
      setFullName('');
      setEmail('');
      setPhone('');
      setPassword('');
      setVerifyPassword('');
    } catch (error) {}
  };

  function handleHomePress() {
    navigation.navigate('Home');
  }

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.heading}>Sign up to continue.</Text>
        <View style={styles.firstSection}>
          <View style={styles.section}>
            <View style={styles.inputWrapper}>
              <Text style={styles.title}>Full name</Text>
              <TextInput
                style={styles.inputFullName}
                onChangeText={setFullName}
                value={fullName}
                placeholder="Marko Buljan"
              />
            </View>
          </View>
          <View>
            <View style={styles.inputWrapper}>
              <Text style={styles.title}>Email address</Text>
              <TextInput
                style={styles.inputEmail}
                onChangeText={setEmail}
                value={email}
                placeholder="email@example.hr"
              />
            </View>
          </View>

          <View style={styles.inputWrapper}>
            <Text style={styles.title}>Phone number</Text>
            <TextInput
              style={styles.inputNumber}
              onChangeText={setPhone}
              value={phone}
            />

            <View style={styles.inputWrapper}>
              <Text style={styles.title}>Password</Text>
              <TextInput
                style={styles.input}
                onChangeText={setPassword}
                value={password}
              />
            </View>
          </View>

          <View style={styles.inputWrapper}>
            <Text style={styles.title}>Verify password</Text>
            <TextInput
              style={styles.input}
              onChangeText={setVerifyPassword}
              value={verifyPassword}
              placeholder="Repeat your password"
            />
          </View>

          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <TouchableOpacity onPress={sendRequest}>
                <Text style={styles.buttonText}>Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#415252',
    padding: 15,
    alignItems: 'center',
  },
  input: {
   height: 30,
    marginRight: 5,
    marginBottom: 10,
    borderBottomWidth: 2,
    borderRadius: 5,
    borderColor: '#EB6E39',
    color: 'white',
  },
  inputEmail: {
   height: 30,
    marginRight: 5,
    marginBottom: 10,
    borderBottomWidth: 2,
    borderRadius: 5,
    borderColor: '#d90d1e',
    color: 'white',
  },
  inputNumber: {
    height: 30,
    marginRight: 5,
    marginBottom: 10,
    borderBottomWidth: 2,
    borderRadius: 5,
    borderColor: '#EB6E39',
    color: 'white',
  },
  inputFullName: {
    height: 30,
    marginRight: 5,
    marginBottom: 10,
    borderBottomWidth: 2,
    borderRadius: 5,
    borderColor: '#EB6E39',
    color: 'white',
  },
  title: {
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  heading: {
    fontSize: 20,
    color: 'white',
    marginBottom: 20,
    marginTop: 10,
  },

  firstSection: {
    flex: 1,
  },

  section: {
    flexDirection: 'row',
  },

  buttonContainer: {
    alignItems: 'center',
  },

  button: {
    marginTop: 20,
    color: 'white',
    alignContent: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    textAlign: 'center',
    padding: 10,
    color: 'white',
    backgroundColor: '#0d7ad9',
    width: 300,
    borderRadius: 15,
  },
});
