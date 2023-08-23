import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default function ResultDetail({result}) {
  return (
    <View style={styles.containerStyle}>
        <Image style= {styles.imageStyle} source={{ uri: result.image_url }}/>
        <Text style= {styles.nameStyle}>{result.name}</Text>
        <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    
    containerStyle: {
        marginLeft: 15
    },

    imageStyle: {
        width: 250,
        height: 150,
        borderRadius: 5,
        marginBottom: 5,
    },
    nameStyle: {
        fontWeight: 'bold',
        fontSize: 15,
        letterSpacing: 1.3,
    }
})
