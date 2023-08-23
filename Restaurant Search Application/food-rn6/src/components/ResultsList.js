import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ResultDetail from './ResultDetail';
import { useNavigation } from "@react-navigation/native";

export default function ResultList({ title, results }) {
    const navigation = useNavigation();
    if (!results.length){
        return null;
    }
  return (
    <View style={styles.containerStyle}>
        <Text style = {styles.titleStyle} >{title}</Text>
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={(result) => result.id}
            renderItem={({item}) => {
                return (
                    <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', { id: item.id })}>
                        <ResultDetail result={item} />
                    </TouchableOpacity>
                )
            }}
        />
    </View>
  )
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5,
    },
    containerStyle: {
        marginBottom: 10
    }
});