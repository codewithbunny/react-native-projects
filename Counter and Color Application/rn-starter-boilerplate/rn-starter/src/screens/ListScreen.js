import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

export default function ListScreen() {
  const friends = [
    { name: "friends 1", age: 22 },
    { name: "friends 2", age: 25 },
    { name: "friends 3", age: 28 },
    { name: "friends 4", age: 21 },
    { name: "friends 5", age: 19 },
    { name: "friends 6", age: 29 },
    { name: "friends 7", age: 33 },
    { name: "friends 8", age: 25 },
  ];
  return (
    <View>
      <Text style={styles.listStyle}>List Screen</Text>
      <FlatList
        // horizontal
        // showsHorizontalScrollIndicator={false}
        // marginVertical
        keyExtractor={(friend) => friend.name}
        data={friends}
        renderItem={({ item }) => {
          return (
            <Text style={styles.textStyle}>
              {item.name} - Age {item.age}
            </Text>
          );
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  listStyle: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center"
  },
  textStyle: {
    marginVertical: 50,
  },
});

