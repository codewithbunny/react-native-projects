import React, {useContext} from 'react';
import { StyleSheet, FlatList, TouchableOpacity, View } from "react-native";
import { Text} from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';
import { Context as TrackContext } from '../context/TrackContext';
import { ListItem } from 'react-native-elements';


export default function TrackListScreen({navigation}) {
  const {state, fetchTracks} = useContext(TrackContext);
  return (
    <View>
    <NavigationEvents onWillFocus={fetchTracks}/>
    <FlatList
      data={state}
      keyExtractor={item => item._id}
      renderItem={({item})=> {
        return <TouchableOpacity onPress={() => navigation.navigate('TrackDetail', {_id: item._id})}>
        <ListItem>
          <ListItem.Content>
            <ListItem.Title>{item.name}</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </TouchableOpacity>
      }}
    />
    {/* <Button title = "Go to Track Detail" onPress = {() => navigation.navigate('TrackDetail')}/> */}
    </View>
  )
}

TrackListScreen.navigationOptions = () => {
  return {
    title: 'Tracks',
  };
};


const styles = StyleSheet.create({
  
});