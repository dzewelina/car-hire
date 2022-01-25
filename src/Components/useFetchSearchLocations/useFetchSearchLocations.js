import React, { useState, useEffect } from "react";
import fetchLocations from "../../Functions/fetchLocations";
import useDebounce from "../../Functions/useDebounce";
import { noResults } from "../../consts";

const useFetchSearchLocations = (searchText) => {
  const maxNumberOfLoc = 6;
  const delay = 500;

  const debouncedSearchText = useDebounce(searchText, delay);
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    if (debouncedSearchText && debouncedSearchText.length > 1) {
      fetchLocations(debouncedSearchText, maxNumberOfLoc).then((data) => {
        if (data[0].name === "No results found") {
          setPlaces(noResults);
        } else {
          setPlaces(data);
        }
      });
    } else {
      setPlaces([]);
    }
  }, [debouncedSearchText]);

  return places;
};

export default useFetchSearchLocations;
