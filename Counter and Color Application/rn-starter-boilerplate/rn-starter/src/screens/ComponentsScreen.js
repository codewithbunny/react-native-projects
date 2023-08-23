import React from "react";
import { Text, StyleSheet, View } from "react-native";

export default function ComponentsScreen() {
  const nameMsg = "Bashir";
  return (
    <View>
      <Text style={styles.textStyleForFirstLine}>
        Getting started with react native!{" "}
      </Text>
      <Text style={styles.textStyleForSeondLine}>My name is {nameMsg} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyleForFirstLine: {
    fontSize: 45,
    fontWeight: "bold",
    textAlign: "center",
  },
  textStyleForSeondLine: {
    fontSize: 20,
  },
});
