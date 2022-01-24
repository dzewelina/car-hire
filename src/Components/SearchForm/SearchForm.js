import React, { useState, useEffect, useCallback } from "react";
import { debounce } from "lodash";
import fetchLocations from "./fetchLocations";
import "./SearchForm.css";

export const text = {
  title: "Car Hire – Search, Compare & Save",
  placeholderText: "Pick-up Location",
  screenReaderLabel: "Pick-up Location",
  noResults: "No results found.",
};

export const PlacesTypes = {
  A: "Airport",
  C: "City",
  D: "District",
  F: "Region",
  T: "Station",
};

export const useFetchSearchLocations = (searchText) => {
  const maxNumberOfLoc = 6;
  const delay = 1000;
  const [places, setPlaces] = useState([]);

  //   const debouncedFetch = useCallback(debounce(fetchLocations, delay), []);

  useEffect(() => {
    if (searchText && searchText.length > 1) {
      console.log(
        "I AM HERE"
        //   searchText,
        //   "I AM FETCHING",
        //   debouncedFetch(searchText, maxNumberOfLoc)
      );

      //   const calls = [];

      //   calls.push(debouncedFetch(searchText, maxNumberOfLoc));
      //   setTimeout(() => {
      //     calls.push(debouncedFetch(searchText, maxNumberOfLoc)) &&
      //       console.dir(calls);
      //   }, 3000);

      fetchLocations(searchText, maxNumberOfLoc).then((data) => {
        console.log("AAAAAA");
        if (data[0].name === "No results found") {
          console.log("HAHAHHAHAHAHAHAHAHHAH");
          setPlaces([{ name: text.noResults, placeKey: "no-results" }]);
        } else {
          setPlaces(data);
        }
      });
    } else {
      //   console.log("I AM NOT FETCHING");
      setPlaces([]);
    }
  }, [searchText]);

  return places;
};

///////////////////////////////////////////////////////////////////////

export const PlacesList = ({ places }) => (
  <ul>
    {places.map(({ placeKey, placeType, name, city, region, country }) => {
      const kindOfPlace = PlacesTypes[placeType];
      const description = [city, region, country].filter(Boolean).join(", ");

      return (
        <li key={placeKey}>
          <div className="li-element">
            {Boolean(kindOfPlace) && (
              <span className={`li-place-type ${kindOfPlace}`}>
                {kindOfPlace}
              </span>
            )}
            <div className="li-place-info">
              <p className="li-place-name">{name}</p>
              <p className="li-place-description">{description}</p>
            </div>
          </div>
        </li>
      );
    })}
  </ul>
);

////////////////////////////////////////////////////////////

const SearchForm = () => {
  const [searchText, setSerchText] = useState("");
  //   const [places, setPlaces] = useState([]);
  const places = useFetchSearchLocations(searchText);
  //   console.log("PLACES", places, "Search text:", searchText);

  const handleOnChange = (event) => setSerchText(event.target.value);

  return (
    <form role="search" className="form">
      <h1 className="form-title">{text.title}</h1>
      <div className="input-container">
        <div className="icon-input">
          <i className="fa fa-search icon"></i>
          <input
            className="input"
            type="text"
            aria-label={text.screenReaderLabel}
            placeholder={text.placeholderText}
            value={searchText}
            onChange={handleOnChange}
          />
        </div>
      </div>
      <PlacesList places={places} />
    </form>
  );
};

export default SearchForm;
