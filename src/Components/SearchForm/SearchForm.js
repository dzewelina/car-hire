import React, { useState } from "react";
import PlacesList from "../PlacesList/PlacesList";
import useFetchSearchLocations from "../useFetchSearchLocations/useFetchSearchLocations";
import { text } from "../../consts";
import "./SearchForm.css";

const SearchForm = () => {
  const [searchText, setSerchText] = useState("");
  const places = useFetchSearchLocations(searchText);

  const handleOnChange = (event) => setSerchText(event.target.value);

  return (
    <div className="form-container">
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
    </div>
  );
};

export default SearchForm;
