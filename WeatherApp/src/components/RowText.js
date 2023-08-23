import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function RowText({ messageOne, messageTwo, containerStyle, msgOneStyle, msgTwoStyle }) {
    const {} = styles
  return (
    <View style={containerStyle}>
      <Text style={msgOneStyle}>{messageOne} </Text>
      <Text style={msgTwoStyle}>{messageTwo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
