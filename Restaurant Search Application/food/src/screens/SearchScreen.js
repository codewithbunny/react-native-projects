import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
// import yelp from "../api/yelp";
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultList";

export default function SearchScreen() {
  const [term, setTerm] = useState("");
  const [searchAPI, results, errorMsg] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View style = {styles.backgroundStyle}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchAPI(term)}
      />
      {errorMsg ? <Text>{errorMsg}</Text> : null}
      {/* <Text>We have found {results.length} results</Text> */}
      <ScrollView>
        <ResultList results={filterResultsByPrice("$")} title="Cost Effective"  />
        <ResultList results={filterResultsByPrice("$$")} title="Bit Pricier"  />
        <ResultList results={filterResultsByPrice("$$$")} title="Big Spender" />
      </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "white",
    flex: 1,
  },
});
