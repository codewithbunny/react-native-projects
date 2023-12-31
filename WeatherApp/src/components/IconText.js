import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function IconText({iconName, iconColor, bodyText, bodyTextStyles}) {
    const { textTheme, container } = styles;
  return (
    <View style={container}>
      <Feather name={iconName} size={40} color={iconColor} />
      <Text style={[textTheme, bodyTextStyles]}>{bodyText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    textTheme: {
        fontWeight: "bold"
    },
    container:{
        alignItems: 'center',
    }
});
