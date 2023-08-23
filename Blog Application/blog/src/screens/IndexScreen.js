import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

export default function IndexScreen({ navigation }) {
  const { state, getBlogPosts, deleteBlogPost } = useContext(Context);

  useEffect(()=> {
    getBlogPosts();
    const listener = navigation.addListener('didFocus', () => {
      getBlogPosts();
    });
    return () => {
      listener.remove();
    }
  }, [])

  return (
    <View>
      {/* <Text>Index Screen</Text> */}
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Show", { id: item.id })}
            >
              <View style={styles.rowStyle}>
                <Text style={styles.titleStyle}>{item.title}</Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather
                    name="trash-2"
                    color="black"
                    style={styles.iconStyle}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Feather
          name="plus-square"
          size={28}
          color="black"
          style={styles.headerStyle}
        />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  rowStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: "gray",
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconStyle: {
    fontSize: 28,
  },
  headerStyle: {
    marginRight: 10,
    marginTop: 5,
  },
});
