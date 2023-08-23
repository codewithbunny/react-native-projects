import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ResultDetail from './ResultDetail';
import { withNavigation } from 'react-navigation';

export default withNavigation(function ResultList({ title, results, navigation }) {
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
                    <TouchableOpacity onPress={() => navigation.navigate('ResultShow', { id: item.id })}>
                        <ResultDetail result={item} />
                    </TouchableOpacity>
                )
            }}
        />
    </View>
  )
});

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