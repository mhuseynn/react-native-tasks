import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Login from './src/screens/login/Login';



function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <SafeAreaView  style={{flex:1}}>
        <Login/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}



export default App;
