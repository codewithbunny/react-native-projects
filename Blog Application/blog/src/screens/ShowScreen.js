import React, { useContext } from "react";
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

export default function ShowScreen({ navigation }) {
  // id = navigation.getParam('id');
  const { state } = useContext(Context);

  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam("id")
  );

  return (
    <View style={styles.bodyStyle}>
      <View style={styles.containerStyle}>
        <Text style={styles.titleStyle}>{blogPost.title}</Text>
        <Text style={styles.contentStyle}>{blogPost.content}</Text>
      </View>
    </View>
  );
}

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Edit", { id: navigation.getParam("id") })
        }
      >
        <Feather
          name="edit-3"
          size={28}
          color="black"
          style={styles.headerStyle}
        />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 25,
    fontWeight: "bold",
    letterSpacing: 1,
    marginBottom: 10,
  },
  contentStyle: {
    fontSize: 18,
    textAlign: "justify",
    lineHeight: 28,
  },
  headerStyle: {
    marginRight: 10,
    marginTop: 5,
  },
  containerStyle: {
    borderWidth: 5,
    padding: 15,
    margin: 15,
    flex: 1,
  },
  bodyStyle: {
    backgroundColor: "white",
    flex: 1,
  }
});
