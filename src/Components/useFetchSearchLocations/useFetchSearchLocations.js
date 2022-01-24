import React, { useState, useEffect, useCallback } from "react";
import fetchLocations from "../../Functions/fetchLocations";
import { text } from "../../consts";

const useFetchSearchLocations = (searchText) => {
  const maxNumberOfLoc = 6;
  const delay = 1000;
  const [places, setPlaces] = useState([]);

  //   const debouncedFetch = useCallback(debounce(fetchLocations, delay), []);

  useEffect(() => {
    if (searchText && searchText.length > 1) {
      //   console.log(
      //     "I AM HERE"
      //   searchText,
      //   "I AM FETCHING",
      //   debouncedFetch(searchText, maxNumberOfLoc)
      //   );

      //   const calls = [];

      //   calls.push(debouncedFetch(searchText, maxNumberOfLoc));
      //   setTimeout(() => {
      //     calls.push(debouncedFetch(searchText, maxNumberOfLoc)) &&
      //       console.dir(calls);
      //   }, 3000);

      fetchLocations(searchText, maxNumberOfLoc).then((data) => {
        if (data[0].name === "No results found") {
          setPlaces([{ name: text.noResults, placeKey: "no-results" }]);
        } else {
          setPlaces(data);
        }
      });
    } else {
      setPlaces([]);
    }
  }, [searchText]);

  return places;
};

export default useFetchSearchLocations;
