import { StyleSheet, Text, View } from 'react-native';

const App = () => {

  console.log("first")
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HelloWorld!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text : {
    color : "white",
    fontSize : 30,
    fontWeight : "bold"
  }
});

export default App;
