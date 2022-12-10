import * as React from 'react';
import { View, Text, StyleSheet, Image } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Screen/Login';
import HomeScreen from './Screen/Home';
import NotLoggedScreen from './Screen/NotLogged';
import { useFonts } from "expo-font";

function SplashScreen({navigation}) {
  setTimeout(() => {
    navigation.replace("NotLoggedPage");
  }, 5000);
  return (
    <View style={styles.container}>
      <View style={styles.circular}>
          <Text style={styles.textStyle}>Notes</Text>
          <Text style={styles.textStyle}>App</Text>
      </View>
    </View>
  );
}

function LoadingScreen({navigation}) {
  setTimeout(() => {
    navigation.replace("HomePage");
  }, 1500);
  return (
    <View style={styles.loadContainer}>
      <View style={styles.propContainer}>
        <Image source={require('./assets/img/gambar3.png')} style={styles.img}></Image>
        <Text style={styles.textLoad}>Loading</Text>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  const [loaded] = useFonts({
    DancingScript: require("./assets/font/DancingScript-Bold.ttf"),
  });
  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen options={{headerShown: false}} name="Splash" component={SplashScreen} />
        <Stack.Screen options={{headerShown: false}} name="NotLoggedPage" component={NotLoggedScreen} />
        <Stack.Screen options={{headerShown: false}} name="LoginPage" component={LoginScreen} />
        <Stack.Screen options={{headerShown: false}} name="Load" component={LoadingScreen} />
        <Stack.Screen options={{headerShown: false}} name="HomePage" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  circular: {
    borderRadius: 150,
    borderColor: "#BCCEF8",
    borderWidth: 5,
    width: 250,
    height: 250,
    justifyContent: "center",
    alignItems: "center"
  },
  textStyle: {
    fontSize: 50,
    fontFamily: 'DancingScript',
    color: "#6C4AB6"
  },
  loadContainer: {
    backgroundColor: "#BCCEF8",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  propContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    bottom: 50,
  },
  img: {
    width: 300,
    height: 230,
    marginLeft: 20
  },
  textLoad: {
    fontSize: 50,
    marginTop: 20,
    fontFamily: 'DancingScript',
    color: "#6C4AB6"
  }
});