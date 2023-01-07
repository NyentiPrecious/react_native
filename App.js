import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
   const handlePress = () => console.log("Text clicked"); 

  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={handlePress} >hello world!</Text>
      <Image source={require('./assets/icon.png')} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
