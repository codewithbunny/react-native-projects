import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { weatherType } from "../utilities/weatherType";
import moment from "moment/moment";

export default function ListItem({ dt_text, min, max, condition }) {
  const { item, temp, date, dateTextWrapper } = styles;
  return (
    <View style={item}>
      <Feather name={weatherType[condition]?.icon} size={40} color="white" />
      <View style={dateTextWrapper}>
        <Text style={date}>{moment(dt_text).format("dddd")}</Text>
        <Text style={date}>{moment(dt_text).format("h:mm:ss a")}</Text>
      </View>
      <Text style={temp}>{`${Math.round(min)}° / ${Math.round(max)}°`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    marginVertical: 15,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 5,
    backgroundColor: "red",
  },
  temp: {
    color: "white",
    fontSize: 15,
    fontWeight: 'bold'
  },
  date: {
    color: "white",
    fontSize: 15,
  },
  dateTextWrapper: {
    flexDirection: "column",
  },
});
