import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { NavigationEvents } from "react-navigation";

export default function SignupScreen({ navigation }) {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  // console.log(state);
  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        headerText="Sign up for Tracker"
        errorMessage={state.errorMessage}
        btnText="Sign Up"
        onSubmit={signup}
      />
      <NavLink
        linkText="Already have an account? Sign in instead"
        routeName="Signin"
      />
    </View>
  );
}

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    // borderColor: 'red',
    // borderWidth: 10,
    flex: 1,
    justifyContent: "center",
    margin: 10,
    marginTop: 25,
    marginBottom: 150,
  },
});
