import {
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import { auth } from "../db/firebase";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Load");
      }
    });
    return unsubscribe;
  }, []);

  const handleSignUp = () => {
    navigation.replace("Load");
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Registered with:", user.email);
      })
      .catch((error) => alert(error.message));
  };

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in with:", user.email);
      })
      .catch((error) => alert(error.message));
  };

  const handleGuest = () => {
    navigation.replace("NotLoggedPage");
  };

  const [loaded] = useFonts({
    DancingScript: require("../assets/font/DancingScript-Bold.ttf"),
  });
  if (!loaded) {
    return null;
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View>
        <Image
          source={require("../assets/img/gambar.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.inputContainer}>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.inputLogo}>
            <MaterialCommunityIcons name="email" size={24} color="#6C4AB6" />
          </View>
          <TextInput
            placeholder="enter your email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            autoCapitalize="none"
            style={styles.input}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.inputLogo}>
            <MaterialIcons name="lock" size={24} color="#6C4AB6" />
          </View>
          <TextInput
            placeholder="enter your password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            autoCapitalize="none"
            style={styles.input}
            secureTextEntry
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleGuest}>
          <Text style={styles.guestButton}>Guest</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#BCCEF8",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 400,
    height: 400,
    marginLeft: 30
  },
  inputContainer: {
    width: "80%",
  },
  inputLogo: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#B9B9B9",
    marginTop: 5,
    width: 55,
    shadowColor: "#6C4AB6",
    shadowOffset: {
	    width: 0,
	    height: 5,
    },
    shadowOpacity: 0.8,
    shadowRadius: 6.27,
    elevation: 12,
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#B9B9B9",
    marginTop: 5,
    width: 260,
    shadowColor: "#6C4AB6",
    shadowOffset: {
	    width: 0,
	    height: 5,
    },
    shadowOpacity: 0.8,
    shadowRadius: 6.27,
    elevation: 12,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  button: {
    backgroundColor: "#6C4AB6",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 8,
    borderColor: "#6C4AB6",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "#6C4AB6",
    fontWeight: "700",
    fontSize: 16,
  },
  guestButton: {
    marginTop: 25,
    fontSize: 14,
    fontWeight: "700",
    color: "#6C4AB6",
    textDecorationLine: "underline",
  },
});
