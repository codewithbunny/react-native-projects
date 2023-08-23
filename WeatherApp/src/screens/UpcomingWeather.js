import React from "react";
import {
  FlatList,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import ListItem from "../components/ListItem";
import { StatusBar } from "expo-status-bar";

export default function UpcomingWeather( {weatherData} ) {
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_text={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  );
  const {container, image} = styles
  return (
    <SafeAreaView style={container}>
      <ImageBackground style={[image]} source={require('../../assets/weather.jpg')}>
        <FlatList
          data={weatherData}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt}
          // ListEmptyComponent={<Empty />}
        />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    // backgroundColor: 'pink'
  },
  
  image: {
    flex: 1,
  }
});
