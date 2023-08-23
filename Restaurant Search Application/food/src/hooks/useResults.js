import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState([]);
    const [errorMsg, setErrorMsg] = useState("");
    const searchAPI = async searchTerm => {
        try {
            console.log("Hey there!");
          const response = await yelp.get("/search", {
            params: {
              limit: 50,
              term: searchTerm,
              location: "san jose",
            },
          });
          setResults(response.data.businesses);
          console.log("Pass");
        } catch (error) {
          setErrorMsg("Something went wrong");
        }
      };
    
      useEffect(() => {
        searchAPI('Pizza');
      }, []);

  return [searchAPI, results, errorMsg];
};
