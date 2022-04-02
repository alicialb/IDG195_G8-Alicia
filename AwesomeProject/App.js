import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>¡Hola!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',

    alignItems: 'center',
    justifyContent: 'center',

  titleText:{
    fontSize:100,
    fontWeight: 'bold',
    color: 'black',
    marginBottom:60
  }
  },
});