import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

export default function TextScreen() {
    const [password, setPassword] = useState('');
    return (
    <View>
        <Text style= {styles.text}>Enter Password:</Text>
        <TextInput 
            style = {styles.input}
            autoCapitalize='none'
            autoCorrect={false}
            value={password}
            onChangeText={
                (value) => setPassword(value)            
            }
        />
        {password.length < 5 ? <Text style= {styles.text}>Password must be of 5 character atleast</Text> : <Text style= {styles.text}>Your Password is acceptable</Text>}
        {/* <Text >My name is {password}</Text> */}
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        padding: 5,
    },
    text: {
        marginLeft: 15
    }
});
