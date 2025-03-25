import { TextInput, StyleSheet } from 'react-native';
import React from 'react';

const Input = ({ name, setFormData, value, placeholder, secureTextEntry }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={(text) => setFormData((prev) => ({ ...prev, [name]: text }))}
      secureTextEntry={secureTextEntry}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#D1D5DB', // gray-300
    borderRadius: 10,
    padding: 16,
    fontSize: 18,
    backgroundColor: '#FFFFFF',
  },
});

export default Input;