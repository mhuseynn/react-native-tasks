import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

const Login = () => {
  const [formData, setFormData] = useState({});

  const handleLogin = () => {
    console.log('Form Data:', formData);
  };

  return (
    <View style={styles.formView}>
      <Text style={styles.loginText}>Login</Text>

      <TextInput
        onChangeText={text => {
          setFormData(prevState => ({...prevState, email: text}));
        }}
        style={styles.textInputs}
        placeholder="Email"
      />

      <TextInput
        onChangeText={text => {
          setFormData(prevState => ({...prevState, password: text}));
        }}
        secureTextEntry={true}
        style={styles.textInputs}
        placeholder="Password"
      />

      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  formView: {
    flex: 1,
    justifyContent: 'center',
  },

  loginText: {
    fontSize: 40,
    textAlign: 'left',
    marginLeft: 20,
  },

  textInputs: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    paddingLeft: 10,
    marginTop: 10,
    marginHorizontal: 20,
  },
});

export default Login;
