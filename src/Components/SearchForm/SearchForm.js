import React, { useState } from "react";
import "./SearchForm.css";

export const text = {
  title: "Car Hire – Search, Compare &amp; Save",
  placeholderText: "Pick-up Location",
  screenReaderLabel: "Pick-up Location",
};

function SearchForm() {
  const [searchText, setSerchText] = useState("");

  const handleOnChange = (event) => setSerchText(event.target.value);

  return (
    <form role="search" className="form">
      <h1 className="form-title">{text.title}</h1>
      <div className="input-container">
        <div className="icon-input">
          <i class="fa fa-search icon"></i>
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
    </form>
  );
}

export default SearchForm;
