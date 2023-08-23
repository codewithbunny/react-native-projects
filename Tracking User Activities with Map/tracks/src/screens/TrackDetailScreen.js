import React, { useContext } from 'react';
import { View, StyleSheet, Text } from "react-native";
// import { navigate } from "../navigationRef";
import { Context as TrackContext } from '../context/TrackContext';
import MapView, {Polyline} from 'react-native-maps';


export default function TrackDetailScreen({ navigation }) {
  const {state} = useContext(TrackContext);
  const _id = navigation.getParam('_id');
  const track = state.find(track => track._id === _id);
  const initialCoords = track.locations[0].coords
  // console.log(track.locations);
  return (
    <>
    <Text>
        {track.name}
    </Text>
    <MapView
       initialRegion={{
        longitudeDelta: 0.01,
        latitudeDelta: 0.01,
        ...initialCoords
       }}
       style={styles.mapStyle}
    >
      <Polyline coordinates={track.locations.map(loc => loc.coords)}/>
    </MapView>
    </>
  )
}

TrackDetailScreen.navigationOptions = () => {
  return {
    title: 'About Track',

  };
};

const styles = StyleSheet.create({
  mapStyle: {
    height: 300
  }
});