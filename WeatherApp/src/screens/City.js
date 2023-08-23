import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import IconText from "../components/IconText";
import { StatusBar } from "expo-status-bar";
import moment from "moment";

export default function City({weatherData}) {
  const { container, imageLayout, cityName, countryName, cityText, populationWrapper, populationText, riseSetText, riseSetWrapper, rowLayout, Viewcontainer } = styles;
  const {name, country, population, sunrise, sunset} = weatherData
  // console.log(weatherData);
  return (
    <SafeAreaView style={[container]}>
      <ImageBackground
        style={[imageLayout]}
        source={require("../../assets/city.jpg")}
      >
        <Text style={[cityName, cityText]}>{name}</Text>
        <Text style={[countryName, cityText]}>{country}</Text>
        <View style={[populationWrapper, rowLayout]}>
          <IconText iconName={'user'} iconColor={'white'} bodyText={`Population: ${(population > 0) ? population : "N/A"}`} bodyTextStyles={populationText}/>
        </View>
        <View style= {[riseSetWrapper, rowLayout]}>
        <IconText iconName={'sunrise'} iconColor={'white'} bodyText={moment(sunrise).format('h:mm:ss a')} bodyTextStyles={riseSetText}/>
        <IconText iconName={'sunset'} iconColor={'white'} bodyText={moment(sunset).format('h:mm:ss a')} bodyTextStyles={riseSetText}/>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    // backgroundColor: 'pink',
    
  },
  Viewcontainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    // backgroundColor: 'pink',
    
  },
  imageLayout: {
    flex: 1,
    // marginTop:-30
  },
  cityName: {
    fontSize: 40,
    marginTop: 10
  },
  countryName: {
    fontSize: 30,
  },
  cityText: {
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
    color: "white",
  },
  populationWrapper: {
    justifyContent: 'center',
    marginTop: 30,

  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: 'yellow'
  },
  riseSetWrapper: {
    justifyContent: "center",
    margin: 30
  },
  riseSetText: {
    fontSize: 20,
    color: 'yellow',
    fontWeight: 'bold',
    marginRight: 10
  },
  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center',
  }
});
