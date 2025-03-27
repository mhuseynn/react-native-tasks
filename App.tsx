import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Login from './src/screens/login/Login';
import Todos from './src/screens/todo/Todos';
import Navigation from './src/stacks/Navigation';
import Gallery from './src/screens/gallery/Gallery';



function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <SafeAreaView  style={{flex:1}}>
        {/* <Login/> */}
        {/* <Todos/> */}
        {/* <Navigation/> */}
        <Gallery/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}



export default App;
