import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

const PasswordScreen = () => {
  const [password, setPassword] = useState('');

  return (
    <View>
      <Text>Enter Password:</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        input={password}
        onChangeText={(newPassword) => setPassword(newPassword)}
      />
      <Text>Password: {password}</Text>
      {password.length < 4 ? (
        <Text>Password must be longer than 3 characters!</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default PasswordScreen;
