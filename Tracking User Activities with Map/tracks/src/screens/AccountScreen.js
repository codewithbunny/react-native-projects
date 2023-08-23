import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Button, Text } from "react-native-elements";
// import { SafeAreaView } from "react-native-safe-area-context";
import { SafeAreaView } from 'react-native-safe-area-context';
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import { Octicons } from '@expo/vector-icons'; 

export default function AccountScreen() {
  const { signout } = useContext(AuthContext);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Spacer>
        <Button title="Sign Out" onPress={signout} />
      </Spacer>
    </SafeAreaView>
  );
}

AccountScreen.navigationOptions = () => {
  return {
    title: "Settings",
    tabBarIcon: <Octicons name="gear" size={24} color="white" />,
  };
};



const styles = StyleSheet.create({});
