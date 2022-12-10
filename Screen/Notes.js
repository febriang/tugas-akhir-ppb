import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Notes = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <Image
          source={require("../assets/img/gambar2.png")}
          style={styles.logo}
        />
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <MaterialCommunityIcons
        name="delete-forever-outline"
        size={30}
        style={styles.icon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#BCCEF8",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  logo: {
    width: 40,
    height: 40,
    opacity: 0.8,
    marginRight: 15,
  },
  itemText: {
    maxWidth: "80%",
  },
  icon: {
    width: 30,
    height: 30,
    color: "#6C4AB6",
  },
});

export default Notes;
