import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function SearchBar({ term, onTermChange, onTermSubmit }) {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} color="black" />
      <TextInput
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Search"
        style={styles.inputStyle}
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#F0EEEE",
    height: 40,
    borderRadius: 5,
    marginHorizontal: 15,
    marginVertical: 15,
    flexDirection: "row",
    // gap: 5,
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingHorizontal: 3,
  },
  inputStyle: {
    // borderColor: 'black',
    // borderWidth: 1,
    flex: 1,
    // padding: 0,
    // paddingHorizontal: 3,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 28,
    alignSelf: "center",
    marginHorizontal: 10,
  },
});
