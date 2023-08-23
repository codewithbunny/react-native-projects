import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View>
    <Text style={styles.text}>Hi there, Bashir from CXR Agency</Text>
    <Button 
      title="Go to Components"
      onPress={() => navigation.navigate('Components')}
    />
    <Button 
      title="Go to List"
      onPress={() => navigation.navigate('List')}
    />
    <Button 
      title="Go to Image Screen"
      onPress={() => navigation.navigate('ImScreen')}
    />
    <Button 
      title="Go to Counter Screen"
      onPress={() => navigation.navigate('Counter')}
    />
    <Button 
      title="Go to Color Screen"
      onPress={() => navigation.navigate('Color')}
    />
    <Button 
      title="Go to Square Screen"
      onPress={() => navigation.navigate('Square')}
    />
    <Button 
      title="Go to Text Screen"
      onPress={() => navigation.navigate('Text')}
    />
    <Button 
      title="Go to Text Screen"
      onPress={() => navigation.navigate('Box')}
    />
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center"
  },
});


