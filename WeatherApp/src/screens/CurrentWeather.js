import React from "react";
import { View, StyleSheet, Text, SafeAreaView, ImageBackground } from "react-native";
import { Feather } from "@expo/vector-icons";
import RowText from "../components/RowText";
import { StatusBar } from "expo-status-bar";
import { weatherType } from "../utilities/weatherType";

export default function CurrentWeather({weatherData}) {
  const { main: {temp, feels_like, temp_max, temp_min}, weather} = weatherData
  const weatherCondition =  weather[0]?.main  
  return (
   <SafeAreaView style={[styles.wrapper]}>
      <ImageBackground
        style={styles.imageLayout}
        source={weatherType[weatherCondition].backgroundGif}
      >
      <View style={styles.container}>
        <Feather name={weatherType[weatherCondition]?.icon} size={100} color="white" />
        <Text style={styles.temprature}>{`${temp}°`}</Text>
        <Text style={styles.feels}>{`Feels like ${feels_like}°`}</Text>
        <RowText
          messageOne={`High: ${temp_max}°`}
          messageTwo={`Low: ${temp_min}°`}
          containerStyle={styles.highLowWrapper}
          msgOneStyle={styles.highLow}
          msgTwoStyle={styles.highLow}
        />
      </View>
        <RowText
          messageOne={weather[0]?.description}
          messageTwo={weatherType[weatherCondition]?.message}
          containerStyle={styles.bodyWrapper}
          msgOneStyle={styles.description}
          msgTwoStyle={styles.message}
        />
    </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "pink",
    marginTop: StatusBar.currentHeight || 0,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageLayout: {
    flex: 1
  },
  temprature: {
    color: "black",
    fontSize: 48,
  },
  feels: {
    fontSize: 30,
    color: "black",
  },
  highLowWrapper: {
    flexDirection: "row",
  },
  highLow: {
    color: "black",
    fontSize: 20,
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 43,
    textTransform: "capitalize"
  },
  message: {
    fontSize: 25,
  },
});
