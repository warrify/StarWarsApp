import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  // eslint-disable-next-line react-native/no-color-literals
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const App: React.FunctionComponent = () => (
  <View style={styles.container}>
    <Text>Welcome</Text>
  </View>
);

export default App;
