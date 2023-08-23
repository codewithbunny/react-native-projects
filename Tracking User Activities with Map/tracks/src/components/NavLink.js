import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";
import Spacer from "./Spacer";
import { withNavigation } from "react-navigation";

export default withNavigation (function NavLink({ navigation, linkText, routeName }) {
  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
        <Text style={styles.linkStyle}>
          {linkText}
        </Text>
      </TouchableOpacity>
    </>
  );
})

const styles = StyleSheet.create({
    linkStyle: {
        marginLeft: 15,
        marginTop: 5,
        color: 'blue',
      }
});
