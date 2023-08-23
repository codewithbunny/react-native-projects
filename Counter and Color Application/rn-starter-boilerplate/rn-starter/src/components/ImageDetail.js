import React from "react";
import { View, Text, StyleSheet, Image} from "react-native";

export default function ImageDetail({imageSource, title, score}) {
  return (
    <View>
            <Image source = {imageSource}/>
            <Text style= {styles.textStyle}>{title}</Text>
            <Text style= {styles.textStyle}>Image score - {score}</Text>
        </View>
  )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 15,
        fontWeight: "bold",
    }
});
