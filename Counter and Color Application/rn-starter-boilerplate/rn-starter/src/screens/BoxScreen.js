import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function BoxScreen() {
  return (
    <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>Box Screen 1</Text>
        <Text style={styles.textStyle}>Box Screen 2</Text>
        <Text style={styles.textStyle}>Box Screen 3</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        alignItems: 'center',
        flexDirection: 'row',
        height: 100,
        justifyContent: 'space-between',
    },
    textStyle: {
        borderWidth: 1,
        borderColor: 'red',
        height: 50,
    }
});