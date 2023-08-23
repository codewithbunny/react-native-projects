import React, { useState } from "react";
import { StyleSheet} from "react-native";
import { Text, Button, Input } from "react-native-elements";
import Spacer from "./Spacer";

export default function AuthForm({ headerText, errorMessage, onSubmit, btnText }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
//   console.log(email, password);

  return (
    <>
      <Spacer>
        <Text h3>{headerText}</Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {/* <Spacer /> */}
      <Input
        secureTextEntry={true}
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      {/* {state.errorMessage = ''} */}
      <Spacer>
        <Button title={btnText} onPress={() => onSubmit({email, password})} />
      </Spacer>
    </>
  );
}

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        color: "red",
        marginLeft: 10,
      },
});
