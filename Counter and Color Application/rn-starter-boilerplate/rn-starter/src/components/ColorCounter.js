import React, {useState} from 'react'
import { View, Button, Text, StyleSheet } from 'react-native'

export default function ColorCounter({color, onIncrease, onDecrease}) {
  return (
    <View>
        <Text>{color}</Text>

        <Button onPress={
            ()=> onIncrease()
        } 
        title={`Increase ${color}`} />

        <Button onPress={
            ()=> onDecrease()
        } 
        title={`Decrease ${color}`} />
    </View>
  )
}

const style = StyleSheet.create({});