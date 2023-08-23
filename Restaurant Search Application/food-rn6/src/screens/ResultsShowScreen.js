import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import yelp from '../api/yelp';

export default function ResultsShowScreen({ route }) {  
    const id = route.params.id;
    const [result, setResults] = useState(null);
    console.log(result);

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResults(response.data);
    };
    useEffect(() => {
        getResult(id);
    }, []);

    if (!result){
        return null;
    }

  return (
    <View>
        <Text>
            {result.name}
        </Text>
        <FlatList
            data={result.photos}
            keyExtractor={(photo) => photo}
            renderItem={({item}) => {
                return(
                    <Image style={styles.imageStyles} source={{uri: item}}/>
                )
            }}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    imageStyles: {
        width: 300,
        height: 200,
    }
});