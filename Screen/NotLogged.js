import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
} from "react-native";
import Notes from "./Notes";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons';

const NotLoggedScreen = () => {
  const [notes, setNotes] = useState();
  const [notesItems, setNotesItems] = useState([]);

  const navigation = useNavigation();
  const handleSignIn = () => {
    navigation.replace("LoginPage");
  };

  const handleAddNotes = () => {
    Keyboard.dismiss();
    setNotesItems([...notesItems, notes]);
    setNotes(null);
  };

  const completeNotes = (index) => {
    let itemsCopy = [...notesItems];
    itemsCopy.splice(index, 1);
    setNotesItems(itemsCopy);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.notesWrapper}>
          <View style={styles.headerItems}>
            <Text style={styles.sectionTitle}>Today's Notes</Text>
            <TouchableOpacity onPress={handleSignIn}>
                <FontAwesome name="user-circle" size={28} color="#6C4AB6" />
            </TouchableOpacity>
          </View>
          <View style={styles.items}>
            {notesItems.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => completeNotes(index)}
                >
                  <Notes text={item} />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
      <View
        behavior={Platform.OS === "android" ? "padding" : "height"}
        style={styles.writeNotesWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"Write a Notes"}
          value={notes}
          onChangeText={(text) => setNotes(text)}
        />
        <TouchableOpacity onPress={() => handleAddNotes()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NotLoggedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  notesWrapper: {
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  headerItems: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 35,
    fontFamily: "DancingScript",
  },
  items: {
    marginTop: 60,
  },
  writeNotesWrapper: {
    position: "absolute",
    bottom: 40,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#6C4AB6",
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#6C4AB6",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "transparent",
    borderWidth: 1,
  },
  addText: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
  },
});
