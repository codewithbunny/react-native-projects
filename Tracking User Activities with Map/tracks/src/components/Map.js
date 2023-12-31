import React, {useContext} from "react";
import { StyleSheet, ActivityIndicator } from "react-native";
import { Text } from "react-native-elements";
import MapView, { Circle, Polyline } from "react-native-maps";
import {Context as LocationContext} from '../context/LocationContext'
// import { ActivityIndicator } from "react-native-paper";

export default function Map() {
  const { state : { currentLocation, locations } } = useContext(LocationContext);
  // console.log(state);

  if(!currentLocation){
    return <ActivityIndicator size = "large" style= {{ marginTop: 200 }}/>;
  }

  // initialLocation = {
  //   longitude: 77.758133,
  //   latitude: 20.929720,
  // }

  return (
    
      <MapView
        style={styles.map}
        initialRegion={{
          ...currentLocation.coords,
          // ...initialLocation,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        // region={{
        //   ...currentLocation.coords,
        //   latitudeDelta: 0.01,
        //   longitudeDelta: 0.01,
        // }}
      >
        <Circle
          center={currentLocation.coords}
          radius={35}
          strokeColor="rgba(158, 158, 255, 1.0)"
          fillColor="rgba(158, 158, 255, 0.3)"
        />
        <Polyline coordinates={locations.map(loc => loc.coords)}/>
      </MapView>

  );
}

const styles = StyleSheet.create({
  map: {
    height: 350,
  },
});
