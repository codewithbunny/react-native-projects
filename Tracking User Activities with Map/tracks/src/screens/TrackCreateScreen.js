// import "../_mockLocation";
import React, { useContext, useCallback } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import Map from "../components/Map";
import { SafeAreaView } from "react-native-safe-area-context";
import { withNavigationFocus } from "react-navigation";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import TrackForm from "../components/TrackForm";
import { Feather } from '@expo/vector-icons'; 

const TrackCreateScreen = ({ isFocused }) => {
  const {
    state: { recording },
    addLocation,
  } = useContext(LocationContext);

  const callback = useCallback(
    (location) => {
      addLocation(location, recording);
    },
    [recording]
  );

  const [error] = useLocation(isFocused || recording, callback);
  // console.log(isFocused);
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Map />
      {error ? <Text>Please enable location services</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};

TrackCreateScreen.navigationOptions = () => {
  return {
    title: "Create Tracks",
    tabBarIcon: <Feather name="plus-square" size={24} color="white" />,
  };
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
