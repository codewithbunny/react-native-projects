import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { NavigationEvents } from "react-navigation";

export default function SigninScreen() {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        headerText="Sign in to your Account"
        errorMessage={state.errorMessage}
        btnText="Sign In"
        onSubmit={signin}
      />
      <NavLink
        linkText="Dont have an account? Go back to sign up"
        routeName="Signup"
      />
    </View>
  );
}

SigninScreen.navigationOptions = () => {
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
